import * as octoAuth from "@octokit/auth-app"
import { StrategyOptions } from "@octokit/auth-app/dist-types/types"
import { Octokit } from "@octokit/core"
import { promises as fs } from "fs"

async function main() {
  // authenticate
  const configText = await fs.readFile("config.json", "utf-8")
  const authOpts = JSON.parse(configText) as StrategyOptions
  authOpts.privateKey = await fs.readFile("private-key.pem", "utf-8")

  // get installations
  const octokit = new Octokit({ authStrategy: octoAuth.createAppAuth, auth: authOpts })
  const response = await octokit.request("GET /app/installations")
  const installations = response.data

  // list installations
  for (const installation of installations) {
    process.stdout.write(`id: ${installation.id}, `)
    process.stdout.write(`account: ${installation.account.login}, `)
    // @ts-expect-error typedefs don't include this field
    if (installation["suspended_by"]) {
      // @ts-expect-error typedefs don't include this field
      process.stdout.write(`suspended on ${installation["suspended_at"]} by ${installation["suspended_by"].login}`)
    } else {
      process.stdout.write(`active`)
    }
    console.log()
  }
}

void main()
