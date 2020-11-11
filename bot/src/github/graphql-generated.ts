export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type AddCommentMutationVariables = Exact<{
  issueId: Scalars["ID"]
  text: Scalars["String"]
}>

export type AddCommentMutation = { __typename?: "Mutation" } & {
  addComment?: Maybe<{ __typename?: "AddCommentPayload" } & Pick<AddCommentPayload, "clientMutationId">>
}

export type PullRequestCommentAuthorsQueryVariables = Exact<{
  org: Scalars["String"]
  pullrequest: Scalars["Int"]
  repo: Scalars["String"]
}>

export type PullRequestCommentAuthorsQuery = { __typename?: "Query" } & {
  repository?: Maybe<
    { __typename?: "Repository" } & {
      pullRequest?: Maybe<
        { __typename?: "PullRequest" } & {
          comments: { __typename?: "IssueCommentConnection" } & {
            nodes?: Maybe<
              Array<
                Maybe<
                  { __typename?: "IssueComment" } & {
                    author?: Maybe<
                      | ({ __typename?: "Bot" } & Pick<Bot, "login">)
                      | ({ __typename?: "EnterpriseUserAccount" } & Pick<EnterpriseUserAccount, "login">)
                      | ({ __typename?: "Mannequin" } & Pick<Mannequin, "login">)
                      | ({ __typename?: "Organization" } & Pick<Organization, "login">)
                      | ({ __typename?: "User" } & Pick<User, "login">)
                    >
                  }
                >
              >
            >
          }
        }
      >
    }
  >
}

export type OnPullRequestQueryVariables = Exact<{
  org: Scalars["String"]
  repo: Scalars["String"]
}>

export type OnPullRequestQuery = { __typename?: "Query" } & {
  repository?: Maybe<
    { __typename?: "Repository" } & {
      package_json?: Maybe<
        | ({ __typename: "Blob" } & Pick<Blob, "text">)
        | { __typename: "Commit" }
        | { __typename: "Tag" }
        | { __typename: "Tree" }
      >
      prettierIgnore?: Maybe<
        | ({ __typename: "Blob" } & Pick<Blob, "text">)
        | { __typename: "Commit" }
        | { __typename: "Tag" }
        | { __typename: "Tree" }
      >
      prettierrc?: Maybe<
        | ({ __typename: "Blob" } & Pick<Blob, "text">)
        | { __typename: "Commit" }
        | { __typename: "Tag" }
        | { __typename: "Tree" }
      >
      prettierrc_json?: Maybe<
        | ({ __typename: "Blob" } & Pick<Blob, "text">)
        | { __typename: "Commit" }
        | { __typename: "Tag" }
        | { __typename: "Tree" }
      >
      prettierrc_json5?: Maybe<
        | ({ __typename: "Blob" } & Pick<Blob, "text">)
        | { __typename: "Commit" }
        | { __typename: "Tag" }
        | { __typename: "Tree" }
      >
      prettierrc_toml?: Maybe<
        | ({ __typename: "Blob" } & Pick<Blob, "text">)
        | { __typename: "Commit" }
        | { __typename: "Tag" }
        | { __typename: "Tree" }
      >
      prettierrc_yaml?: Maybe<
        | ({ __typename: "Blob" } & Pick<Blob, "text">)
        | { __typename: "Commit" }
        | { __typename: "Tag" }
        | { __typename: "Tree" }
      >
      prettierrc_yml?: Maybe<
        | ({ __typename: "Blob" } & Pick<Blob, "text">)
        | { __typename: "Commit" }
        | { __typename: "Tag" }
        | { __typename: "Tree" }
      >
      prettifierConfig?: Maybe<
        | ({ __typename: "Blob" } & Pick<Blob, "text">)
        | { __typename: "Commit" }
        | { __typename: "Tag" }
        | { __typename: "Tree" }
      >
    }
  >
}

export type OnPushQueryVariables = Exact<{
  branch: Scalars["String"]
  org: Scalars["String"]
  repo: Scalars["String"]
}>

export type OnPushQuery = { __typename?: "Query" } & {
  repository?: Maybe<
    { __typename?: "Repository" } & {
      package_json?: Maybe<
        | ({ __typename: "Blob" } & Pick<Blob, "text">)
        | { __typename: "Commit" }
        | { __typename: "Tag" }
        | { __typename: "Tree" }
      >
      prettierIgnore?: Maybe<
        | ({ __typename: "Blob" } & Pick<Blob, "text">)
        | { __typename: "Commit" }
        | { __typename: "Tag" }
        | { __typename: "Tree" }
      >
      prettierrc?: Maybe<
        | ({ __typename: "Blob" } & Pick<Blob, "text">)
        | { __typename: "Commit" }
        | { __typename: "Tag" }
        | { __typename: "Tree" }
      >
      prettierrc_json?: Maybe<
        | ({ __typename: "Blob" } & Pick<Blob, "text">)
        | { __typename: "Commit" }
        | { __typename: "Tag" }
        | { __typename: "Tree" }
      >
      prettierrc_json5?: Maybe<
        | ({ __typename: "Blob" } & Pick<Blob, "text">)
        | { __typename: "Commit" }
        | { __typename: "Tag" }
        | { __typename: "Tree" }
      >
      prettierrc_toml?: Maybe<
        | ({ __typename: "Blob" } & Pick<Blob, "text">)
        | { __typename: "Commit" }
        | { __typename: "Tag" }
        | { __typename: "Tree" }
      >
      prettierrc_yaml?: Maybe<
        | ({ __typename: "Blob" } & Pick<Blob, "text">)
        | { __typename: "Commit" }
        | { __typename: "Tag" }
        | { __typename: "Tree" }
      >
      prettierrc_yml?: Maybe<
        | ({ __typename: "Blob" } & Pick<Blob, "text">)
        | { __typename: "Commit" }
        | { __typename: "Tag" }
        | { __typename: "Tree" }
      >
      prettifierConfig?: Maybe<
        | ({ __typename: "Blob" } & Pick<Blob, "text">)
        | { __typename: "Commit" }
        | { __typename: "Tag" }
        | { __typename: "Tree" }
      >
      ref?: Maybe<
        { __typename?: "Ref" } & {
          associatedPullRequests: {
            __typename?: "PullRequestConnection"
          } & Pick<PullRequestConnection, "totalCount"> & {
              nodes?: Maybe<Array<Maybe<{ __typename?: "PullRequest" } & Pick<PullRequest, "number" | "id" | "url">>>>
            }
        }
      >
    }
  >
}

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  Boolean: boolean
  /** An ISO-8601 encoded date string. */
  Date: any
  /** An ISO-8601 encoded UTC date string. */
  DateTime: any
  Float: number
  /** A Git object ID. */
  GitObjectID: any
  /** Git SSH string */
  GitSSHRemote: any
  /** An ISO-8601 encoded date string. Unlike the DateTime type, GitTimestamp is not converted in UTC. */
  GitTimestamp: any
  /** A string containing HTML code. */
  HTML: any
  ID: string
  Int: number
  /** An ISO-8601 encoded UTC date string with millisecond precison. */
  PreciseDateTime: any
  String: string
  /** An RFC 3986, RFC 3987, and RFC 6570 (level 4) compliant URI string. */
  URI: any
  /** A valid x509 certificate string */
  X509Certificate: any
}

/** Autogenerated input type of AcceptEnterpriseAdministratorInvitation */
export type AcceptEnterpriseAdministratorInvitationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The id of the invitation being accepted */
  invitationId: Scalars["ID"]
}

/** Autogenerated return type of AcceptEnterpriseAdministratorInvitation */
export type AcceptEnterpriseAdministratorInvitationPayload = {
  __typename?: "AcceptEnterpriseAdministratorInvitationPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The invitation that was accepted. */
  invitation?: Maybe<EnterpriseAdministratorInvitation>
  /** A message confirming the result of accepting an administrator invitation. */
  message?: Maybe<Scalars["String"]>
}

/** Autogenerated input type of AcceptTopicSuggestion */
export type AcceptTopicSuggestionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The name of the suggested topic. */
  name: Scalars["String"]
  /** The Node ID of the repository. */
  repositoryId: Scalars["ID"]
}

/** Autogenerated return type of AcceptTopicSuggestion */
export type AcceptTopicSuggestionPayload = {
  __typename?: "AcceptTopicSuggestionPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The accepted topic. */
  topic?: Maybe<Topic>
}

/** Represents an object which can take actions on GitHub. Typically a User or Bot. */
export type Actor = {
  /** A URL pointing to the actor's public avatar. */
  avatarUrl: Scalars["URI"]
  /** The username of the actor. */
  login: Scalars["String"]
  /** The HTTP path for this actor. */
  resourcePath: Scalars["URI"]
  /** The HTTP URL for this actor. */
  url: Scalars["URI"]
}

/** Represents an object which can take actions on GitHub. Typically a User or Bot. */
export type ActorAvatarUrlArgs = {
  size?: Maybe<Scalars["Int"]>
}

/** Location information for an actor */
export type ActorLocation = {
  __typename?: "ActorLocation"
  /** City */
  city?: Maybe<Scalars["String"]>
  /** Country name */
  country?: Maybe<Scalars["String"]>
  /** Country code */
  countryCode?: Maybe<Scalars["String"]>
  /** Region name */
  region?: Maybe<Scalars["String"]>
  /** Region or state code */
  regionCode?: Maybe<Scalars["String"]>
}

/** Autogenerated input type of AddAssigneesToAssignable */
export type AddAssigneesToAssignableInput = {
  /** The id of the assignable object to add assignees to. */
  assignableId: Scalars["ID"]
  /** The id of users to add as assignees. */
  assigneeIds: Array<Scalars["ID"]>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
}

/** Autogenerated return type of AddAssigneesToAssignable */
export type AddAssigneesToAssignablePayload = {
  __typename?: "AddAssigneesToAssignablePayload"
  /** The item that was assigned. */
  assignable?: Maybe<Assignable>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
}

/** Autogenerated input type of AddComment */
export type AddCommentInput = {
  /** The contents of the comment. */
  body: Scalars["String"]
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The Node ID of the subject to modify. */
  subjectId: Scalars["ID"]
}

/** Autogenerated return type of AddComment */
export type AddCommentPayload = {
  __typename?: "AddCommentPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The edge from the subject's comment connection. */
  commentEdge?: Maybe<IssueCommentEdge>
  /** The subject */
  subject?: Maybe<Node>
  /** The edge from the subject's timeline connection. */
  timelineEdge?: Maybe<IssueTimelineItemEdge>
}

/** Autogenerated input type of AddLabelsToLabelable */
export type AddLabelsToLabelableInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ids of the labels to add. */
  labelIds: Array<Scalars["ID"]>
  /** The id of the labelable object to add labels to. */
  labelableId: Scalars["ID"]
}

/** Autogenerated return type of AddLabelsToLabelable */
export type AddLabelsToLabelablePayload = {
  __typename?: "AddLabelsToLabelablePayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The item that was labeled. */
  labelable?: Maybe<Labelable>
}

/** Autogenerated input type of AddProjectCard */
export type AddProjectCardInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The content of the card. Must be a member of the ProjectCardItem union */
  contentId?: Maybe<Scalars["ID"]>
  /** The note on the card. */
  note?: Maybe<Scalars["String"]>
  /** The Node ID of the ProjectColumn. */
  projectColumnId: Scalars["ID"]
}

/** Autogenerated return type of AddProjectCard */
export type AddProjectCardPayload = {
  __typename?: "AddProjectCardPayload"
  /** The edge from the ProjectColumn's card connection. */
  cardEdge?: Maybe<ProjectCardEdge>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ProjectColumn */
  projectColumn?: Maybe<ProjectColumn>
}

/** Autogenerated input type of AddProjectColumn */
export type AddProjectColumnInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The name of the column. */
  name: Scalars["String"]
  /** The Node ID of the project. */
  projectId: Scalars["ID"]
}

/** Autogenerated return type of AddProjectColumn */
export type AddProjectColumnPayload = {
  __typename?: "AddProjectColumnPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The edge from the project's column connection. */
  columnEdge?: Maybe<ProjectColumnEdge>
  /** The project */
  project?: Maybe<Project>
}

/** Autogenerated input type of AddPullRequestReviewComment */
export type AddPullRequestReviewCommentInput = {
  /** The text of the comment. */
  body: Scalars["String"]
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The SHA of the commit to comment on. */
  commitOID?: Maybe<Scalars["GitObjectID"]>
  /** The comment id to reply to. */
  inReplyTo?: Maybe<Scalars["ID"]>
  /** The relative path of the file to comment on. */
  path?: Maybe<Scalars["String"]>
  /** The line index in the diff to comment on. */
  position?: Maybe<Scalars["Int"]>
  /** The node ID of the pull request reviewing */
  pullRequestId?: Maybe<Scalars["ID"]>
  /** The Node ID of the review to modify. */
  pullRequestReviewId?: Maybe<Scalars["ID"]>
}

/** Autogenerated return type of AddPullRequestReviewComment */
export type AddPullRequestReviewCommentPayload = {
  __typename?: "AddPullRequestReviewCommentPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The newly created comment. */
  comment?: Maybe<PullRequestReviewComment>
  /** The edge from the review's comment connection. */
  commentEdge?: Maybe<PullRequestReviewCommentEdge>
}

/** Autogenerated input type of AddPullRequestReview */
export type AddPullRequestReviewInput = {
  /** The contents of the review body comment. */
  body?: Maybe<Scalars["String"]>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The review line comments. */
  comments?: Maybe<Array<Maybe<DraftPullRequestReviewComment>>>
  /** The commit OID the review pertains to. */
  commitOID?: Maybe<Scalars["GitObjectID"]>
  /** The event to perform on the pull request review. */
  event?: Maybe<PullRequestReviewEvent>
  /** The Node ID of the pull request to modify. */
  pullRequestId: Scalars["ID"]
  /** The review line comment threads. */
  threads?: Maybe<Array<Maybe<DraftPullRequestReviewThread>>>
}

/** Autogenerated return type of AddPullRequestReview */
export type AddPullRequestReviewPayload = {
  __typename?: "AddPullRequestReviewPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The newly created pull request review. */
  pullRequestReview?: Maybe<PullRequestReview>
  /** The edge from the pull request's review connection. */
  reviewEdge?: Maybe<PullRequestReviewEdge>
}

/** Autogenerated input type of AddPullRequestReviewThread */
export type AddPullRequestReviewThreadInput = {
  /** Body of the thread's first comment. */
  body: Scalars["String"]
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The line of the blob to which the thread refers. The end of the line range for multi-line comments. */
  line: Scalars["Int"]
  /** Path to the file being commented on. */
  path: Scalars["String"]
  /** The node ID of the pull request reviewing */
  pullRequestId?: Maybe<Scalars["ID"]>
  /** The Node ID of the review to modify. */
  pullRequestReviewId?: Maybe<Scalars["ID"]>
  /** The side of the diff on which the line resides. For multi-line comments, this is the side for the end of the line range. */
  side?: Maybe<DiffSide>
  /** The first line of the range to which the comment refers. */
  startLine?: Maybe<Scalars["Int"]>
  /** The side of the diff on which the start line resides. */
  startSide?: Maybe<DiffSide>
}

/** Autogenerated return type of AddPullRequestReviewThread */
export type AddPullRequestReviewThreadPayload = {
  __typename?: "AddPullRequestReviewThreadPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The newly created thread. */
  thread?: Maybe<PullRequestReviewThread>
}

/** Autogenerated input type of AddReaction */
export type AddReactionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The name of the emoji to react with. */
  content: ReactionContent
  /** The Node ID of the subject to modify. */
  subjectId: Scalars["ID"]
}

/** Autogenerated return type of AddReaction */
export type AddReactionPayload = {
  __typename?: "AddReactionPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The reaction object. */
  reaction?: Maybe<Reaction>
  /** The reactable subject. */
  subject?: Maybe<Reactable>
}

/** Autogenerated input type of AddStar */
export type AddStarInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The Starrable ID to star. */
  starrableId: Scalars["ID"]
}

/** Autogenerated return type of AddStar */
export type AddStarPayload = {
  __typename?: "AddStarPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The starrable. */
  starrable?: Maybe<Starrable>
}

/** Represents a 'added_to_project' event on a given issue or pull request. */
export type AddedToProjectEvent = Node & {
  __typename?: "AddedToProjectEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>
  id: Scalars["ID"]
}

/** A GitHub App. */
export type App = Node & {
  __typename?: "App"
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>
  /** The description of the app. */
  description?: Maybe<Scalars["String"]>
  id: Scalars["ID"]
  /** The hex color code, without the leading '#', for the logo background. */
  logoBackgroundColor: Scalars["String"]
  /** A URL pointing to the app's logo. */
  logoUrl: Scalars["URI"]
  /** The name of the app. */
  name: Scalars["String"]
  /** A slug based on the name of the app for use in URLs. */
  slug: Scalars["String"]
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"]
  /** The URL to the app's homepage. */
  url: Scalars["URI"]
}

/** A GitHub App. */
export type AppLogoUrlArgs = {
  size?: Maybe<Scalars["Int"]>
}

/** Autogenerated input type of ArchiveRepository */
export type ArchiveRepositoryInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ID of the repository to mark as archived. */
  repositoryId: Scalars["ID"]
}

/** Autogenerated return type of ArchiveRepository */
export type ArchiveRepositoryPayload = {
  __typename?: "ArchiveRepositoryPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The repository that was marked as archived. */
  repository?: Maybe<Repository>
}

/** An object that can have users assigned to it. */
export type Assignable = {
  /** A list of Users assigned to this object. */
  assignees: UserConnection
}

/** An object that can have users assigned to it. */
export type AssignableAssigneesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** Represents an 'assigned' event on any assignable object. */
export type AssignedEvent = Node & {
  __typename?: "AssignedEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** Identifies the assignable associated with the event. */
  assignable: Assignable
  /** Identifies the user or mannequin that was assigned. */
  assignee?: Maybe<Assignee>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  id: Scalars["ID"]
  /**
   * Identifies the user who was assigned.
   * @deprecated Assignees can now be mannequins. Use the `assignee` field instead. Removal on 2020-01-01 UTC.
   */
  user?: Maybe<User>
}

/** Types that can be assigned to issues. */
export type Assignee = Bot | Mannequin | Organization | User

/** An entry in the audit log. */
export type AuditEntry = {
  /** The action name */
  action: Scalars["String"]
  /** The user who initiated the action */
  actor?: Maybe<AuditEntryActor>
  /** The IP address of the actor */
  actorIp?: Maybe<Scalars["String"]>
  /** A readable representation of the actor's location */
  actorLocation?: Maybe<ActorLocation>
  /** The username of the user who initiated the action */
  actorLogin?: Maybe<Scalars["String"]>
  /** The HTTP path for the actor. */
  actorResourcePath?: Maybe<Scalars["URI"]>
  /** The HTTP URL for the actor. */
  actorUrl?: Maybe<Scalars["URI"]>
  /** The time the action was initiated */
  createdAt: Scalars["PreciseDateTime"]
  /** The corresponding operation type for the action */
  operationType?: Maybe<OperationType>
  /** The user affected by the action */
  user?: Maybe<User>
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  userLogin?: Maybe<Scalars["String"]>
  /** The HTTP path for the user. */
  userResourcePath?: Maybe<Scalars["URI"]>
  /** The HTTP URL for the user. */
  userUrl?: Maybe<Scalars["URI"]>
}

/** Types that can initiate an audit log event. */
export type AuditEntryActor = Bot | Organization | User

/** Ordering options for Audit Log connections. */
export type AuditLogOrder = {
  /** The ordering direction. */
  direction?: Maybe<OrderDirection>
  /** The field to order Audit Logs by. */
  field?: Maybe<AuditLogOrderField>
}

/** Properties by which Audit Log connections can be ordered. */
export enum AuditLogOrderField {
  /** Order audit log entries by timestamp */
  CreatedAt = "CREATED_AT",
}

/** Represents a 'automatic_base_change_failed' event on a given pull request. */
export type AutomaticBaseChangeFailedEvent = Node & {
  __typename?: "AutomaticBaseChangeFailedEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  id: Scalars["ID"]
  /** The new base for this PR */
  newBase: Scalars["String"]
  /** The old base for this PR */
  oldBase: Scalars["String"]
  /** PullRequest referenced by event. */
  pullRequest: PullRequest
}

/** Represents a 'automatic_base_change_succeeded' event on a given pull request. */
export type AutomaticBaseChangeSucceededEvent = Node & {
  __typename?: "AutomaticBaseChangeSucceededEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  id: Scalars["ID"]
  /** The new base for this PR */
  newBase: Scalars["String"]
  /** The old base for this PR */
  oldBase: Scalars["String"]
  /** PullRequest referenced by event. */
  pullRequest: PullRequest
}

/** Represents a 'base_ref_changed' event on a given issue or pull request. */
export type BaseRefChangedEvent = Node & {
  __typename?: "BaseRefChangedEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  /** Identifies the name of the base ref for the pull request after it was changed. */
  currentRefName: Scalars["String"]
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>
  id: Scalars["ID"]
  /** Identifies the name of the base ref for the pull request before it was changed. */
  previousRefName: Scalars["String"]
  /** PullRequest referenced by event. */
  pullRequest: PullRequest
}

/** Represents a 'base_ref_deleted' event on a given pull request. */
export type BaseRefDeletedEvent = Node & {
  __typename?: "BaseRefDeletedEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** Identifies the name of the Ref associated with the `base_ref_deleted` event. */
  baseRefName?: Maybe<Scalars["String"]>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  id: Scalars["ID"]
  /** PullRequest referenced by event. */
  pullRequest?: Maybe<PullRequest>
}

/** Represents a 'base_ref_force_pushed' event on a given pull request. */
export type BaseRefForcePushedEvent = Node & {
  __typename?: "BaseRefForcePushedEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** Identifies the after commit SHA for the 'base_ref_force_pushed' event. */
  afterCommit?: Maybe<Commit>
  /** Identifies the before commit SHA for the 'base_ref_force_pushed' event. */
  beforeCommit?: Maybe<Commit>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  id: Scalars["ID"]
  /** PullRequest referenced by event. */
  pullRequest: PullRequest
  /** Identifies the fully qualified ref name for the 'base_ref_force_pushed' event. */
  ref?: Maybe<Ref>
}

/** Represents a Git blame. */
export type Blame = {
  __typename?: "Blame"
  /** The list of ranges from a Git blame. */
  ranges: Array<BlameRange>
}

/** Represents a range of information from a Git blame. */
export type BlameRange = {
  __typename?: "BlameRange"
  /**
   * Identifies the recency of the change, from 1 (new) to 10 (old). This is
   * calculated as a 2-quantile and determines the length of distance between the
   * median age of all the changes in the file and the recency of the current
   * range's change.
   */
  age: Scalars["Int"]
  /** Identifies the line author */
  commit: Commit
  /** The ending line for the range */
  endingLine: Scalars["Int"]
  /** The starting line for the range */
  startingLine: Scalars["Int"]
}

/** Represents a Git blob. */
export type Blob = GitObject &
  Node & {
    __typename?: "Blob"
    /** An abbreviated version of the Git object ID */
    abbreviatedOid: Scalars["String"]
    /** Byte size of Blob object */
    byteSize: Scalars["Int"]
    /** The HTTP path for this Git object */
    commitResourcePath: Scalars["URI"]
    /** The HTTP URL for this Git object */
    commitUrl: Scalars["URI"]
    id: Scalars["ID"]
    /** Indicates whether the Blob is binary or text. Returns null if unable to determine the encoding. */
    isBinary?: Maybe<Scalars["Boolean"]>
    /** Indicates whether the contents is truncated */
    isTruncated: Scalars["Boolean"]
    /** The Git object ID */
    oid: Scalars["GitObjectID"]
    /** The Repository the Git object belongs to */
    repository: Repository
    /** UTF8 text data or null if the Blob is binary */
    text?: Maybe<Scalars["String"]>
  }

/** A special type of user which takes actions on behalf of GitHub Apps. */
export type Bot = Actor &
  Node &
  UniformResourceLocatable & {
    __typename?: "Bot"
    /** A URL pointing to the GitHub App's public avatar. */
    avatarUrl: Scalars["URI"]
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["DateTime"]
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>
    id: Scalars["ID"]
    /** The username of the actor. */
    login: Scalars["String"]
    /** The HTTP path for this bot */
    resourcePath: Scalars["URI"]
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["DateTime"]
    /** The HTTP URL for this bot */
    url: Scalars["URI"]
  }

/** A special type of user which takes actions on behalf of GitHub Apps. */
export type BotAvatarUrlArgs = {
  size?: Maybe<Scalars["Int"]>
}

/** A branch protection rule. */
export type BranchProtectionRule = Node & {
  __typename?: "BranchProtectionRule"
  /** Can this branch be deleted. */
  allowsDeletions: Scalars["Boolean"]
  /** Are force pushes allowed on this branch. */
  allowsForcePushes: Scalars["Boolean"]
  /** A list of conflicts matching branches protection rule and other branch protection rules */
  branchProtectionRuleConflicts: BranchProtectionRuleConflictConnection
  /** The actor who created this branch protection rule. */
  creator?: Maybe<Actor>
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>
  /** Will new commits pushed to matching branches dismiss pull request review approvals. */
  dismissesStaleReviews: Scalars["Boolean"]
  id: Scalars["ID"]
  /** Can admins overwrite branch protection. */
  isAdminEnforced: Scalars["Boolean"]
  /** Repository refs that are protected by this rule */
  matchingRefs: RefConnection
  /** Identifies the protection rule pattern. */
  pattern: Scalars["String"]
  /** A list push allowances for this branch protection rule. */
  pushAllowances: PushAllowanceConnection
  /** The repository associated with this branch protection rule. */
  repository?: Maybe<Repository>
  /** Number of approving reviews required to update matching branches. */
  requiredApprovingReviewCount?: Maybe<Scalars["Int"]>
  /** List of required status check contexts that must pass for commits to be accepted to matching branches. */
  requiredStatusCheckContexts?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Are approving reviews required to update matching branches. */
  requiresApprovingReviews: Scalars["Boolean"]
  /** Are reviews from code owners required to update matching branches. */
  requiresCodeOwnerReviews: Scalars["Boolean"]
  /** Are commits required to be signed. */
  requiresCommitSignatures: Scalars["Boolean"]
  /** Are merge commits prohibited from being pushed to this branch. */
  requiresLinearHistory: Scalars["Boolean"]
  /** Are status checks required to update matching branches. */
  requiresStatusChecks: Scalars["Boolean"]
  /** Are branches required to be up to date before merging. */
  requiresStrictStatusChecks: Scalars["Boolean"]
  /** Is pushing to matching branches restricted. */
  restrictsPushes: Scalars["Boolean"]
  /** Is dismissal of pull request reviews restricted. */
  restrictsReviewDismissals: Scalars["Boolean"]
  /** A list review dismissal allowances for this branch protection rule. */
  reviewDismissalAllowances: ReviewDismissalAllowanceConnection
}

/** A branch protection rule. */
export type BranchProtectionRuleBranchProtectionRuleConflictsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** A branch protection rule. */
export type BranchProtectionRuleMatchingRefsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  query?: Maybe<Scalars["String"]>
}

/** A branch protection rule. */
export type BranchProtectionRulePushAllowancesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** A branch protection rule. */
export type BranchProtectionRuleReviewDismissalAllowancesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** A conflict between two branch protection rules. */
export type BranchProtectionRuleConflict = {
  __typename?: "BranchProtectionRuleConflict"
  /** Identifies the branch protection rule. */
  branchProtectionRule?: Maybe<BranchProtectionRule>
  /** Identifies the conflicting branch protection rule. */
  conflictingBranchProtectionRule?: Maybe<BranchProtectionRule>
  /** Identifies the branch ref that has conflicting rules */
  ref?: Maybe<Ref>
}

/** The connection type for BranchProtectionRuleConflict. */
export type BranchProtectionRuleConflictConnection = {
  __typename?: "BranchProtectionRuleConflictConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BranchProtectionRuleConflictEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<BranchProtectionRuleConflict>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type BranchProtectionRuleConflictEdge = {
  __typename?: "BranchProtectionRuleConflictEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<BranchProtectionRuleConflict>
}

/** The connection type for BranchProtectionRule. */
export type BranchProtectionRuleConnection = {
  __typename?: "BranchProtectionRuleConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BranchProtectionRuleEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<BranchProtectionRule>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type BranchProtectionRuleEdge = {
  __typename?: "BranchProtectionRuleEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<BranchProtectionRule>
}

/** Autogenerated input type of CancelEnterpriseAdminInvitation */
export type CancelEnterpriseAdminInvitationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The Node ID of the pending enterprise administrator invitation. */
  invitationId: Scalars["ID"]
}

/** Autogenerated return type of CancelEnterpriseAdminInvitation */
export type CancelEnterpriseAdminInvitationPayload = {
  __typename?: "CancelEnterpriseAdminInvitationPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The invitation that was canceled. */
  invitation?: Maybe<EnterpriseAdministratorInvitation>
  /** A message confirming the result of canceling an administrator invitation. */
  message?: Maybe<Scalars["String"]>
}

/** Autogenerated input type of ChangeUserStatus */
export type ChangeUserStatusInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The emoji to represent your status. Can either be a native Unicode emoji or an emoji name with colons, e.g., :grinning:. */
  emoji?: Maybe<Scalars["String"]>
  /** If set, the user status will not be shown after this date. */
  expiresAt?: Maybe<Scalars["DateTime"]>
  /** Whether this status should indicate you are not fully available on GitHub, e.g., you are away. */
  limitedAvailability?: Maybe<Scalars["Boolean"]>
  /** A short description of your current status. */
  message?: Maybe<Scalars["String"]>
  /**
   * The ID of the organization whose members will be allowed to see the status. If
   * omitted, the status will be publicly visible.
   */
  organizationId?: Maybe<Scalars["ID"]>
}

/** Autogenerated return type of ChangeUserStatus */
export type ChangeUserStatusPayload = {
  __typename?: "ChangeUserStatusPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** Your updated status. */
  status?: Maybe<UserStatus>
}

/** A single check annotation. */
export type CheckAnnotation = {
  __typename?: "CheckAnnotation"
  /** The annotation's severity level. */
  annotationLevel?: Maybe<CheckAnnotationLevel>
  /** The path to the file that this annotation was made on. */
  blobUrl: Scalars["URI"]
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>
  /** The position of this annotation. */
  location: CheckAnnotationSpan
  /** The annotation's message. */
  message: Scalars["String"]
  /** The path that this annotation was made on. */
  path: Scalars["String"]
  /** Additional information about the annotation. */
  rawDetails?: Maybe<Scalars["String"]>
  /** The annotation's title */
  title?: Maybe<Scalars["String"]>
}

/** The connection type for CheckAnnotation. */
export type CheckAnnotationConnection = {
  __typename?: "CheckAnnotationConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CheckAnnotationEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CheckAnnotation>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** Information from a check run analysis to specific lines of code. */
export type CheckAnnotationData = {
  /** Represents an annotation's information level */
  annotationLevel: CheckAnnotationLevel
  /** The location of the annotation */
  location: CheckAnnotationRange
  /** A short description of the feedback for these lines of code. */
  message: Scalars["String"]
  /** The path of the file to add an annotation to. */
  path: Scalars["String"]
  /** Details about this annotation. */
  rawDetails?: Maybe<Scalars["String"]>
  /** The title that represents the annotation. */
  title?: Maybe<Scalars["String"]>
}

/** An edge in a connection. */
export type CheckAnnotationEdge = {
  __typename?: "CheckAnnotationEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<CheckAnnotation>
}

/** Represents an annotation's information level. */
export enum CheckAnnotationLevel {
  /** An annotation indicating an inescapable error. */
  Failure = "FAILURE",
  /** An annotation indicating some information. */
  Notice = "NOTICE",
  /** An annotation indicating an ignorable error. */
  Warning = "WARNING",
}

/** A character position in a check annotation. */
export type CheckAnnotationPosition = {
  __typename?: "CheckAnnotationPosition"
  /** Column number (1 indexed). */
  column?: Maybe<Scalars["Int"]>
  /** Line number (1 indexed). */
  line: Scalars["Int"]
}

/** Information from a check run analysis to specific lines of code. */
export type CheckAnnotationRange = {
  /** The ending column of the range. */
  endColumn?: Maybe<Scalars["Int"]>
  /** The ending line of the range. */
  endLine: Scalars["Int"]
  /** The starting column of the range. */
  startColumn?: Maybe<Scalars["Int"]>
  /** The starting line of the range. */
  startLine: Scalars["Int"]
}

/** An inclusive pair of positions for a check annotation. */
export type CheckAnnotationSpan = {
  __typename?: "CheckAnnotationSpan"
  /** End position (inclusive). */
  end: CheckAnnotationPosition
  /** Start position (inclusive). */
  start: CheckAnnotationPosition
}

/** The possible states for a check suite or run conclusion. */
export enum CheckConclusionState {
  /** The check suite or run requires action. */
  ActionRequired = "ACTION_REQUIRED",
  /** The check suite or run has been cancelled. */
  Cancelled = "CANCELLED",
  /** The check suite or run has failed. */
  Failure = "FAILURE",
  /** The check suite or run was neutral. */
  Neutral = "NEUTRAL",
  /** The check suite or run was skipped. */
  Skipped = "SKIPPED",
  /** The check suite or run was marked stale by GitHub. Only GitHub can use this conclusion. */
  Stale = "STALE",
  /** The check suite or run has succeeded. */
  Success = "SUCCESS",
  /** The check suite or run has timed out. */
  TimedOut = "TIMED_OUT",
}

/** A check run. */
export type CheckRun = Node &
  UniformResourceLocatable & {
    __typename?: "CheckRun"
    /** The check run's annotations */
    annotations?: Maybe<CheckAnnotationConnection>
    /** The check suite that this run is a part of. */
    checkSuite: CheckSuite
    /** Identifies the date and time when the check run was completed. */
    completedAt?: Maybe<Scalars["DateTime"]>
    /** The conclusion of the check run. */
    conclusion?: Maybe<CheckConclusionState>
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>
    /** The URL from which to find full details of the check run on the integrator's site. */
    detailsUrl?: Maybe<Scalars["URI"]>
    /** A reference for the check run on the integrator's system. */
    externalId?: Maybe<Scalars["String"]>
    id: Scalars["ID"]
    /** The name of the check for this check run. */
    name: Scalars["String"]
    /** The permalink to the check run summary. */
    permalink: Scalars["URI"]
    /** The repository associated with this check run. */
    repository: Repository
    /** The HTTP path for this check run. */
    resourcePath: Scalars["URI"]
    /** Identifies the date and time when the check run was started. */
    startedAt?: Maybe<Scalars["DateTime"]>
    /** The current status of the check run. */
    status: CheckStatusState
    /** A string representing the check run's summary */
    summary?: Maybe<Scalars["String"]>
    /** A string representing the check run's text */
    text?: Maybe<Scalars["String"]>
    /** A string representing the check run */
    title?: Maybe<Scalars["String"]>
    /** The HTTP URL for this check run. */
    url: Scalars["URI"]
  }

/** A check run. */
export type CheckRunAnnotationsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** Possible further actions the integrator can perform. */
export type CheckRunAction = {
  /** A short explanation of what this action would do. */
  description: Scalars["String"]
  /** A reference for the action on the integrator's system.  */
  identifier: Scalars["String"]
  /** The text to be displayed on a button in the web UI. */
  label: Scalars["String"]
}

/** The connection type for CheckRun. */
export type CheckRunConnection = {
  __typename?: "CheckRunConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CheckRunEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CheckRun>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type CheckRunEdge = {
  __typename?: "CheckRunEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<CheckRun>
}

/** The filters that are available when fetching check runs. */
export type CheckRunFilter = {
  /** Filters the check runs created by this application ID. */
  appId?: Maybe<Scalars["Int"]>
  /** Filters the check runs by this name. */
  checkName?: Maybe<Scalars["String"]>
  /** Filters the check runs by this type. */
  checkType?: Maybe<CheckRunType>
  /** Filters the check runs by this status. */
  status?: Maybe<CheckStatusState>
}

/** Descriptive details about the check run. */
export type CheckRunOutput = {
  /** The annotations that are made as part of the check run. */
  annotations?: Maybe<Array<CheckAnnotationData>>
  /** Images attached to the check run output displayed in the GitHub pull request UI. */
  images?: Maybe<Array<CheckRunOutputImage>>
  /** The summary of the check run (supports Commonmark). */
  summary: Scalars["String"]
  /** The details of the check run (supports Commonmark). */
  text?: Maybe<Scalars["String"]>
  /** A title to provide for this check run. */
  title: Scalars["String"]
}

/** Images attached to the check run output displayed in the GitHub pull request UI. */
export type CheckRunOutputImage = {
  /** The alternative text for the image. */
  alt: Scalars["String"]
  /** A short image description. */
  caption?: Maybe<Scalars["String"]>
  /** The full URL of the image. */
  imageUrl: Scalars["URI"]
}

/** The possible types of check runs. */
export enum CheckRunType {
  /** Every check run available. */
  All = "ALL",
  /** The latest check run. */
  Latest = "LATEST",
}

/** The possible states for a check suite or run status. */
export enum CheckStatusState {
  /** The check suite or run has been completed. */
  Completed = "COMPLETED",
  /** The check suite or run is in progress. */
  InProgress = "IN_PROGRESS",
  /** The check suite or run has been queued. */
  Queued = "QUEUED",
  /** The check suite or run has been requested. */
  Requested = "REQUESTED",
}

/** A check suite. */
export type CheckSuite = Node & {
  __typename?: "CheckSuite"
  /** The GitHub App which created this check suite. */
  app?: Maybe<App>
  /** The name of the branch for this check suite. */
  branch?: Maybe<Ref>
  /** The check runs associated with a check suite. */
  checkRuns?: Maybe<CheckRunConnection>
  /** The commit for this check suite */
  commit: Commit
  /** The conclusion of this check suite. */
  conclusion?: Maybe<CheckConclusionState>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>
  id: Scalars["ID"]
  /** A list of open pull requests matching the check suite. */
  matchingPullRequests?: Maybe<PullRequestConnection>
  /** The push that triggered this check suite. */
  push?: Maybe<Push>
  /** The repository associated with this check suite. */
  repository: Repository
  /** The HTTP path for this check suite */
  resourcePath: Scalars["URI"]
  /** The status of this check suite. */
  status: CheckStatusState
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"]
  /** The HTTP URL for this check suite */
  url: Scalars["URI"]
}

/** A check suite. */
export type CheckSuiteCheckRunsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  filterBy?: Maybe<CheckRunFilter>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** A check suite. */
export type CheckSuiteMatchingPullRequestsArgs = {
  after?: Maybe<Scalars["String"]>
  baseRefName?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  headRefName?: Maybe<Scalars["String"]>
  labels?: Maybe<Array<Scalars["String"]>>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<IssueOrder>
  states?: Maybe<Array<PullRequestState>>
}

/** The auto-trigger preferences that are available for check suites. */
export type CheckSuiteAutoTriggerPreference = {
  /** The node ID of the application that owns the check suite. */
  appId: Scalars["ID"]
  /** Set to `true` to enable automatic creation of CheckSuite events upon pushes to the repository. */
  setting: Scalars["Boolean"]
}

/** The connection type for CheckSuite. */
export type CheckSuiteConnection = {
  __typename?: "CheckSuiteConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CheckSuiteEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CheckSuite>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type CheckSuiteEdge = {
  __typename?: "CheckSuiteEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<CheckSuite>
}

/** The filters that are available when fetching check suites. */
export type CheckSuiteFilter = {
  /** Filters the check suites created by this application ID. */
  appId?: Maybe<Scalars["Int"]>
  /** Filters the check suites by this name. */
  checkName?: Maybe<Scalars["String"]>
}

/** Autogenerated input type of ClearLabelsFromLabelable */
export type ClearLabelsFromLabelableInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The id of the labelable object to clear the labels from. */
  labelableId: Scalars["ID"]
}

/** Autogenerated return type of ClearLabelsFromLabelable */
export type ClearLabelsFromLabelablePayload = {
  __typename?: "ClearLabelsFromLabelablePayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The item that was unlabeled. */
  labelable?: Maybe<Labelable>
}

/** Autogenerated input type of CloneProject */
export type CloneProjectInput = {
  /** The description of the project. */
  body?: Maybe<Scalars["String"]>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** Whether or not to clone the source project's workflows. */
  includeWorkflows: Scalars["Boolean"]
  /** The name of the project. */
  name: Scalars["String"]
  /** The visibility of the project, defaults to false (private). */
  public?: Maybe<Scalars["Boolean"]>
  /** The source project to clone. */
  sourceId: Scalars["ID"]
  /** The owner ID to create the project under. */
  targetOwnerId: Scalars["ID"]
}

/** Autogenerated return type of CloneProject */
export type CloneProjectPayload = {
  __typename?: "CloneProjectPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The id of the JobStatus for populating cloned fields. */
  jobStatusId?: Maybe<Scalars["String"]>
  /** The new cloned project. */
  project?: Maybe<Project>
}

/** Autogenerated input type of CloneTemplateRepository */
export type CloneTemplateRepositoryInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** A short description of the new repository. */
  description?: Maybe<Scalars["String"]>
  /**
   * Whether to copy all branches from the template to the new repository. Defaults
   * to copying only the default branch of the template.
   */
  includeAllBranches?: Maybe<Scalars["Boolean"]>
  /** The name of the new repository. */
  name: Scalars["String"]
  /** The ID of the owner for the new repository. */
  ownerId: Scalars["ID"]
  /** The Node ID of the template repository. */
  repositoryId: Scalars["ID"]
  /** Indicates the repository's visibility level. */
  visibility: RepositoryVisibility
}

/** Autogenerated return type of CloneTemplateRepository */
export type CloneTemplateRepositoryPayload = {
  __typename?: "CloneTemplateRepositoryPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The new repository. */
  repository?: Maybe<Repository>
}

/** An object that can be closed */
export type Closable = {
  /** `true` if the object is closed (definition of closed may depend on type) */
  closed: Scalars["Boolean"]
  /** Identifies the date and time when the object was closed. */
  closedAt?: Maybe<Scalars["DateTime"]>
}

/** Autogenerated input type of CloseIssue */
export type CloseIssueInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** ID of the issue to be closed. */
  issueId: Scalars["ID"]
}

/** Autogenerated return type of CloseIssue */
export type CloseIssuePayload = {
  __typename?: "CloseIssuePayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The issue that was closed. */
  issue?: Maybe<Issue>
}

/** Autogenerated input type of ClosePullRequest */
export type ClosePullRequestInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** ID of the pull request to be closed. */
  pullRequestId: Scalars["ID"]
}

/** Autogenerated return type of ClosePullRequest */
export type ClosePullRequestPayload = {
  __typename?: "ClosePullRequestPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The pull request that was closed. */
  pullRequest?: Maybe<PullRequest>
}

/** Represents a 'closed' event on any `Closable`. */
export type ClosedEvent = Node &
  UniformResourceLocatable & {
    __typename?: "ClosedEvent"
    /** Identifies the actor who performed the event. */
    actor?: Maybe<Actor>
    /** Object that was closed. */
    closable: Closable
    /** Object which triggered the creation of this event. */
    closer?: Maybe<Closer>
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["DateTime"]
    id: Scalars["ID"]
    /** The HTTP path for this closed event. */
    resourcePath: Scalars["URI"]
    /** The HTTP URL for this closed event. */
    url: Scalars["URI"]
  }

/** The object which triggered a `ClosedEvent`. */
export type Closer = Commit | PullRequest

/** The Code of Conduct for a repository */
export type CodeOfConduct = Node & {
  __typename?: "CodeOfConduct"
  /** The body of the Code of Conduct */
  body?: Maybe<Scalars["String"]>
  id: Scalars["ID"]
  /** The key for the Code of Conduct */
  key: Scalars["String"]
  /** The formal name of the Code of Conduct */
  name: Scalars["String"]
  /** The HTTP path for this Code of Conduct */
  resourcePath?: Maybe<Scalars["URI"]>
  /** The HTTP URL for this Code of Conduct */
  url?: Maybe<Scalars["URI"]>
}

/** Collaborators affiliation level with a subject. */
export enum CollaboratorAffiliation {
  /** All collaborators the authenticated user can see. */
  All = "ALL",
  /** All collaborators with permissions to an organization-owned subject, regardless of organization membership status. */
  Direct = "DIRECT",
  /** All outside collaborators of an organization-owned subject. */
  Outside = "OUTSIDE",
}

/** Represents a comment. */
export type Comment = {
  /** The actor who authored the comment. */
  author?: Maybe<Actor>
  /** Author's association with the subject of the comment. */
  authorAssociation: CommentAuthorAssociation
  /** The body as Markdown. */
  body: Scalars["String"]
  /** The body rendered to HTML. */
  bodyHTML: Scalars["HTML"]
  /** The body rendered to text. */
  bodyText: Scalars["String"]
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  /** Check if this comment was created via an email reply. */
  createdViaEmail: Scalars["Boolean"]
  /** The actor who edited the comment. */
  editor?: Maybe<Actor>
  id: Scalars["ID"]
  /** Check if this comment was edited and includes an edit with the creation data */
  includesCreatedEdit: Scalars["Boolean"]
  /** The moment the editor made the last edit */
  lastEditedAt?: Maybe<Scalars["DateTime"]>
  /** Identifies when the comment was published at. */
  publishedAt?: Maybe<Scalars["DateTime"]>
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"]
  /** A list of edits to this content. */
  userContentEdits?: Maybe<UserContentEditConnection>
  /** Did the viewer author this comment. */
  viewerDidAuthor: Scalars["Boolean"]
}

/** Represents a comment. */
export type CommentUserContentEditsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** A comment author association with repository. */
export enum CommentAuthorAssociation {
  /** Author has been invited to collaborate on the repository. */
  Collaborator = "COLLABORATOR",
  /** Author has previously committed to the repository. */
  Contributor = "CONTRIBUTOR",
  /** Author has not previously committed to the repository. */
  FirstTimeContributor = "FIRST_TIME_CONTRIBUTOR",
  /** Author has not previously committed to GitHub. */
  FirstTimer = "FIRST_TIMER",
  /** Author is a placeholder for an unclaimed user. */
  Mannequin = "MANNEQUIN",
  /** Author is a member of the organization that owns the repository. */
  Member = "MEMBER",
  /** Author has no association with the repository. */
  None = "NONE",
  /** Author is the owner of the repository. */
  Owner = "OWNER",
}

/** The possible errors that will prevent a user from updating a comment. */
export enum CommentCannotUpdateReason {
  /** Unable to create comment because repository is archived. */
  Archived = "ARCHIVED",
  /** You cannot update this comment */
  Denied = "DENIED",
  /** You must be the author or have write access to this repository to update this comment. */
  InsufficientAccess = "INSUFFICIENT_ACCESS",
  /** Unable to create comment because issue is locked. */
  Locked = "LOCKED",
  /** You must be logged in to update this comment. */
  LoginRequired = "LOGIN_REQUIRED",
  /** Repository is under maintenance. */
  Maintenance = "MAINTENANCE",
  /** At least one email address must be verified to update this comment. */
  VerifiedEmailRequired = "VERIFIED_EMAIL_REQUIRED",
}

/** Represents a 'comment_deleted' event on a given issue or pull request. */
export type CommentDeletedEvent = Node & {
  __typename?: "CommentDeletedEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>
  /** The user who authored the deleted comment. */
  deletedCommentAuthor?: Maybe<Actor>
  id: Scalars["ID"]
}

/** Represents a Git commit. */
export type Commit = GitObject &
  Node &
  Subscribable &
  UniformResourceLocatable & {
    __typename?: "Commit"
    /** An abbreviated version of the Git object ID */
    abbreviatedOid: Scalars["String"]
    /** The number of additions in this commit. */
    additions: Scalars["Int"]
    /** The pull requests associated with a commit */
    associatedPullRequests?: Maybe<PullRequestConnection>
    /** Authorship details of the commit. */
    author?: Maybe<GitActor>
    /** Check if the committer and the author match. */
    authoredByCommitter: Scalars["Boolean"]
    /** The datetime when this commit was authored. */
    authoredDate: Scalars["DateTime"]
    /**
     * The list of authors for this commit based on the git author and the Co-authored-by
     * message trailer. The git author will always be first.
     */
    authors: GitActorConnection
    /** Fetches `git blame` information. */
    blame: Blame
    /** The number of changed files in this commit. */
    changedFiles: Scalars["Int"]
    /** The check suites associated with a commit. */
    checkSuites?: Maybe<CheckSuiteConnection>
    /** Comments made on the commit. */
    comments: CommitCommentConnection
    /** The HTTP path for this Git object */
    commitResourcePath: Scalars["URI"]
    /** The HTTP URL for this Git object */
    commitUrl: Scalars["URI"]
    /** The datetime when this commit was committed. */
    committedDate: Scalars["DateTime"]
    /** Check if commited via GitHub web UI. */
    committedViaWeb: Scalars["Boolean"]
    /** Committership details of the commit. */
    committer?: Maybe<GitActor>
    /** The number of deletions in this commit. */
    deletions: Scalars["Int"]
    /** The deployments associated with a commit. */
    deployments?: Maybe<DeploymentConnection>
    /** The tree entry representing the file located at the given path. */
    file?: Maybe<TreeEntry>
    /** The linear commit history starting from (and including) this commit, in the same order as `git log`. */
    history: CommitHistoryConnection
    id: Scalars["ID"]
    /** The Git commit message */
    message: Scalars["String"]
    /** The Git commit message body */
    messageBody: Scalars["String"]
    /** The commit message body rendered to HTML. */
    messageBodyHTML: Scalars["HTML"]
    /** The Git commit message headline */
    messageHeadline: Scalars["String"]
    /** The commit message headline rendered to HTML. */
    messageHeadlineHTML: Scalars["HTML"]
    /** The Git object ID */
    oid: Scalars["GitObjectID"]
    /** The organization this commit was made on behalf of. */
    onBehalfOf?: Maybe<Organization>
    /** The parents of a commit. */
    parents: CommitConnection
    /** The datetime when this commit was pushed. */
    pushedDate?: Maybe<Scalars["DateTime"]>
    /** The Repository this commit belongs to */
    repository: Repository
    /** The HTTP path for this commit */
    resourcePath: Scalars["URI"]
    /** Commit signing information, if present. */
    signature?: Maybe<GitSignature>
    /** Status information for this commit */
    status?: Maybe<Status>
    /** Check and Status rollup information for this commit. */
    statusCheckRollup?: Maybe<StatusCheckRollup>
    /** Returns a list of all submodules in this repository as of this Commit parsed from the .gitmodules file. */
    submodules: SubmoduleConnection
    /**
     * Returns a URL to download a tarball archive for a repository.
     * Note: For private repositories, these links are temporary and expire after five minutes.
     */
    tarballUrl: Scalars["URI"]
    /** Commit's root Tree */
    tree: Tree
    /** The HTTP path for the tree of this commit */
    treeResourcePath: Scalars["URI"]
    /** The HTTP URL for the tree of this commit */
    treeUrl: Scalars["URI"]
    /** The HTTP URL for this commit */
    url: Scalars["URI"]
    /** Check if the viewer is able to change their subscription status for the repository. */
    viewerCanSubscribe: Scalars["Boolean"]
    /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
    viewerSubscription?: Maybe<SubscriptionState>
    /**
     * Returns a URL to download a zipball archive for a repository.
     * Note: For private repositories, these links are temporary and expire after five minutes.
     */
    zipballUrl: Scalars["URI"]
  }

/** Represents a Git commit. */
export type CommitAssociatedPullRequestsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<PullRequestOrder>
}

/** Represents a Git commit. */
export type CommitAuthorsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** Represents a Git commit. */
export type CommitBlameArgs = {
  path: Scalars["String"]
}

/** Represents a Git commit. */
export type CommitCheckSuitesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  filterBy?: Maybe<CheckSuiteFilter>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** Represents a Git commit. */
export type CommitCommentsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** Represents a Git commit. */
export type CommitDeploymentsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  environments?: Maybe<Array<Scalars["String"]>>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<DeploymentOrder>
}

/** Represents a Git commit. */
export type CommitFileArgs = {
  path: Scalars["String"]
}

/** Represents a Git commit. */
export type CommitHistoryArgs = {
  after?: Maybe<Scalars["String"]>
  author?: Maybe<CommitAuthor>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  path?: Maybe<Scalars["String"]>
  since?: Maybe<Scalars["GitTimestamp"]>
  until?: Maybe<Scalars["GitTimestamp"]>
}

/** Represents a Git commit. */
export type CommitParentsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** Represents a Git commit. */
export type CommitSubmodulesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** Specifies an author for filtering Git commits. */
export type CommitAuthor = {
  /** Email addresses to filter by. Commits authored by any of the specified email addresses will be returned. */
  emails?: Maybe<Array<Scalars["String"]>>
  /**
   * ID of a User to filter by. If non-null, only commits authored by this user
   * will be returned. This field takes precedence over emails.
   */
  id?: Maybe<Scalars["ID"]>
}

/** Represents a comment on a given Commit. */
export type CommitComment = Comment &
  Deletable &
  Minimizable &
  Node &
  Reactable &
  RepositoryNode &
  Updatable &
  UpdatableComment & {
    __typename?: "CommitComment"
    /** The actor who authored the comment. */
    author?: Maybe<Actor>
    /** Author's association with the subject of the comment. */
    authorAssociation: CommentAuthorAssociation
    /** Identifies the comment body. */
    body: Scalars["String"]
    /** The body rendered to HTML. */
    bodyHTML: Scalars["HTML"]
    /** The body rendered to text. */
    bodyText: Scalars["String"]
    /** Identifies the commit associated with the comment, if the commit exists. */
    commit?: Maybe<Commit>
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["DateTime"]
    /** Check if this comment was created via an email reply. */
    createdViaEmail: Scalars["Boolean"]
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>
    /** The actor who edited the comment. */
    editor?: Maybe<Actor>
    id: Scalars["ID"]
    /** Check if this comment was edited and includes an edit with the creation data */
    includesCreatedEdit: Scalars["Boolean"]
    /** Returns whether or not a comment has been minimized. */
    isMinimized: Scalars["Boolean"]
    /** The moment the editor made the last edit */
    lastEditedAt?: Maybe<Scalars["DateTime"]>
    /** Returns why the comment was minimized. */
    minimizedReason?: Maybe<Scalars["String"]>
    /** Identifies the file path associated with the comment. */
    path?: Maybe<Scalars["String"]>
    /** Identifies the line position associated with the comment. */
    position?: Maybe<Scalars["Int"]>
    /** Identifies when the comment was published at. */
    publishedAt?: Maybe<Scalars["DateTime"]>
    /** A list of reactions grouped by content left on the subject. */
    reactionGroups?: Maybe<Array<ReactionGroup>>
    /** A list of Reactions left on the Issue. */
    reactions: ReactionConnection
    /** The repository associated with this node. */
    repository: Repository
    /** The HTTP path permalink for this commit comment. */
    resourcePath: Scalars["URI"]
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["DateTime"]
    /** The HTTP URL permalink for this commit comment. */
    url: Scalars["URI"]
    /** A list of edits to this content. */
    userContentEdits?: Maybe<UserContentEditConnection>
    /** Check if the current viewer can delete this object. */
    viewerCanDelete: Scalars["Boolean"]
    /** Check if the current viewer can minimize this object. */
    viewerCanMinimize: Scalars["Boolean"]
    /** Can user react to this subject */
    viewerCanReact: Scalars["Boolean"]
    /** Check if the current viewer can update this object. */
    viewerCanUpdate: Scalars["Boolean"]
    /** Reasons why the current viewer can not update this comment. */
    viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>
    /** Did the viewer author this comment. */
    viewerDidAuthor: Scalars["Boolean"]
  }

/** Represents a comment on a given Commit. */
export type CommitCommentReactionsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  content?: Maybe<ReactionContent>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<ReactionOrder>
}

/** Represents a comment on a given Commit. */
export type CommitCommentUserContentEditsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** The connection type for CommitComment. */
export type CommitCommentConnection = {
  __typename?: "CommitCommentConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CommitCommentEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CommitComment>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type CommitCommentEdge = {
  __typename?: "CommitCommentEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<CommitComment>
}

/** A thread of comments on a commit. */
export type CommitCommentThread = Node &
  RepositoryNode & {
    __typename?: "CommitCommentThread"
    /** The comments that exist in this thread. */
    comments: CommitCommentConnection
    /** The commit the comments were made on. */
    commit?: Maybe<Commit>
    id: Scalars["ID"]
    /** The file the comments were made on. */
    path?: Maybe<Scalars["String"]>
    /** The position in the diff for the commit that the comment was made on. */
    position?: Maybe<Scalars["Int"]>
    /** The repository associated with this node. */
    repository: Repository
  }

/** A thread of comments on a commit. */
export type CommitCommentThreadCommentsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** The connection type for Commit. */
export type CommitConnection = {
  __typename?: "CommitConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CommitEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Commit>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** Ordering options for commit contribution connections. */
export type CommitContributionOrder = {
  /** The ordering direction. */
  direction: OrderDirection
  /** The field by which to order commit contributions. */
  field: CommitContributionOrderField
}

/** Properties by which commit contribution connections can be ordered. */
export enum CommitContributionOrderField {
  /** Order commit contributions by how many commits they represent. */
  CommitCount = "COMMIT_COUNT",
  /** Order commit contributions by when they were made. */
  OccurredAt = "OCCURRED_AT",
}

/** This aggregates commits made by a user within one repository. */
export type CommitContributionsByRepository = {
  __typename?: "CommitContributionsByRepository"
  /** The commit contributions, each representing a day. */
  contributions: CreatedCommitContributionConnection
  /** The repository in which the commits were made. */
  repository: Repository
  /** The HTTP path for the user's commits to the repository in this time range. */
  resourcePath: Scalars["URI"]
  /** The HTTP URL for the user's commits to the repository in this time range. */
  url: Scalars["URI"]
}

/** This aggregates commits made by a user within one repository. */
export type CommitContributionsByRepositoryContributionsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<CommitContributionOrder>
}

/** An edge in a connection. */
export type CommitEdge = {
  __typename?: "CommitEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<Commit>
}

/** The connection type for Commit. */
export type CommitHistoryConnection = {
  __typename?: "CommitHistoryConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CommitEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Commit>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** Represents a 'connected' event on a given issue or pull request. */
export type ConnectedEvent = Node & {
  __typename?: "ConnectedEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  id: Scalars["ID"]
  /** Reference originated in a different repository. */
  isCrossRepository: Scalars["Boolean"]
  /** Issue or pull request that made the reference. */
  source: ReferencedSubject
  /** Issue or pull request which was connected. */
  subject: ReferencedSubject
}

/** Represents a contribution a user made on GitHub, such as opening an issue. */
export type Contribution = {
  /**
   * Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  isRestricted: Scalars["Boolean"]
  /** When this contribution was made. */
  occurredAt: Scalars["DateTime"]
  /** The HTTP path for this contribution. */
  resourcePath: Scalars["URI"]
  /** The HTTP URL for this contribution. */
  url: Scalars["URI"]
  /** The user who made this contribution. */
  user: User
}

/** A calendar of contributions made on GitHub by a user. */
export type ContributionCalendar = {
  __typename?: "ContributionCalendar"
  /** A list of hex color codes used in this calendar. The darker the color, the more contributions it represents. */
  colors: Array<Scalars["String"]>
  /** Determine if the color set was chosen because it's currently Halloween. */
  isHalloween: Scalars["Boolean"]
  /** A list of the months of contributions in this calendar. */
  months: Array<ContributionCalendarMonth>
  /** The count of total contributions in the calendar. */
  totalContributions: Scalars["Int"]
  /** A list of the weeks of contributions in this calendar. */
  weeks: Array<ContributionCalendarWeek>
}

/** Represents a single day of contributions on GitHub by a user. */
export type ContributionCalendarDay = {
  __typename?: "ContributionCalendarDay"
  /** The hex color code that represents how many contributions were made on this day compared to others in the calendar. */
  color: Scalars["String"]
  /** How many contributions were made by the user on this day. */
  contributionCount: Scalars["Int"]
  /** The day this square represents. */
  date: Scalars["Date"]
  /** A number representing which day of the week this square represents, e.g., 1 is Monday. */
  weekday: Scalars["Int"]
}

/** A month of contributions in a user's contribution graph. */
export type ContributionCalendarMonth = {
  __typename?: "ContributionCalendarMonth"
  /** The date of the first day of this month. */
  firstDay: Scalars["Date"]
  /** The name of the month. */
  name: Scalars["String"]
  /** How many weeks started in this month. */
  totalWeeks: Scalars["Int"]
  /** The year the month occurred in. */
  year: Scalars["Int"]
}

/** A week of contributions in a user's contribution graph. */
export type ContributionCalendarWeek = {
  __typename?: "ContributionCalendarWeek"
  /** The days of contributions in this week. */
  contributionDays: Array<ContributionCalendarDay>
  /** The date of the earliest square in this week. */
  firstDay: Scalars["Date"]
}

/** Ordering options for contribution connections. */
export type ContributionOrder = {
  /** The ordering direction. */
  direction: OrderDirection
}

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type ContributionsCollection = {
  __typename?: "ContributionsCollection"
  /** Commit contributions made by the user, grouped by repository. */
  commitContributionsByRepository: Array<CommitContributionsByRepository>
  /** A calendar of this user's contributions on GitHub. */
  contributionCalendar: ContributionCalendar
  /** The years the user has been making contributions with the most recent year first. */
  contributionYears: Array<Scalars["Int"]>
  /** Determine if this collection's time span ends in the current month. */
  doesEndInCurrentMonth: Scalars["Boolean"]
  /**
   * The date of the first restricted contribution the user made in this time
   * period. Can only be non-null when the user has enabled private contribution counts.
   */
  earliestRestrictedContributionDate?: Maybe<Scalars["Date"]>
  /** The ending date and time of this collection. */
  endedAt: Scalars["DateTime"]
  /**
   * The first issue the user opened on GitHub. This will be null if that issue was
   * opened outside the collection's time range and ignoreTimeRange is false. If
   * the issue is not visible but the user has opted to show private contributions,
   * a RestrictedContribution will be returned.
   */
  firstIssueContribution?: Maybe<CreatedIssueOrRestrictedContribution>
  /**
   * The first pull request the user opened on GitHub. This will be null if that
   * pull request was opened outside the collection's time range and
   * ignoreTimeRange is not true. If the pull request is not visible but the user
   * has opted to show private contributions, a RestrictedContribution will be returned.
   */
  firstPullRequestContribution?: Maybe<CreatedPullRequestOrRestrictedContribution>
  /**
   * The first repository the user created on GitHub. This will be null if that
   * first repository was created outside the collection's time range and
   * ignoreTimeRange is false. If the repository is not visible, then a
   * RestrictedContribution is returned.
   */
  firstRepositoryContribution?: Maybe<CreatedRepositoryOrRestrictedContribution>
  /** Does the user have any more activity in the timeline that occurred prior to the collection's time range? */
  hasActivityInThePast: Scalars["Boolean"]
  /** Determine if there are any contributions in this collection. */
  hasAnyContributions: Scalars["Boolean"]
  /**
   * Determine if the user made any contributions in this time frame whose details
   * are not visible because they were made in a private repository. Can only be
   * true if the user enabled private contribution counts.
   */
  hasAnyRestrictedContributions: Scalars["Boolean"]
  /** Whether or not the collector's time span is all within the same day. */
  isSingleDay: Scalars["Boolean"]
  /** A list of issues the user opened. */
  issueContributions: CreatedIssueContributionConnection
  /** Issue contributions made by the user, grouped by repository. */
  issueContributionsByRepository: Array<IssueContributionsByRepository>
  /**
   * When the user signed up for GitHub. This will be null if that sign up date
   * falls outside the collection's time range and ignoreTimeRange is false.
   */
  joinedGitHubContribution?: Maybe<JoinedGitHubContribution>
  /**
   * The date of the most recent restricted contribution the user made in this time
   * period. Can only be non-null when the user has enabled private contribution counts.
   */
  latestRestrictedContributionDate?: Maybe<Scalars["Date"]>
  /**
   * When this collection's time range does not include any activity from the user, use this
   * to get a different collection from an earlier time range that does have activity.
   */
  mostRecentCollectionWithActivity?: Maybe<ContributionsCollection>
  /**
   * Returns a different contributions collection from an earlier time range than this one
   * that does not have any contributions.
   */
  mostRecentCollectionWithoutActivity?: Maybe<ContributionsCollection>
  /**
   * The issue the user opened on GitHub that received the most comments in the specified
   * time frame.
   */
  popularIssueContribution?: Maybe<CreatedIssueContribution>
  /**
   * The pull request the user opened on GitHub that received the most comments in the
   * specified time frame.
   */
  popularPullRequestContribution?: Maybe<CreatedPullRequestContribution>
  /** Pull request contributions made by the user. */
  pullRequestContributions: CreatedPullRequestContributionConnection
  /** Pull request contributions made by the user, grouped by repository. */
  pullRequestContributionsByRepository: Array<PullRequestContributionsByRepository>
  /** Pull request review contributions made by the user. */
  pullRequestReviewContributions: CreatedPullRequestReviewContributionConnection
  /** Pull request review contributions made by the user, grouped by repository. */
  pullRequestReviewContributionsByRepository: Array<PullRequestReviewContributionsByRepository>
  /** A list of repositories owned by the user that the user created in this time range. */
  repositoryContributions: CreatedRepositoryContributionConnection
  /**
   * A count of contributions made by the user that the viewer cannot access. Only
   * non-zero when the user has chosen to share their private contribution counts.
   */
  restrictedContributionsCount: Scalars["Int"]
  /** The beginning date and time of this collection. */
  startedAt: Scalars["DateTime"]
  /** How many commits were made by the user in this time span. */
  totalCommitContributions: Scalars["Int"]
  /** How many issues the user opened. */
  totalIssueContributions: Scalars["Int"]
  /** How many pull requests the user opened. */
  totalPullRequestContributions: Scalars["Int"]
  /** How many pull request reviews the user left. */
  totalPullRequestReviewContributions: Scalars["Int"]
  /** How many different repositories the user committed to. */
  totalRepositoriesWithContributedCommits: Scalars["Int"]
  /** How many different repositories the user opened issues in. */
  totalRepositoriesWithContributedIssues: Scalars["Int"]
  /** How many different repositories the user left pull request reviews in. */
  totalRepositoriesWithContributedPullRequestReviews: Scalars["Int"]
  /** How many different repositories the user opened pull requests in. */
  totalRepositoriesWithContributedPullRequests: Scalars["Int"]
  /** How many repositories the user created. */
  totalRepositoryContributions: Scalars["Int"]
  /** The user who made the contributions in this collection. */
  user: User
}

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type ContributionsCollectionCommitContributionsByRepositoryArgs = {
  maxRepositories?: Maybe<Scalars["Int"]>
}

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type ContributionsCollectionIssueContributionsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  excludeFirst?: Maybe<Scalars["Boolean"]>
  excludePopular?: Maybe<Scalars["Boolean"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<ContributionOrder>
}

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type ContributionsCollectionIssueContributionsByRepositoryArgs = {
  excludeFirst?: Maybe<Scalars["Boolean"]>
  excludePopular?: Maybe<Scalars["Boolean"]>
  maxRepositories?: Maybe<Scalars["Int"]>
}

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type ContributionsCollectionPullRequestContributionsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  excludeFirst?: Maybe<Scalars["Boolean"]>
  excludePopular?: Maybe<Scalars["Boolean"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<ContributionOrder>
}

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type ContributionsCollectionPullRequestContributionsByRepositoryArgs = {
  excludeFirst?: Maybe<Scalars["Boolean"]>
  excludePopular?: Maybe<Scalars["Boolean"]>
  maxRepositories?: Maybe<Scalars["Int"]>
}

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type ContributionsCollectionPullRequestReviewContributionsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<ContributionOrder>
}

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type ContributionsCollectionPullRequestReviewContributionsByRepositoryArgs = {
  maxRepositories?: Maybe<Scalars["Int"]>
}

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type ContributionsCollectionRepositoryContributionsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  excludeFirst?: Maybe<Scalars["Boolean"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<ContributionOrder>
}

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type ContributionsCollectionTotalIssueContributionsArgs = {
  excludeFirst?: Maybe<Scalars["Boolean"]>
  excludePopular?: Maybe<Scalars["Boolean"]>
}

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type ContributionsCollectionTotalPullRequestContributionsArgs = {
  excludeFirst?: Maybe<Scalars["Boolean"]>
  excludePopular?: Maybe<Scalars["Boolean"]>
}

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type ContributionsCollectionTotalRepositoriesWithContributedIssuesArgs = {
  excludeFirst?: Maybe<Scalars["Boolean"]>
  excludePopular?: Maybe<Scalars["Boolean"]>
}

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type ContributionsCollectionTotalRepositoriesWithContributedPullRequestsArgs = {
  excludeFirst?: Maybe<Scalars["Boolean"]>
  excludePopular?: Maybe<Scalars["Boolean"]>
}

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
export type ContributionsCollectionTotalRepositoryContributionsArgs = {
  excludeFirst?: Maybe<Scalars["Boolean"]>
}

/** Autogenerated input type of ConvertProjectCardNoteToIssue */
export type ConvertProjectCardNoteToIssueInput = {
  /** The body of the newly created issue. */
  body?: Maybe<Scalars["String"]>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ProjectCard ID to convert. */
  projectCardId: Scalars["ID"]
  /** The ID of the repository to create the issue in. */
  repositoryId: Scalars["ID"]
  /** The title of the newly created issue. Defaults to the card's note text. */
  title?: Maybe<Scalars["String"]>
}

/** Autogenerated return type of ConvertProjectCardNoteToIssue */
export type ConvertProjectCardNoteToIssuePayload = {
  __typename?: "ConvertProjectCardNoteToIssuePayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The updated ProjectCard. */
  projectCard?: Maybe<ProjectCard>
}

/** Represents a 'convert_to_draft' event on a given pull request. */
export type ConvertToDraftEvent = Node &
  UniformResourceLocatable & {
    __typename?: "ConvertToDraftEvent"
    /** Identifies the actor who performed the event. */
    actor?: Maybe<Actor>
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["DateTime"]
    id: Scalars["ID"]
    /** PullRequest referenced by event. */
    pullRequest: PullRequest
    /** The HTTP path for this convert to draft event. */
    resourcePath: Scalars["URI"]
    /** The HTTP URL for this convert to draft event. */
    url: Scalars["URI"]
  }

/** Represents a 'converted_note_to_issue' event on a given issue or pull request. */
export type ConvertedNoteToIssueEvent = Node & {
  __typename?: "ConvertedNoteToIssueEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>
  id: Scalars["ID"]
}

/** Autogenerated input type of CreateBranchProtectionRule */
export type CreateBranchProtectionRuleInput = {
  /** Can this branch be deleted. */
  allowsDeletions?: Maybe<Scalars["Boolean"]>
  /** Are force pushes allowed on this branch. */
  allowsForcePushes?: Maybe<Scalars["Boolean"]>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** Will new commits pushed to matching branches dismiss pull request review approvals. */
  dismissesStaleReviews?: Maybe<Scalars["Boolean"]>
  /** Can admins overwrite branch protection. */
  isAdminEnforced?: Maybe<Scalars["Boolean"]>
  /** The glob-like pattern used to determine matching branches. */
  pattern: Scalars["String"]
  /** A list of User, Team or App IDs allowed to push to matching branches. */
  pushActorIds?: Maybe<Array<Scalars["ID"]>>
  /** The global relay id of the repository in which a new branch protection rule should be created in. */
  repositoryId: Scalars["ID"]
  /** Number of approving reviews required to update matching branches. */
  requiredApprovingReviewCount?: Maybe<Scalars["Int"]>
  /** List of required status check contexts that must pass for commits to be accepted to matching branches. */
  requiredStatusCheckContexts?: Maybe<Array<Scalars["String"]>>
  /** Are approving reviews required to update matching branches. */
  requiresApprovingReviews?: Maybe<Scalars["Boolean"]>
  /** Are reviews from code owners required to update matching branches. */
  requiresCodeOwnerReviews?: Maybe<Scalars["Boolean"]>
  /** Are commits required to be signed. */
  requiresCommitSignatures?: Maybe<Scalars["Boolean"]>
  /** Are merge commits prohibited from being pushed to this branch. */
  requiresLinearHistory?: Maybe<Scalars["Boolean"]>
  /** Are status checks required to update matching branches. */
  requiresStatusChecks?: Maybe<Scalars["Boolean"]>
  /** Are branches required to be up to date before merging. */
  requiresStrictStatusChecks?: Maybe<Scalars["Boolean"]>
  /** Is pushing to matching branches restricted. */
  restrictsPushes?: Maybe<Scalars["Boolean"]>
  /** Is dismissal of pull request reviews restricted. */
  restrictsReviewDismissals?: Maybe<Scalars["Boolean"]>
  /** A list of User or Team IDs allowed to dismiss reviews on pull requests targeting matching branches. */
  reviewDismissalActorIds?: Maybe<Array<Scalars["ID"]>>
}

/** Autogenerated return type of CreateBranchProtectionRule */
export type CreateBranchProtectionRulePayload = {
  __typename?: "CreateBranchProtectionRulePayload"
  /** The newly created BranchProtectionRule. */
  branchProtectionRule?: Maybe<BranchProtectionRule>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
}

/** Autogenerated input type of CreateCheckRun */
export type CreateCheckRunInput = {
  /** Possible further actions the integrator can perform, which a user may trigger. */
  actions?: Maybe<Array<CheckRunAction>>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The time that the check run finished. */
  completedAt?: Maybe<Scalars["DateTime"]>
  /** The final conclusion of the check. */
  conclusion?: Maybe<CheckConclusionState>
  /** The URL of the integrator's site that has the full details of the check. */
  detailsUrl?: Maybe<Scalars["URI"]>
  /** A reference for the run on the integrator's system. */
  externalId?: Maybe<Scalars["String"]>
  /** The SHA of the head commit. */
  headSha: Scalars["GitObjectID"]
  /** The name of the check. */
  name: Scalars["String"]
  /** Descriptive details about the run. */
  output?: Maybe<CheckRunOutput>
  /** The node ID of the repository. */
  repositoryId: Scalars["ID"]
  /** The time that the check run began. */
  startedAt?: Maybe<Scalars["DateTime"]>
  /** The current status. */
  status?: Maybe<RequestableCheckStatusState>
}

/** Autogenerated return type of CreateCheckRun */
export type CreateCheckRunPayload = {
  __typename?: "CreateCheckRunPayload"
  /** The newly created check run. */
  checkRun?: Maybe<CheckRun>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
}

/** Autogenerated input type of CreateCheckSuite */
export type CreateCheckSuiteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The SHA of the head commit. */
  headSha: Scalars["GitObjectID"]
  /** The Node ID of the repository. */
  repositoryId: Scalars["ID"]
}

/** Autogenerated return type of CreateCheckSuite */
export type CreateCheckSuitePayload = {
  __typename?: "CreateCheckSuitePayload"
  /** The newly created check suite. */
  checkSuite?: Maybe<CheckSuite>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
}

/** Autogenerated input type of CreateEnterpriseOrganization */
export type CreateEnterpriseOrganizationInput = {
  /** The logins for the administrators of the new organization. */
  adminLogins: Array<Scalars["String"]>
  /** The email used for sending billing receipts. */
  billingEmail: Scalars["String"]
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ID of the enterprise owning the new organization. */
  enterpriseId: Scalars["ID"]
  /** The login of the new organization. */
  login: Scalars["String"]
  /** The profile name of the new organization. */
  profileName: Scalars["String"]
}

/** Autogenerated return type of CreateEnterpriseOrganization */
export type CreateEnterpriseOrganizationPayload = {
  __typename?: "CreateEnterpriseOrganizationPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The enterprise that owns the created organization. */
  enterprise?: Maybe<Enterprise>
  /** The organization that was created. */
  organization?: Maybe<Organization>
}

/** Autogenerated input type of CreateIpAllowListEntry */
export type CreateIpAllowListEntryInput = {
  /** An IP address or range of addresses in CIDR notation. */
  allowListValue: Scalars["String"]
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** Whether the IP allow list entry is active when an IP allow list is enabled. */
  isActive: Scalars["Boolean"]
  /** An optional name for the IP allow list entry. */
  name?: Maybe<Scalars["String"]>
  /** The ID of the owner for which to create the new IP allow list entry. */
  ownerId: Scalars["ID"]
}

/** Autogenerated return type of CreateIpAllowListEntry */
export type CreateIpAllowListEntryPayload = {
  __typename?: "CreateIpAllowListEntryPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The IP allow list entry that was created. */
  ipAllowListEntry?: Maybe<IpAllowListEntry>
}

/** Autogenerated input type of CreateIssue */
export type CreateIssueInput = {
  /** The Node ID for the user assignee for this issue. */
  assigneeIds?: Maybe<Array<Scalars["ID"]>>
  /** The body for the issue description. */
  body?: Maybe<Scalars["String"]>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The name of an issue template in the repository, assigns labels and assignees from the template to the issue */
  issueTemplate?: Maybe<Scalars["String"]>
  /** An array of Node IDs of labels for this issue. */
  labelIds?: Maybe<Array<Scalars["ID"]>>
  /** The Node ID of the milestone for this issue. */
  milestoneId?: Maybe<Scalars["ID"]>
  /** An array of Node IDs for projects associated with this issue. */
  projectIds?: Maybe<Array<Scalars["ID"]>>
  /** The Node ID of the repository. */
  repositoryId: Scalars["ID"]
  /** The title for the issue. */
  title: Scalars["String"]
}

/** Autogenerated return type of CreateIssue */
export type CreateIssuePayload = {
  __typename?: "CreateIssuePayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The new issue. */
  issue?: Maybe<Issue>
}

/** Autogenerated input type of CreateProject */
export type CreateProjectInput = {
  /** The description of project. */
  body?: Maybe<Scalars["String"]>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The name of project. */
  name: Scalars["String"]
  /** The owner ID to create the project under. */
  ownerId: Scalars["ID"]
  /** A list of repository IDs to create as linked repositories for the project */
  repositoryIds?: Maybe<Array<Scalars["ID"]>>
  /** The name of the GitHub-provided template. */
  template?: Maybe<ProjectTemplate>
}

/** Autogenerated return type of CreateProject */
export type CreateProjectPayload = {
  __typename?: "CreateProjectPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The new project. */
  project?: Maybe<Project>
}

/** Autogenerated input type of CreatePullRequest */
export type CreatePullRequestInput = {
  /**
   * The name of the branch you want your changes pulled into. This should be an existing branch
   * on the current repository. You cannot update the base branch on a pull request to point
   * to another repository.
   */
  baseRefName: Scalars["String"]
  /** The contents of the pull request. */
  body?: Maybe<Scalars["String"]>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** Indicates whether this pull request should be a draft. */
  draft?: Maybe<Scalars["Boolean"]>
  /**
   * The name of the branch where your changes are implemented. For cross-repository pull requests
   * in the same network, namespace `head_ref_name` with a user like this: `username:branch`.
   */
  headRefName: Scalars["String"]
  /** Indicates whether maintainers can modify the pull request. */
  maintainerCanModify?: Maybe<Scalars["Boolean"]>
  /** The Node ID of the repository. */
  repositoryId: Scalars["ID"]
  /** The title of the pull request. */
  title: Scalars["String"]
}

/** Autogenerated return type of CreatePullRequest */
export type CreatePullRequestPayload = {
  __typename?: "CreatePullRequestPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The new pull request. */
  pullRequest?: Maybe<PullRequest>
}

/** Autogenerated input type of CreateRef */
export type CreateRefInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The fully qualified name of the new Ref (ie: `refs/heads/my_new_branch`). */
  name: Scalars["String"]
  /** The GitObjectID that the new Ref shall target. Must point to a commit. */
  oid: Scalars["GitObjectID"]
  /** The Node ID of the Repository to create the Ref in. */
  repositoryId: Scalars["ID"]
}

/** Autogenerated return type of CreateRef */
export type CreateRefPayload = {
  __typename?: "CreateRefPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The newly created ref. */
  ref?: Maybe<Ref>
}

/** Autogenerated input type of CreateRepository */
export type CreateRepositoryInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** A short description of the new repository. */
  description?: Maybe<Scalars["String"]>
  /** Indicates if the repository should have the issues feature enabled. */
  hasIssuesEnabled?: Maybe<Scalars["Boolean"]>
  /** Indicates if the repository should have the wiki feature enabled. */
  hasWikiEnabled?: Maybe<Scalars["Boolean"]>
  /** The URL for a web page about this repository. */
  homepageUrl?: Maybe<Scalars["URI"]>
  /** The name of the new repository. */
  name: Scalars["String"]
  /** The ID of the owner for the new repository. */
  ownerId?: Maybe<Scalars["ID"]>
  /**
   * When an organization is specified as the owner, this ID identifies the team
   * that should be granted access to the new repository.
   */
  teamId?: Maybe<Scalars["ID"]>
  /**
   * Whether this repository should be marked as a template such that anyone who
   * can access it can create new repositories with the same files and directory structure.
   */
  template?: Maybe<Scalars["Boolean"]>
  /** Indicates the repository's visibility level. */
  visibility: RepositoryVisibility
}

/** Autogenerated return type of CreateRepository */
export type CreateRepositoryPayload = {
  __typename?: "CreateRepositoryPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The new repository. */
  repository?: Maybe<Repository>
}

/** Autogenerated input type of CreateTeamDiscussionComment */
export type CreateTeamDiscussionCommentInput = {
  /** The content of the comment. */
  body: Scalars["String"]
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ID of the discussion to which the comment belongs. */
  discussionId: Scalars["ID"]
}

/** Autogenerated return type of CreateTeamDiscussionComment */
export type CreateTeamDiscussionCommentPayload = {
  __typename?: "CreateTeamDiscussionCommentPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The new comment. */
  teamDiscussionComment?: Maybe<TeamDiscussionComment>
}

/** Autogenerated input type of CreateTeamDiscussion */
export type CreateTeamDiscussionInput = {
  /** The content of the discussion. */
  body: Scalars["String"]
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /**
   * If true, restricts the visiblity of this discussion to team members and
   * organization admins. If false or not specified, allows any organization member
   * to view this discussion.
   */
  private?: Maybe<Scalars["Boolean"]>
  /** The ID of the team to which the discussion belongs. */
  teamId: Scalars["ID"]
  /** The title of the discussion. */
  title: Scalars["String"]
}

/** Autogenerated return type of CreateTeamDiscussion */
export type CreateTeamDiscussionPayload = {
  __typename?: "CreateTeamDiscussionPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The new discussion. */
  teamDiscussion?: Maybe<TeamDiscussion>
}

/** Represents the contribution a user made by committing to a repository. */
export type CreatedCommitContribution = Contribution & {
  __typename?: "CreatedCommitContribution"
  /** How many commits were made on this day to this repository by the user. */
  commitCount: Scalars["Int"]
  /**
   * Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  isRestricted: Scalars["Boolean"]
  /** When this contribution was made. */
  occurredAt: Scalars["DateTime"]
  /** The repository the user made a commit in. */
  repository: Repository
  /** The HTTP path for this contribution. */
  resourcePath: Scalars["URI"]
  /** The HTTP URL for this contribution. */
  url: Scalars["URI"]
  /** The user who made this contribution. */
  user: User
}

/** The connection type for CreatedCommitContribution. */
export type CreatedCommitContributionConnection = {
  __typename?: "CreatedCommitContributionConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CreatedCommitContributionEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CreatedCommitContribution>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of commits across days and repositories in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type CreatedCommitContributionEdge = {
  __typename?: "CreatedCommitContributionEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<CreatedCommitContribution>
}

/** Represents the contribution a user made on GitHub by opening an issue. */
export type CreatedIssueContribution = Contribution & {
  __typename?: "CreatedIssueContribution"
  /**
   * Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  isRestricted: Scalars["Boolean"]
  /** The issue that was opened. */
  issue: Issue
  /** When this contribution was made. */
  occurredAt: Scalars["DateTime"]
  /** The HTTP path for this contribution. */
  resourcePath: Scalars["URI"]
  /** The HTTP URL for this contribution. */
  url: Scalars["URI"]
  /** The user who made this contribution. */
  user: User
}

/** The connection type for CreatedIssueContribution. */
export type CreatedIssueContributionConnection = {
  __typename?: "CreatedIssueContributionConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CreatedIssueContributionEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CreatedIssueContribution>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type CreatedIssueContributionEdge = {
  __typename?: "CreatedIssueContributionEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<CreatedIssueContribution>
}

/** Represents either a issue the viewer can access or a restricted contribution. */
export type CreatedIssueOrRestrictedContribution = CreatedIssueContribution | RestrictedContribution

/** Represents the contribution a user made on GitHub by opening a pull request. */
export type CreatedPullRequestContribution = Contribution & {
  __typename?: "CreatedPullRequestContribution"
  /**
   * Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  isRestricted: Scalars["Boolean"]
  /** When this contribution was made. */
  occurredAt: Scalars["DateTime"]
  /** The pull request that was opened. */
  pullRequest: PullRequest
  /** The HTTP path for this contribution. */
  resourcePath: Scalars["URI"]
  /** The HTTP URL for this contribution. */
  url: Scalars["URI"]
  /** The user who made this contribution. */
  user: User
}

/** The connection type for CreatedPullRequestContribution. */
export type CreatedPullRequestContributionConnection = {
  __typename?: "CreatedPullRequestContributionConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CreatedPullRequestContributionEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CreatedPullRequestContribution>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type CreatedPullRequestContributionEdge = {
  __typename?: "CreatedPullRequestContributionEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<CreatedPullRequestContribution>
}

/** Represents either a pull request the viewer can access or a restricted contribution. */
export type CreatedPullRequestOrRestrictedContribution = CreatedPullRequestContribution | RestrictedContribution

/** Represents the contribution a user made by leaving a review on a pull request. */
export type CreatedPullRequestReviewContribution = Contribution & {
  __typename?: "CreatedPullRequestReviewContribution"
  /**
   * Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  isRestricted: Scalars["Boolean"]
  /** When this contribution was made. */
  occurredAt: Scalars["DateTime"]
  /** The pull request the user reviewed. */
  pullRequest: PullRequest
  /** The review the user left on the pull request. */
  pullRequestReview: PullRequestReview
  /** The repository containing the pull request that the user reviewed. */
  repository: Repository
  /** The HTTP path for this contribution. */
  resourcePath: Scalars["URI"]
  /** The HTTP URL for this contribution. */
  url: Scalars["URI"]
  /** The user who made this contribution. */
  user: User
}

/** The connection type for CreatedPullRequestReviewContribution. */
export type CreatedPullRequestReviewContributionConnection = {
  __typename?: "CreatedPullRequestReviewContributionConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CreatedPullRequestReviewContributionEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CreatedPullRequestReviewContribution>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type CreatedPullRequestReviewContributionEdge = {
  __typename?: "CreatedPullRequestReviewContributionEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<CreatedPullRequestReviewContribution>
}

/** Represents the contribution a user made on GitHub by creating a repository. */
export type CreatedRepositoryContribution = Contribution & {
  __typename?: "CreatedRepositoryContribution"
  /**
   * Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  isRestricted: Scalars["Boolean"]
  /** When this contribution was made. */
  occurredAt: Scalars["DateTime"]
  /** The repository that was created. */
  repository: Repository
  /** The HTTP path for this contribution. */
  resourcePath: Scalars["URI"]
  /** The HTTP URL for this contribution. */
  url: Scalars["URI"]
  /** The user who made this contribution. */
  user: User
}

/** The connection type for CreatedRepositoryContribution. */
export type CreatedRepositoryContributionConnection = {
  __typename?: "CreatedRepositoryContributionConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CreatedRepositoryContributionEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CreatedRepositoryContribution>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type CreatedRepositoryContributionEdge = {
  __typename?: "CreatedRepositoryContributionEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<CreatedRepositoryContribution>
}

/** Represents either a repository the viewer can access or a restricted contribution. */
export type CreatedRepositoryOrRestrictedContribution = CreatedRepositoryContribution | RestrictedContribution

/** Represents a mention made by one issue or pull request to another. */
export type CrossReferencedEvent = Node &
  UniformResourceLocatable & {
    __typename?: "CrossReferencedEvent"
    /** Identifies the actor who performed the event. */
    actor?: Maybe<Actor>
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["DateTime"]
    id: Scalars["ID"]
    /** Reference originated in a different repository. */
    isCrossRepository: Scalars["Boolean"]
    /** Identifies when the reference was made. */
    referencedAt: Scalars["DateTime"]
    /** The HTTP path for this pull request. */
    resourcePath: Scalars["URI"]
    /** Issue or pull request that made the reference. */
    source: ReferencedSubject
    /** Issue or pull request to which the reference was made. */
    target: ReferencedSubject
    /** The HTTP URL for this pull request. */
    url: Scalars["URI"]
    /** Checks if the target will be closed when the source is merged. */
    willCloseTarget: Scalars["Boolean"]
  }

/** Autogenerated input type of DeclineTopicSuggestion */
export type DeclineTopicSuggestionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The name of the suggested topic. */
  name: Scalars["String"]
  /** The reason why the suggested topic is declined. */
  reason: TopicSuggestionDeclineReason
  /** The Node ID of the repository. */
  repositoryId: Scalars["ID"]
}

/** Autogenerated return type of DeclineTopicSuggestion */
export type DeclineTopicSuggestionPayload = {
  __typename?: "DeclineTopicSuggestionPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The declined topic. */
  topic?: Maybe<Topic>
}

/** The possible default permissions for repositories. */
export enum DefaultRepositoryPermissionField {
  /** Can read, write, and administrate repos by default */
  Admin = "ADMIN",
  /** No access */
  None = "NONE",
  /** Can read repos by default */
  Read = "READ",
  /** Can read and write repos by default */
  Write = "WRITE",
}

/** Entities that can be deleted. */
export type Deletable = {
  /** Check if the current viewer can delete this object. */
  viewerCanDelete: Scalars["Boolean"]
}

/** Autogenerated input type of DeleteBranchProtectionRule */
export type DeleteBranchProtectionRuleInput = {
  /** The global relay id of the branch protection rule to be deleted. */
  branchProtectionRuleId: Scalars["ID"]
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
}

/** Autogenerated return type of DeleteBranchProtectionRule */
export type DeleteBranchProtectionRulePayload = {
  __typename?: "DeleteBranchProtectionRulePayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
}

/** Autogenerated input type of DeleteDeployment */
export type DeleteDeploymentInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The Node ID of the deployment to be deleted. */
  id: Scalars["ID"]
}

/** Autogenerated return type of DeleteDeployment */
export type DeleteDeploymentPayload = {
  __typename?: "DeleteDeploymentPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
}

/** Autogenerated input type of DeleteIpAllowListEntry */
export type DeleteIpAllowListEntryInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ID of the IP allow list entry to delete. */
  ipAllowListEntryId: Scalars["ID"]
}

/** Autogenerated return type of DeleteIpAllowListEntry */
export type DeleteIpAllowListEntryPayload = {
  __typename?: "DeleteIpAllowListEntryPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The IP allow list entry that was deleted. */
  ipAllowListEntry?: Maybe<IpAllowListEntry>
}

/** Autogenerated input type of DeleteIssueComment */
export type DeleteIssueCommentInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ID of the comment to delete. */
  id: Scalars["ID"]
}

/** Autogenerated return type of DeleteIssueComment */
export type DeleteIssueCommentPayload = {
  __typename?: "DeleteIssueCommentPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
}

/** Autogenerated input type of DeleteIssue */
export type DeleteIssueInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ID of the issue to delete. */
  issueId: Scalars["ID"]
}

/** Autogenerated return type of DeleteIssue */
export type DeleteIssuePayload = {
  __typename?: "DeleteIssuePayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The repository the issue belonged to */
  repository?: Maybe<Repository>
}

/** Autogenerated input type of DeleteProjectCard */
export type DeleteProjectCardInput = {
  /** The id of the card to delete. */
  cardId: Scalars["ID"]
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
}

/** Autogenerated return type of DeleteProjectCard */
export type DeleteProjectCardPayload = {
  __typename?: "DeleteProjectCardPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The column the deleted card was in. */
  column?: Maybe<ProjectColumn>
  /** The deleted card ID. */
  deletedCardId?: Maybe<Scalars["ID"]>
}

/** Autogenerated input type of DeleteProjectColumn */
export type DeleteProjectColumnInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The id of the column to delete. */
  columnId: Scalars["ID"]
}

/** Autogenerated return type of DeleteProjectColumn */
export type DeleteProjectColumnPayload = {
  __typename?: "DeleteProjectColumnPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The deleted column ID. */
  deletedColumnId?: Maybe<Scalars["ID"]>
  /** The project the deleted column was in. */
  project?: Maybe<Project>
}

/** Autogenerated input type of DeleteProject */
export type DeleteProjectInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The Project ID to update. */
  projectId: Scalars["ID"]
}

/** Autogenerated return type of DeleteProject */
export type DeleteProjectPayload = {
  __typename?: "DeleteProjectPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The repository or organization the project was removed from. */
  owner?: Maybe<ProjectOwner>
}

/** Autogenerated input type of DeletePullRequestReviewComment */
export type DeletePullRequestReviewCommentInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ID of the comment to delete. */
  id: Scalars["ID"]
}

/** Autogenerated return type of DeletePullRequestReviewComment */
export type DeletePullRequestReviewCommentPayload = {
  __typename?: "DeletePullRequestReviewCommentPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The pull request review the deleted comment belonged to. */
  pullRequestReview?: Maybe<PullRequestReview>
}

/** Autogenerated input type of DeletePullRequestReview */
export type DeletePullRequestReviewInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The Node ID of the pull request review to delete. */
  pullRequestReviewId: Scalars["ID"]
}

/** Autogenerated return type of DeletePullRequestReview */
export type DeletePullRequestReviewPayload = {
  __typename?: "DeletePullRequestReviewPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The deleted pull request review. */
  pullRequestReview?: Maybe<PullRequestReview>
}

/** Autogenerated input type of DeleteRef */
export type DeleteRefInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The Node ID of the Ref to be deleted. */
  refId: Scalars["ID"]
}

/** Autogenerated return type of DeleteRef */
export type DeleteRefPayload = {
  __typename?: "DeleteRefPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
}

/** Autogenerated input type of DeleteTeamDiscussionComment */
export type DeleteTeamDiscussionCommentInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ID of the comment to delete. */
  id: Scalars["ID"]
}

/** Autogenerated return type of DeleteTeamDiscussionComment */
export type DeleteTeamDiscussionCommentPayload = {
  __typename?: "DeleteTeamDiscussionCommentPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
}

/** Autogenerated input type of DeleteTeamDiscussion */
export type DeleteTeamDiscussionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The discussion ID to delete. */
  id: Scalars["ID"]
}

/** Autogenerated return type of DeleteTeamDiscussion */
export type DeleteTeamDiscussionPayload = {
  __typename?: "DeleteTeamDiscussionPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
}

/** Represents a 'demilestoned' event on a given issue or pull request. */
export type DemilestonedEvent = Node & {
  __typename?: "DemilestonedEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  id: Scalars["ID"]
  /** Identifies the milestone title associated with the 'demilestoned' event. */
  milestoneTitle: Scalars["String"]
  /** Object referenced by event. */
  subject: MilestoneItem
}

/** A repository deploy key. */
export type DeployKey = Node & {
  __typename?: "DeployKey"
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  id: Scalars["ID"]
  /** The deploy key. */
  key: Scalars["String"]
  /** Whether or not the deploy key is read only. */
  readOnly: Scalars["Boolean"]
  /** The deploy key title. */
  title: Scalars["String"]
  /** Whether or not the deploy key has been verified. */
  verified: Scalars["Boolean"]
}

/** The connection type for DeployKey. */
export type DeployKeyConnection = {
  __typename?: "DeployKeyConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<DeployKeyEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<DeployKey>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type DeployKeyEdge = {
  __typename?: "DeployKeyEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<DeployKey>
}

/** Represents a 'deployed' event on a given pull request. */
export type DeployedEvent = Node & {
  __typename?: "DeployedEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>
  /** The deployment associated with the 'deployed' event. */
  deployment: Deployment
  id: Scalars["ID"]
  /** PullRequest referenced by event. */
  pullRequest: PullRequest
  /** The ref associated with the 'deployed' event. */
  ref?: Maybe<Ref>
}

/** Represents triggered deployment instance. */
export type Deployment = Node & {
  __typename?: "Deployment"
  /** Identifies the commit sha of the deployment. */
  commit?: Maybe<Commit>
  /** Identifies the oid of the deployment commit, even if the commit has been deleted. */
  commitOid: Scalars["String"]
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  /** Identifies the actor who triggered the deployment. */
  creator: Actor
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>
  /** The deployment description. */
  description?: Maybe<Scalars["String"]>
  /** The latest environment to which this deployment was made. */
  environment?: Maybe<Scalars["String"]>
  id: Scalars["ID"]
  /** The latest environment to which this deployment was made. */
  latestEnvironment?: Maybe<Scalars["String"]>
  /** The latest status of this deployment. */
  latestStatus?: Maybe<DeploymentStatus>
  /** The original environment to which this deployment was made. */
  originalEnvironment?: Maybe<Scalars["String"]>
  /** Extra information that a deployment system might need. */
  payload?: Maybe<Scalars["String"]>
  /** Identifies the Ref of the deployment, if the deployment was created by ref. */
  ref?: Maybe<Ref>
  /** Identifies the repository associated with the deployment. */
  repository: Repository
  /** The current state of the deployment. */
  state?: Maybe<DeploymentState>
  /** A list of statuses associated with the deployment. */
  statuses?: Maybe<DeploymentStatusConnection>
  /** The deployment task. */
  task?: Maybe<Scalars["String"]>
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"]
}

/** Represents triggered deployment instance. */
export type DeploymentStatusesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** The connection type for Deployment. */
export type DeploymentConnection = {
  __typename?: "DeploymentConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<DeploymentEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Deployment>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type DeploymentEdge = {
  __typename?: "DeploymentEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<Deployment>
}

/** Represents a 'deployment_environment_changed' event on a given pull request. */
export type DeploymentEnvironmentChangedEvent = Node & {
  __typename?: "DeploymentEnvironmentChangedEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  /** The deployment status that updated the deployment environment. */
  deploymentStatus: DeploymentStatus
  id: Scalars["ID"]
  /** PullRequest referenced by event. */
  pullRequest: PullRequest
}

/** Ordering options for deployment connections */
export type DeploymentOrder = {
  /** The ordering direction. */
  direction: OrderDirection
  /** The field to order deployments by. */
  field: DeploymentOrderField
}

/** Properties by which deployment connections can be ordered. */
export enum DeploymentOrderField {
  /** Order collection by creation time */
  CreatedAt = "CREATED_AT",
}

/** The possible states in which a deployment can be. */
export enum DeploymentState {
  /** The pending deployment was not updated after 30 minutes. */
  Abandoned = "ABANDONED",
  /** The deployment is currently active. */
  Active = "ACTIVE",
  /** An inactive transient deployment. */
  Destroyed = "DESTROYED",
  /** The deployment experienced an error. */
  Error = "ERROR",
  /** The deployment has failed. */
  Failure = "FAILURE",
  /** The deployment is in progress. */
  InProgress = "IN_PROGRESS",
  /** The deployment is inactive. */
  Inactive = "INACTIVE",
  /** The deployment is pending. */
  Pending = "PENDING",
  /** The deployment has queued */
  Queued = "QUEUED",
}

/** Describes the status of a given deployment attempt. */
export type DeploymentStatus = Node & {
  __typename?: "DeploymentStatus"
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  /** Identifies the actor who triggered the deployment. */
  creator: Actor
  /** Identifies the deployment associated with status. */
  deployment: Deployment
  /** Identifies the description of the deployment. */
  description?: Maybe<Scalars["String"]>
  /** Identifies the environment URL of the deployment. */
  environmentUrl?: Maybe<Scalars["URI"]>
  id: Scalars["ID"]
  /** Identifies the log URL of the deployment. */
  logUrl?: Maybe<Scalars["URI"]>
  /** Identifies the current state of the deployment. */
  state: DeploymentStatusState
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"]
}

/** The connection type for DeploymentStatus. */
export type DeploymentStatusConnection = {
  __typename?: "DeploymentStatusConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<DeploymentStatusEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<DeploymentStatus>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type DeploymentStatusEdge = {
  __typename?: "DeploymentStatusEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<DeploymentStatus>
}

/** The possible states for a deployment status. */
export enum DeploymentStatusState {
  /** The deployment experienced an error. */
  Error = "ERROR",
  /** The deployment has failed. */
  Failure = "FAILURE",
  /** The deployment is in progress. */
  InProgress = "IN_PROGRESS",
  /** The deployment is inactive. */
  Inactive = "INACTIVE",
  /** The deployment is pending. */
  Pending = "PENDING",
  /** The deployment is queued */
  Queued = "QUEUED",
  /** The deployment was successful. */
  Success = "SUCCESS",
}

/** The possible sides of a diff. */
export enum DiffSide {
  /** The left side of the diff. */
  Left = "LEFT",
  /** The right side of the diff. */
  Right = "RIGHT",
}

/** Represents a 'disconnected' event on a given issue or pull request. */
export type DisconnectedEvent = Node & {
  __typename?: "DisconnectedEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  id: Scalars["ID"]
  /** Reference originated in a different repository. */
  isCrossRepository: Scalars["Boolean"]
  /** Issue or pull request from which the issue was disconnected. */
  source: ReferencedSubject
  /** Issue or pull request which was disconnected. */
  subject: ReferencedSubject
}

/** Autogenerated input type of DismissPullRequestReview */
export type DismissPullRequestReviewInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The contents of the pull request review dismissal message. */
  message: Scalars["String"]
  /** The Node ID of the pull request review to modify. */
  pullRequestReviewId: Scalars["ID"]
}

/** Autogenerated return type of DismissPullRequestReview */
export type DismissPullRequestReviewPayload = {
  __typename?: "DismissPullRequestReviewPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The dismissed pull request review. */
  pullRequestReview?: Maybe<PullRequestReview>
}

/** Specifies a review comment to be left with a Pull Request Review. */
export type DraftPullRequestReviewComment = {
  /** Body of the comment to leave. */
  body: Scalars["String"]
  /** Path to the file being commented on. */
  path: Scalars["String"]
  /** Position in the file to leave a comment on. */
  position: Scalars["Int"]
}

/** Specifies a review comment thread to be left with a Pull Request Review. */
export type DraftPullRequestReviewThread = {
  /** Body of the comment to leave. */
  body: Scalars["String"]
  /** The line of the blob to which the thread refers. The end of the line range for multi-line comments. */
  line: Scalars["Int"]
  /** Path to the file being commented on. */
  path: Scalars["String"]
  /** The side of the diff on which the line resides. For multi-line comments, this is the side for the end of the line range. */
  side?: Maybe<DiffSide>
  /** The first line of the range to which the comment refers. */
  startLine?: Maybe<Scalars["Int"]>
  /** The side of the diff on which the start line resides. */
  startSide?: Maybe<DiffSide>
}

/** An account to manage multiple organizations with consolidated policy and billing. */
export type Enterprise = Node & {
  __typename?: "Enterprise"
  /** A URL pointing to the enterprise's public avatar. */
  avatarUrl: Scalars["URI"]
  /** Enterprise billing information visible to enterprise billing managers. */
  billingInfo?: Maybe<EnterpriseBillingInfo>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>
  /** The description of the enterprise. */
  description?: Maybe<Scalars["String"]>
  /** The description of the enterprise as HTML. */
  descriptionHTML: Scalars["HTML"]
  id: Scalars["ID"]
  /** The location of the enterprise. */
  location?: Maybe<Scalars["String"]>
  /** A list of users who are members of this enterprise. */
  members: EnterpriseMemberConnection
  /** The name of the enterprise. */
  name: Scalars["String"]
  /** A list of organizations that belong to this enterprise. */
  organizations: OrganizationConnection
  /** Enterprise information only visible to enterprise owners. */
  ownerInfo?: Maybe<EnterpriseOwnerInfo>
  /** The HTTP path for this enterprise. */
  resourcePath: Scalars["URI"]
  /** The URL-friendly identifier for the enterprise. */
  slug: Scalars["String"]
  /** The HTTP URL for this enterprise. */
  url: Scalars["URI"]
  /** A list of user accounts on this enterprise. */
  userAccounts: EnterpriseUserAccountConnection
  /** Is the current viewer an admin of this enterprise? */
  viewerIsAdmin: Scalars["Boolean"]
  /** The URL of the enterprise website. */
  websiteUrl?: Maybe<Scalars["URI"]>
}

/** An account to manage multiple organizations with consolidated policy and billing. */
export type EnterpriseAvatarUrlArgs = {
  size?: Maybe<Scalars["Int"]>
}

/** An account to manage multiple organizations with consolidated policy and billing. */
export type EnterpriseMembersArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  deployment?: Maybe<EnterpriseUserDeployment>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<EnterpriseMemberOrder>
  organizationLogins?: Maybe<Array<Scalars["String"]>>
  query?: Maybe<Scalars["String"]>
  role?: Maybe<EnterpriseUserAccountMembershipRole>
}

/** An account to manage multiple organizations with consolidated policy and billing. */
export type EnterpriseOrganizationsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<OrganizationOrder>
  query?: Maybe<Scalars["String"]>
}

/** An account to manage multiple organizations with consolidated policy and billing. */
export type EnterpriseUserAccountsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** The connection type for User. */
export type EnterpriseAdministratorConnection = {
  __typename?: "EnterpriseAdministratorConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<EnterpriseAdministratorEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<User>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** A User who is an administrator of an enterprise. */
export type EnterpriseAdministratorEdge = {
  __typename?: "EnterpriseAdministratorEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<User>
  /** The role of the administrator. */
  role: EnterpriseAdministratorRole
}

/** An invitation for a user to become an owner or billing manager of an enterprise. */
export type EnterpriseAdministratorInvitation = Node & {
  __typename?: "EnterpriseAdministratorInvitation"
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  /** The email of the person who was invited to the enterprise. */
  email?: Maybe<Scalars["String"]>
  /** The enterprise the invitation is for. */
  enterprise: Enterprise
  id: Scalars["ID"]
  /** The user who was invited to the enterprise. */
  invitee?: Maybe<User>
  /** The user who created the invitation. */
  inviter?: Maybe<User>
  /** The invitee's pending role in the enterprise (owner or billing_manager). */
  role: EnterpriseAdministratorRole
}

/** The connection type for EnterpriseAdministratorInvitation. */
export type EnterpriseAdministratorInvitationConnection = {
  __typename?: "EnterpriseAdministratorInvitationConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<EnterpriseAdministratorInvitationEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<EnterpriseAdministratorInvitation>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type EnterpriseAdministratorInvitationEdge = {
  __typename?: "EnterpriseAdministratorInvitationEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<EnterpriseAdministratorInvitation>
}

/** Ordering options for enterprise administrator invitation connections */
export type EnterpriseAdministratorInvitationOrder = {
  /** The ordering direction. */
  direction: OrderDirection
  /** The field to order enterprise administrator invitations by. */
  field: EnterpriseAdministratorInvitationOrderField
}

/** Properties by which enterprise administrator invitation connections can be ordered. */
export enum EnterpriseAdministratorInvitationOrderField {
  /** Order enterprise administrator member invitations by creation time */
  CreatedAt = "CREATED_AT",
}

/** The possible administrator roles in an enterprise account. */
export enum EnterpriseAdministratorRole {
  /** Represents a billing manager of the enterprise account. */
  BillingManager = "BILLING_MANAGER",
  /** Represents an owner of the enterprise account. */
  Owner = "OWNER",
}

/** Metadata for an audit entry containing enterprise account information. */
export type EnterpriseAuditEntryData = {
  /** The HTTP path for this enterprise. */
  enterpriseResourcePath?: Maybe<Scalars["URI"]>
  /** The slug of the enterprise. */
  enterpriseSlug?: Maybe<Scalars["String"]>
  /** The HTTP URL for this enterprise. */
  enterpriseUrl?: Maybe<Scalars["URI"]>
}

/** Enterprise billing information visible to enterprise billing managers and owners. */
export type EnterpriseBillingInfo = {
  __typename?: "EnterpriseBillingInfo"
  /** The number of licenseable users/emails across the enterprise. */
  allLicensableUsersCount: Scalars["Int"]
  /** The number of data packs used by all organizations owned by the enterprise. */
  assetPacks: Scalars["Int"]
  /**
   * The number of available seats across all owned organizations based on the unique number of billable users.
   * @deprecated `availableSeats` will be replaced with `totalAvailableLicenses` to provide more clarity on the value being returned Use EnterpriseBillingInfo.totalAvailableLicenses instead. Removal on 2020-01-01 UTC.
   */
  availableSeats: Scalars["Int"]
  /** The bandwidth quota in GB for all organizations owned by the enterprise. */
  bandwidthQuota: Scalars["Float"]
  /** The bandwidth usage in GB for all organizations owned by the enterprise. */
  bandwidthUsage: Scalars["Float"]
  /** The bandwidth usage as a percentage of the bandwidth quota. */
  bandwidthUsagePercentage: Scalars["Int"]
  /**
   * The total seats across all organizations owned by the enterprise.
   * @deprecated `seats` will be replaced with `totalLicenses` to provide more clarity on the value being returned Use EnterpriseBillingInfo.totalLicenses instead. Removal on 2020-01-01 UTC.
   */
  seats: Scalars["Int"]
  /** The storage quota in GB for all organizations owned by the enterprise. */
  storageQuota: Scalars["Float"]
  /** The storage usage in GB for all organizations owned by the enterprise. */
  storageUsage: Scalars["Float"]
  /** The storage usage as a percentage of the storage quota. */
  storageUsagePercentage: Scalars["Int"]
  /** The number of available licenses across all owned organizations based on the unique number of billable users. */
  totalAvailableLicenses: Scalars["Int"]
  /** The total number of licenses allocated. */
  totalLicenses: Scalars["Int"]
}

/** The possible values for the enterprise default repository permission setting. */
export enum EnterpriseDefaultRepositoryPermissionSettingValue {
  /** Organization members will be able to clone, pull, push, and add new collaborators to all organization repositories. */
  Admin = "ADMIN",
  /** Organizations in the enterprise choose default repository permissions for their members. */
  NoPolicy = "NO_POLICY",
  /** Organization members will only be able to clone and pull public repositories. */
  None = "NONE",
  /** Organization members will be able to clone and pull all organization repositories. */
  Read = "READ",
  /** Organization members will be able to clone, pull, and push all organization repositories. */
  Write = "WRITE",
}

/** The possible values for an enabled/disabled enterprise setting. */
export enum EnterpriseEnabledDisabledSettingValue {
  /** The setting is disabled for organizations in the enterprise. */
  Disabled = "DISABLED",
  /** The setting is enabled for organizations in the enterprise. */
  Enabled = "ENABLED",
  /** There is no policy set for organizations in the enterprise. */
  NoPolicy = "NO_POLICY",
}

/** The possible values for an enabled/no policy enterprise setting. */
export enum EnterpriseEnabledSettingValue {
  /** The setting is enabled for organizations in the enterprise. */
  Enabled = "ENABLED",
  /** There is no policy set for organizations in the enterprise. */
  NoPolicy = "NO_POLICY",
}

/** An identity provider configured to provision identities for an enterprise. */
export type EnterpriseIdentityProvider = Node & {
  __typename?: "EnterpriseIdentityProvider"
  /** The digest algorithm used to sign SAML requests for the identity provider. */
  digestMethod?: Maybe<SamlDigestAlgorithm>
  /** The enterprise this identity provider belongs to. */
  enterprise?: Maybe<Enterprise>
  /** ExternalIdentities provisioned by this identity provider. */
  externalIdentities: ExternalIdentityConnection
  id: Scalars["ID"]
  /** The x509 certificate used by the identity provider to sign assertions and responses. */
  idpCertificate?: Maybe<Scalars["X509Certificate"]>
  /** The Issuer Entity ID for the SAML identity provider. */
  issuer?: Maybe<Scalars["String"]>
  /** Recovery codes that can be used by admins to access the enterprise if the identity provider is unavailable. */
  recoveryCodes?: Maybe<Array<Scalars["String"]>>
  /** The signature algorithm used to sign SAML requests for the identity provider. */
  signatureMethod?: Maybe<SamlSignatureAlgorithm>
  /** The URL endpoint for the identity provider's SAML SSO. */
  ssoUrl?: Maybe<Scalars["URI"]>
}

/** An identity provider configured to provision identities for an enterprise. */
export type EnterpriseIdentityProviderExternalIdentitiesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** An object that is a member of an enterprise. */
export type EnterpriseMember = EnterpriseUserAccount | User

/** The connection type for EnterpriseMember. */
export type EnterpriseMemberConnection = {
  __typename?: "EnterpriseMemberConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<EnterpriseMemberEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<EnterpriseMember>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** A User who is a member of an enterprise through one or more organizations. */
export type EnterpriseMemberEdge = {
  __typename?: "EnterpriseMemberEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /**
   * Whether the user does not have a license for the enterprise.
   * @deprecated All members consume a license Removal on 2021-01-01 UTC.
   */
  isUnlicensed: Scalars["Boolean"]
  /** The item at the end of the edge. */
  node?: Maybe<EnterpriseMember>
}

/** Ordering options for enterprise member connections. */
export type EnterpriseMemberOrder = {
  /** The ordering direction. */
  direction: OrderDirection
  /** The field to order enterprise members by. */
  field: EnterpriseMemberOrderField
}

/** Properties by which enterprise member connections can be ordered. */
export enum EnterpriseMemberOrderField {
  /** Order enterprise members by creation time */
  CreatedAt = "CREATED_AT",
  /** Order enterprise members by login */
  Login = "LOGIN",
}

/** The possible values for the enterprise members can create repositories setting. */
export enum EnterpriseMembersCanCreateRepositoriesSettingValue {
  /** Members will be able to create public and private repositories. */
  All = "ALL",
  /** Members will not be able to create public or private repositories. */
  Disabled = "DISABLED",
  /** Organization administrators choose whether to allow members to create repositories. */
  NoPolicy = "NO_POLICY",
  /** Members will be able to create only private repositories. */
  Private = "PRIVATE",
  /** Members will be able to create only public repositories. */
  Public = "PUBLIC",
}

/** The possible values for the members can make purchases setting. */
export enum EnterpriseMembersCanMakePurchasesSettingValue {
  /** The setting is disabled for organizations in the enterprise. */
  Disabled = "DISABLED",
  /** The setting is enabled for organizations in the enterprise. */
  Enabled = "ENABLED",
}

/** The connection type for Organization. */
export type EnterpriseOrganizationMembershipConnection = {
  __typename?: "EnterpriseOrganizationMembershipConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<EnterpriseOrganizationMembershipEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Organization>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An enterprise organization that a user is a member of. */
export type EnterpriseOrganizationMembershipEdge = {
  __typename?: "EnterpriseOrganizationMembershipEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<Organization>
  /** The role of the user in the enterprise membership. */
  role: EnterpriseUserAccountMembershipRole
}

/** The connection type for User. */
export type EnterpriseOutsideCollaboratorConnection = {
  __typename?: "EnterpriseOutsideCollaboratorConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<EnterpriseOutsideCollaboratorEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<User>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** A User who is an outside collaborator of an enterprise through one or more organizations. */
export type EnterpriseOutsideCollaboratorEdge = {
  __typename?: "EnterpriseOutsideCollaboratorEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /**
   * Whether the outside collaborator does not have a license for the enterprise.
   * @deprecated All outside collaborators consume a license Removal on 2021-01-01 UTC.
   */
  isUnlicensed: Scalars["Boolean"]
  /** The item at the end of the edge. */
  node?: Maybe<User>
  /** The enterprise organization repositories this user is a member of. */
  repositories: EnterpriseRepositoryInfoConnection
}

/** A User who is an outside collaborator of an enterprise through one or more organizations. */
export type EnterpriseOutsideCollaboratorEdgeRepositoriesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<RepositoryOrder>
}

/** Enterprise information only visible to enterprise owners. */
export type EnterpriseOwnerInfo = {
  __typename?: "EnterpriseOwnerInfo"
  /** A list of all of the administrators for this enterprise. */
  admins: EnterpriseAdministratorConnection
  /** A list of users in the enterprise who currently have two-factor authentication disabled. */
  affiliatedUsersWithTwoFactorDisabled: UserConnection
  /** Whether or not affiliated users with two-factor authentication disabled exist in the enterprise. */
  affiliatedUsersWithTwoFactorDisabledExist: Scalars["Boolean"]
  /** The setting value for whether private repository forking is enabled for repositories in organizations in this enterprise. */
  allowPrivateRepositoryForkingSetting: EnterpriseEnabledDisabledSettingValue
  /** A list of enterprise organizations configured with the provided private repository forking setting value. */
  allowPrivateRepositoryForkingSettingOrganizations: OrganizationConnection
  /** The setting value for base repository permissions for organizations in this enterprise. */
  defaultRepositoryPermissionSetting: EnterpriseDefaultRepositoryPermissionSettingValue
  /** A list of enterprise organizations configured with the provided default repository permission. */
  defaultRepositoryPermissionSettingOrganizations: OrganizationConnection
  /** Enterprise Server installations owned by the enterprise. */
  enterpriseServerInstallations: EnterpriseServerInstallationConnection
  /** The setting value for whether the enterprise has an IP allow list enabled. */
  ipAllowListEnabledSetting: IpAllowListEnabledSettingValue
  /** The IP addresses that are allowed to access resources owned by the enterprise. */
  ipAllowListEntries: IpAllowListEntryConnection
  /** Whether or not the default repository permission is currently being updated. */
  isUpdatingDefaultRepositoryPermission: Scalars["Boolean"]
  /** Whether the two-factor authentication requirement is currently being enforced. */
  isUpdatingTwoFactorRequirement: Scalars["Boolean"]
  /**
   * The setting value for whether organization members with admin permissions on a
   * repository can change repository visibility.
   */
  membersCanChangeRepositoryVisibilitySetting: EnterpriseEnabledDisabledSettingValue
  /** A list of enterprise organizations configured with the provided can change repository visibility setting value. */
  membersCanChangeRepositoryVisibilitySettingOrganizations: OrganizationConnection
  /** The setting value for whether members of organizations in the enterprise can create internal repositories. */
  membersCanCreateInternalRepositoriesSetting?: Maybe<Scalars["Boolean"]>
  /** The setting value for whether members of organizations in the enterprise can create private repositories. */
  membersCanCreatePrivateRepositoriesSetting?: Maybe<Scalars["Boolean"]>
  /** The setting value for whether members of organizations in the enterprise can create public repositories. */
  membersCanCreatePublicRepositoriesSetting?: Maybe<Scalars["Boolean"]>
  /** The setting value for whether members of organizations in the enterprise can create repositories. */
  membersCanCreateRepositoriesSetting?: Maybe<EnterpriseMembersCanCreateRepositoriesSettingValue>
  /** A list of enterprise organizations configured with the provided repository creation setting value. */
  membersCanCreateRepositoriesSettingOrganizations: OrganizationConnection
  /** The setting value for whether members with admin permissions for repositories can delete issues. */
  membersCanDeleteIssuesSetting: EnterpriseEnabledDisabledSettingValue
  /** A list of enterprise organizations configured with the provided members can delete issues setting value. */
  membersCanDeleteIssuesSettingOrganizations: OrganizationConnection
  /** The setting value for whether members with admin permissions for repositories can delete or transfer repositories. */
  membersCanDeleteRepositoriesSetting: EnterpriseEnabledDisabledSettingValue
  /** A list of enterprise organizations configured with the provided members can delete repositories setting value. */
  membersCanDeleteRepositoriesSettingOrganizations: OrganizationConnection
  /** The setting value for whether members of organizations in the enterprise can invite outside collaborators. */
  membersCanInviteCollaboratorsSetting: EnterpriseEnabledDisabledSettingValue
  /** A list of enterprise organizations configured with the provided members can invite collaborators setting value. */
  membersCanInviteCollaboratorsSettingOrganizations: OrganizationConnection
  /** Indicates whether members of this enterprise's organizations can purchase additional services for those organizations. */
  membersCanMakePurchasesSetting: EnterpriseMembersCanMakePurchasesSettingValue
  /** The setting value for whether members with admin permissions for repositories can update protected branches. */
  membersCanUpdateProtectedBranchesSetting: EnterpriseEnabledDisabledSettingValue
  /** A list of enterprise organizations configured with the provided members can update protected branches setting value. */
  membersCanUpdateProtectedBranchesSettingOrganizations: OrganizationConnection
  /** The setting value for whether members can view dependency insights. */
  membersCanViewDependencyInsightsSetting: EnterpriseEnabledDisabledSettingValue
  /** A list of enterprise organizations configured with the provided members can view dependency insights setting value. */
  membersCanViewDependencyInsightsSettingOrganizations: OrganizationConnection
  /** The setting value for whether organization projects are enabled for organizations in this enterprise. */
  organizationProjectsSetting: EnterpriseEnabledDisabledSettingValue
  /** A list of enterprise organizations configured with the provided organization projects setting value. */
  organizationProjectsSettingOrganizations: OrganizationConnection
  /** A list of outside collaborators across the repositories in the enterprise. */
  outsideCollaborators: EnterpriseOutsideCollaboratorConnection
  /** A list of pending administrator invitations for the enterprise. */
  pendingAdminInvitations: EnterpriseAdministratorInvitationConnection
  /** A list of pending collaborator invitations across the repositories in the enterprise. */
  pendingCollaboratorInvitations: RepositoryInvitationConnection
  /**
   * A list of pending collaborators across the repositories in the enterprise.
   * @deprecated Repository invitations can now be associated with an email, not only an invitee. Use the `pendingCollaboratorInvitations` field instead. Removal on 2020-10-01 UTC.
   */
  pendingCollaborators: EnterprisePendingCollaboratorConnection
  /** A list of pending member invitations for organizations in the enterprise. */
  pendingMemberInvitations: EnterprisePendingMemberInvitationConnection
  /** The setting value for whether repository projects are enabled in this enterprise. */
  repositoryProjectsSetting: EnterpriseEnabledDisabledSettingValue
  /** A list of enterprise organizations configured with the provided repository projects setting value. */
  repositoryProjectsSettingOrganizations: OrganizationConnection
  /** The SAML Identity Provider for the enterprise. */
  samlIdentityProvider?: Maybe<EnterpriseIdentityProvider>
  /** A list of enterprise organizations configured with the SAML single sign-on setting value. */
  samlIdentityProviderSettingOrganizations: OrganizationConnection
  /** The setting value for whether team discussions are enabled for organizations in this enterprise. */
  teamDiscussionsSetting: EnterpriseEnabledDisabledSettingValue
  /** A list of enterprise organizations configured with the provided team discussions setting value. */
  teamDiscussionsSettingOrganizations: OrganizationConnection
  /** The setting value for whether the enterprise requires two-factor authentication for its organizations and users. */
  twoFactorRequiredSetting: EnterpriseEnabledSettingValue
  /** A list of enterprise organizations configured with the two-factor authentication setting value. */
  twoFactorRequiredSettingOrganizations: OrganizationConnection
}

/** Enterprise information only visible to enterprise owners. */
export type EnterpriseOwnerInfoAdminsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<EnterpriseMemberOrder>
  query?: Maybe<Scalars["String"]>
  role?: Maybe<EnterpriseAdministratorRole>
}

/** Enterprise information only visible to enterprise owners. */
export type EnterpriseOwnerInfoAffiliatedUsersWithTwoFactorDisabledArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** Enterprise information only visible to enterprise owners. */
export type EnterpriseOwnerInfoAllowPrivateRepositoryForkingSettingOrganizationsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<OrganizationOrder>
  value: Scalars["Boolean"]
}

/** Enterprise information only visible to enterprise owners. */
export type EnterpriseOwnerInfoDefaultRepositoryPermissionSettingOrganizationsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<OrganizationOrder>
  value: DefaultRepositoryPermissionField
}

/** Enterprise information only visible to enterprise owners. */
export type EnterpriseOwnerInfoEnterpriseServerInstallationsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  connectedOnly?: Maybe<Scalars["Boolean"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<EnterpriseServerInstallationOrder>
}

/** Enterprise information only visible to enterprise owners. */
export type EnterpriseOwnerInfoIpAllowListEntriesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<IpAllowListEntryOrder>
}

/** Enterprise information only visible to enterprise owners. */
export type EnterpriseOwnerInfoMembersCanChangeRepositoryVisibilitySettingOrganizationsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<OrganizationOrder>
  value: Scalars["Boolean"]
}

/** Enterprise information only visible to enterprise owners. */
export type EnterpriseOwnerInfoMembersCanCreateRepositoriesSettingOrganizationsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<OrganizationOrder>
  value: OrganizationMembersCanCreateRepositoriesSettingValue
}

/** Enterprise information only visible to enterprise owners. */
export type EnterpriseOwnerInfoMembersCanDeleteIssuesSettingOrganizationsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<OrganizationOrder>
  value: Scalars["Boolean"]
}

/** Enterprise information only visible to enterprise owners. */
export type EnterpriseOwnerInfoMembersCanDeleteRepositoriesSettingOrganizationsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<OrganizationOrder>
  value: Scalars["Boolean"]
}

/** Enterprise information only visible to enterprise owners. */
export type EnterpriseOwnerInfoMembersCanInviteCollaboratorsSettingOrganizationsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<OrganizationOrder>
  value: Scalars["Boolean"]
}

/** Enterprise information only visible to enterprise owners. */
export type EnterpriseOwnerInfoMembersCanUpdateProtectedBranchesSettingOrganizationsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<OrganizationOrder>
  value: Scalars["Boolean"]
}

/** Enterprise information only visible to enterprise owners. */
export type EnterpriseOwnerInfoMembersCanViewDependencyInsightsSettingOrganizationsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<OrganizationOrder>
  value: Scalars["Boolean"]
}

/** Enterprise information only visible to enterprise owners. */
export type EnterpriseOwnerInfoOrganizationProjectsSettingOrganizationsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<OrganizationOrder>
  value: Scalars["Boolean"]
}

/** Enterprise information only visible to enterprise owners. */
export type EnterpriseOwnerInfoOutsideCollaboratorsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  login?: Maybe<Scalars["String"]>
  orderBy?: Maybe<EnterpriseMemberOrder>
  query?: Maybe<Scalars["String"]>
  visibility?: Maybe<RepositoryVisibility>
}

/** Enterprise information only visible to enterprise owners. */
export type EnterpriseOwnerInfoPendingAdminInvitationsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<EnterpriseAdministratorInvitationOrder>
  query?: Maybe<Scalars["String"]>
  role?: Maybe<EnterpriseAdministratorRole>
}

/** Enterprise information only visible to enterprise owners. */
export type EnterpriseOwnerInfoPendingCollaboratorInvitationsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<RepositoryInvitationOrder>
  query?: Maybe<Scalars["String"]>
}

/** Enterprise information only visible to enterprise owners. */
export type EnterpriseOwnerInfoPendingCollaboratorsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<RepositoryInvitationOrder>
  query?: Maybe<Scalars["String"]>
}

/** Enterprise information only visible to enterprise owners. */
export type EnterpriseOwnerInfoPendingMemberInvitationsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  query?: Maybe<Scalars["String"]>
}

/** Enterprise information only visible to enterprise owners. */
export type EnterpriseOwnerInfoRepositoryProjectsSettingOrganizationsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<OrganizationOrder>
  value: Scalars["Boolean"]
}

/** Enterprise information only visible to enterprise owners. */
export type EnterpriseOwnerInfoSamlIdentityProviderSettingOrganizationsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<OrganizationOrder>
  value: IdentityProviderConfigurationState
}

/** Enterprise information only visible to enterprise owners. */
export type EnterpriseOwnerInfoTeamDiscussionsSettingOrganizationsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<OrganizationOrder>
  value: Scalars["Boolean"]
}

/** Enterprise information only visible to enterprise owners. */
export type EnterpriseOwnerInfoTwoFactorRequiredSettingOrganizationsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<OrganizationOrder>
  value: Scalars["Boolean"]
}

/** The connection type for User. */
export type EnterprisePendingCollaboratorConnection = {
  __typename?: "EnterprisePendingCollaboratorConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<EnterprisePendingCollaboratorEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<User>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** A user with an invitation to be a collaborator on a repository owned by an organization in an enterprise. */
export type EnterprisePendingCollaboratorEdge = {
  __typename?: "EnterprisePendingCollaboratorEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /**
   * Whether the invited collaborator does not have a license for the enterprise.
   * @deprecated All pending collaborators consume a license Removal on 2021-01-01 UTC.
   */
  isUnlicensed: Scalars["Boolean"]
  /** The item at the end of the edge. */
  node?: Maybe<User>
  /** The enterprise organization repositories this user is a member of. */
  repositories: EnterpriseRepositoryInfoConnection
}

/** A user with an invitation to be a collaborator on a repository owned by an organization in an enterprise. */
export type EnterprisePendingCollaboratorEdgeRepositoriesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<RepositoryOrder>
}

/** The connection type for OrganizationInvitation. */
export type EnterprisePendingMemberInvitationConnection = {
  __typename?: "EnterprisePendingMemberInvitationConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<EnterprisePendingMemberInvitationEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<OrganizationInvitation>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
  /** Identifies the total count of unique users in the connection. */
  totalUniqueUserCount: Scalars["Int"]
}

/** An invitation to be a member in an enterprise organization. */
export type EnterprisePendingMemberInvitationEdge = {
  __typename?: "EnterprisePendingMemberInvitationEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /**
   * Whether the invitation has a license for the enterprise.
   * @deprecated All pending members consume a license Removal on 2020-07-01 UTC.
   */
  isUnlicensed: Scalars["Boolean"]
  /** The item at the end of the edge. */
  node?: Maybe<OrganizationInvitation>
}

/** A subset of repository information queryable from an enterprise. */
export type EnterpriseRepositoryInfo = Node & {
  __typename?: "EnterpriseRepositoryInfo"
  id: Scalars["ID"]
  /** Identifies if the repository is private. */
  isPrivate: Scalars["Boolean"]
  /** The repository's name. */
  name: Scalars["String"]
  /** The repository's name with owner. */
  nameWithOwner: Scalars["String"]
}

/** The connection type for EnterpriseRepositoryInfo. */
export type EnterpriseRepositoryInfoConnection = {
  __typename?: "EnterpriseRepositoryInfoConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<EnterpriseRepositoryInfoEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<EnterpriseRepositoryInfo>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type EnterpriseRepositoryInfoEdge = {
  __typename?: "EnterpriseRepositoryInfoEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<EnterpriseRepositoryInfo>
}

/** An Enterprise Server installation. */
export type EnterpriseServerInstallation = Node & {
  __typename?: "EnterpriseServerInstallation"
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  /** The customer name to which the Enterprise Server installation belongs. */
  customerName: Scalars["String"]
  /** The host name of the Enterprise Server installation. */
  hostName: Scalars["String"]
  id: Scalars["ID"]
  /** Whether or not the installation is connected to an Enterprise Server installation via GitHub Connect. */
  isConnected: Scalars["Boolean"]
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"]
  /** User accounts on this Enterprise Server installation. */
  userAccounts: EnterpriseServerUserAccountConnection
  /** User accounts uploads for the Enterprise Server installation. */
  userAccountsUploads: EnterpriseServerUserAccountsUploadConnection
}

/** An Enterprise Server installation. */
export type EnterpriseServerInstallationUserAccountsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<EnterpriseServerUserAccountOrder>
}

/** An Enterprise Server installation. */
export type EnterpriseServerInstallationUserAccountsUploadsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<EnterpriseServerUserAccountsUploadOrder>
}

/** The connection type for EnterpriseServerInstallation. */
export type EnterpriseServerInstallationConnection = {
  __typename?: "EnterpriseServerInstallationConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<EnterpriseServerInstallationEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<EnterpriseServerInstallation>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type EnterpriseServerInstallationEdge = {
  __typename?: "EnterpriseServerInstallationEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<EnterpriseServerInstallation>
}

/** Ordering options for Enterprise Server installation connections. */
export type EnterpriseServerInstallationOrder = {
  /** The ordering direction. */
  direction: OrderDirection
  /** The field to order Enterprise Server installations by. */
  field: EnterpriseServerInstallationOrderField
}

/** Properties by which Enterprise Server installation connections can be ordered. */
export enum EnterpriseServerInstallationOrderField {
  /** Order Enterprise Server installations by creation time */
  CreatedAt = "CREATED_AT",
  /** Order Enterprise Server installations by customer name */
  CustomerName = "CUSTOMER_NAME",
  /** Order Enterprise Server installations by host name */
  HostName = "HOST_NAME",
}

/** A user account on an Enterprise Server installation. */
export type EnterpriseServerUserAccount = Node & {
  __typename?: "EnterpriseServerUserAccount"
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  /** User emails belonging to this user account. */
  emails: EnterpriseServerUserAccountEmailConnection
  /** The Enterprise Server installation on which this user account exists. */
  enterpriseServerInstallation: EnterpriseServerInstallation
  id: Scalars["ID"]
  /** Whether the user account is a site administrator on the Enterprise Server installation. */
  isSiteAdmin: Scalars["Boolean"]
  /** The login of the user account on the Enterprise Server installation. */
  login: Scalars["String"]
  /** The profile name of the user account on the Enterprise Server installation. */
  profileName?: Maybe<Scalars["String"]>
  /** The date and time when the user account was created on the Enterprise Server installation. */
  remoteCreatedAt: Scalars["DateTime"]
  /** The ID of the user account on the Enterprise Server installation. */
  remoteUserId: Scalars["Int"]
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"]
}

/** A user account on an Enterprise Server installation. */
export type EnterpriseServerUserAccountEmailsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<EnterpriseServerUserAccountEmailOrder>
}

/** The connection type for EnterpriseServerUserAccount. */
export type EnterpriseServerUserAccountConnection = {
  __typename?: "EnterpriseServerUserAccountConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<EnterpriseServerUserAccountEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<EnterpriseServerUserAccount>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type EnterpriseServerUserAccountEdge = {
  __typename?: "EnterpriseServerUserAccountEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<EnterpriseServerUserAccount>
}

/** An email belonging to a user account on an Enterprise Server installation. */
export type EnterpriseServerUserAccountEmail = Node & {
  __typename?: "EnterpriseServerUserAccountEmail"
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  /** The email address. */
  email: Scalars["String"]
  id: Scalars["ID"]
  /** Indicates whether this is the primary email of the associated user account. */
  isPrimary: Scalars["Boolean"]
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"]
  /** The user account to which the email belongs. */
  userAccount: EnterpriseServerUserAccount
}

/** The connection type for EnterpriseServerUserAccountEmail. */
export type EnterpriseServerUserAccountEmailConnection = {
  __typename?: "EnterpriseServerUserAccountEmailConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<EnterpriseServerUserAccountEmailEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<EnterpriseServerUserAccountEmail>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type EnterpriseServerUserAccountEmailEdge = {
  __typename?: "EnterpriseServerUserAccountEmailEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<EnterpriseServerUserAccountEmail>
}

/** Ordering options for Enterprise Server user account email connections. */
export type EnterpriseServerUserAccountEmailOrder = {
  /** The ordering direction. */
  direction: OrderDirection
  /** The field to order emails by. */
  field: EnterpriseServerUserAccountEmailOrderField
}

/** Properties by which Enterprise Server user account email connections can be ordered. */
export enum EnterpriseServerUserAccountEmailOrderField {
  /** Order emails by email */
  Email = "EMAIL",
}

/** Ordering options for Enterprise Server user account connections. */
export type EnterpriseServerUserAccountOrder = {
  /** The ordering direction. */
  direction: OrderDirection
  /** The field to order user accounts by. */
  field: EnterpriseServerUserAccountOrderField
}

/** Properties by which Enterprise Server user account connections can be ordered. */
export enum EnterpriseServerUserAccountOrderField {
  /** Order user accounts by login */
  Login = "LOGIN",
  /** Order user accounts by creation time on the Enterprise Server installation */
  RemoteCreatedAt = "REMOTE_CREATED_AT",
}

/** A user accounts upload from an Enterprise Server installation. */
export type EnterpriseServerUserAccountsUpload = Node & {
  __typename?: "EnterpriseServerUserAccountsUpload"
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  /** The enterprise to which this upload belongs. */
  enterprise: Enterprise
  /** The Enterprise Server installation for which this upload was generated. */
  enterpriseServerInstallation: EnterpriseServerInstallation
  id: Scalars["ID"]
  /** The name of the file uploaded. */
  name: Scalars["String"]
  /** The synchronization state of the upload */
  syncState: EnterpriseServerUserAccountsUploadSyncState
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"]
}

/** The connection type for EnterpriseServerUserAccountsUpload. */
export type EnterpriseServerUserAccountsUploadConnection = {
  __typename?: "EnterpriseServerUserAccountsUploadConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<EnterpriseServerUserAccountsUploadEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<EnterpriseServerUserAccountsUpload>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type EnterpriseServerUserAccountsUploadEdge = {
  __typename?: "EnterpriseServerUserAccountsUploadEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<EnterpriseServerUserAccountsUpload>
}

/** Ordering options for Enterprise Server user accounts upload connections. */
export type EnterpriseServerUserAccountsUploadOrder = {
  /** The ordering direction. */
  direction: OrderDirection
  /** The field to order user accounts uploads by. */
  field: EnterpriseServerUserAccountsUploadOrderField
}

/** Properties by which Enterprise Server user accounts upload connections can be ordered. */
export enum EnterpriseServerUserAccountsUploadOrderField {
  /** Order user accounts uploads by creation time */
  CreatedAt = "CREATED_AT",
}

/** Synchronization state of the Enterprise Server user accounts upload */
export enum EnterpriseServerUserAccountsUploadSyncState {
  /** The synchronization of the upload failed. */
  Failure = "FAILURE",
  /** The synchronization of the upload is pending. */
  Pending = "PENDING",
  /** The synchronization of the upload succeeded. */
  Success = "SUCCESS",
}

/** An account for a user who is an admin of an enterprise or a member of an enterprise through one or more organizations. */
export type EnterpriseUserAccount = Actor &
  Node & {
    __typename?: "EnterpriseUserAccount"
    /** A URL pointing to the enterprise user account's public avatar. */
    avatarUrl: Scalars["URI"]
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["DateTime"]
    /** The enterprise in which this user account exists. */
    enterprise: Enterprise
    id: Scalars["ID"]
    /** An identifier for the enterprise user account, a login or email address */
    login: Scalars["String"]
    /** The name of the enterprise user account */
    name?: Maybe<Scalars["String"]>
    /** A list of enterprise organizations this user is a member of. */
    organizations: EnterpriseOrganizationMembershipConnection
    /** The HTTP path for this user. */
    resourcePath: Scalars["URI"]
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["DateTime"]
    /** The HTTP URL for this user. */
    url: Scalars["URI"]
    /** The user within the enterprise. */
    user?: Maybe<User>
  }

/** An account for a user who is an admin of an enterprise or a member of an enterprise through one or more organizations. */
export type EnterpriseUserAccountAvatarUrlArgs = {
  size?: Maybe<Scalars["Int"]>
}

/** An account for a user who is an admin of an enterprise or a member of an enterprise through one or more organizations. */
export type EnterpriseUserAccountOrganizationsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<OrganizationOrder>
  query?: Maybe<Scalars["String"]>
  role?: Maybe<EnterpriseUserAccountMembershipRole>
}

/** The connection type for EnterpriseUserAccount. */
export type EnterpriseUserAccountConnection = {
  __typename?: "EnterpriseUserAccountConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<EnterpriseUserAccountEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<EnterpriseUserAccount>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type EnterpriseUserAccountEdge = {
  __typename?: "EnterpriseUserAccountEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<EnterpriseUserAccount>
}

/** The possible roles for enterprise membership. */
export enum EnterpriseUserAccountMembershipRole {
  /** The user is a member of the enterprise membership. */
  Member = "MEMBER",
  /** The user is an owner of the enterprise membership. */
  Owner = "OWNER",
}

/** The possible GitHub Enterprise deployments where this user can exist. */
export enum EnterpriseUserDeployment {
  /** The user is part of a GitHub Enterprise Cloud deployment. */
  Cloud = "CLOUD",
  /** The user is part of a GitHub Enterprise Server deployment. */
  Server = "SERVER",
}

/** An external identity provisioned by SAML SSO or SCIM. */
export type ExternalIdentity = Node & {
  __typename?: "ExternalIdentity"
  /** The GUID for this identity */
  guid: Scalars["String"]
  id: Scalars["ID"]
  /** Organization invitation for this SCIM-provisioned external identity */
  organizationInvitation?: Maybe<OrganizationInvitation>
  /** SAML Identity attributes */
  samlIdentity?: Maybe<ExternalIdentitySamlAttributes>
  /** SCIM Identity attributes */
  scimIdentity?: Maybe<ExternalIdentityScimAttributes>
  /** User linked to this external identity. Will be NULL if this identity has not been claimed by an organization member. */
  user?: Maybe<User>
}

/** The connection type for ExternalIdentity. */
export type ExternalIdentityConnection = {
  __typename?: "ExternalIdentityConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ExternalIdentityEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<ExternalIdentity>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type ExternalIdentityEdge = {
  __typename?: "ExternalIdentityEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<ExternalIdentity>
}

/** SAML attributes for the External Identity */
export type ExternalIdentitySamlAttributes = {
  __typename?: "ExternalIdentitySamlAttributes"
  /** The emails associated with the SAML identity */
  emails?: Maybe<Array<UserEmailMetadata>>
  /** Family name of the SAML identity */
  familyName?: Maybe<Scalars["String"]>
  /** Given name of the SAML identity */
  givenName?: Maybe<Scalars["String"]>
  /** The groups linked to this identity in IDP */
  groups?: Maybe<Array<Scalars["String"]>>
  /** The NameID of the SAML identity */
  nameId?: Maybe<Scalars["String"]>
  /** The userName of the SAML identity */
  username?: Maybe<Scalars["String"]>
}

/** SCIM attributes for the External Identity */
export type ExternalIdentityScimAttributes = {
  __typename?: "ExternalIdentityScimAttributes"
  /** The emails associated with the SCIM identity */
  emails?: Maybe<Array<UserEmailMetadata>>
  /** Family name of the SCIM identity */
  familyName?: Maybe<Scalars["String"]>
  /** Given name of the SCIM identity */
  givenName?: Maybe<Scalars["String"]>
  /** The groups linked to this identity in IDP */
  groups?: Maybe<Array<Scalars["String"]>>
  /** The userName of the SCIM identity */
  username?: Maybe<Scalars["String"]>
}

/** The possible viewed states of a file . */
export enum FileViewedState {
  /** The file has new changes since last viewed. */
  Dismissed = "DISMISSED",
  /** The file has not been marked as viewed. */
  Unviewed = "UNVIEWED",
  /** The file has been marked as viewed. */
  Viewed = "VIEWED",
}

/** Autogenerated input type of FollowUser */
export type FollowUserInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** ID of the user to follow. */
  userId: Scalars["ID"]
}

/** Autogenerated return type of FollowUser */
export type FollowUserPayload = {
  __typename?: "FollowUserPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The user that was followed. */
  user?: Maybe<User>
}

/** The connection type for User. */
export type FollowerConnection = {
  __typename?: "FollowerConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UserEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<User>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** The connection type for User. */
export type FollowingConnection = {
  __typename?: "FollowingConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UserEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<User>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** A funding platform link for a repository. */
export type FundingLink = {
  __typename?: "FundingLink"
  /** The funding platform this link is for. */
  platform: FundingPlatform
  /** The configured URL for this funding link. */
  url: Scalars["URI"]
}

/** The possible funding platforms for repository funding links. */
export enum FundingPlatform {
  /** Community Bridge funding platform. */
  CommunityBridge = "COMMUNITY_BRIDGE",
  /** Custom funding platform. */
  Custom = "CUSTOM",
  /** GitHub funding platform. */
  Github = "GITHUB",
  /** IssueHunt funding platform. */
  Issuehunt = "ISSUEHUNT",
  /** Ko-fi funding platform. */
  KoFi = "KO_FI",
  /** Liberapay funding platform. */
  Liberapay = "LIBERAPAY",
  /** Open Collective funding platform. */
  OpenCollective = "OPEN_COLLECTIVE",
  /** Otechie funding platform. */
  Otechie = "OTECHIE",
  /** Patreon funding platform. */
  Patreon = "PATREON",
  /** Tidelift funding platform. */
  Tidelift = "TIDELIFT",
}

/** A generic hovercard context with a message and icon */
export type GenericHovercardContext = HovercardContext & {
  __typename?: "GenericHovercardContext"
  /** A string describing this context */
  message: Scalars["String"]
  /** An octicon to accompany this context */
  octicon: Scalars["String"]
}

/** A Gist. */
export type Gist = Node &
  Starrable &
  UniformResourceLocatable & {
    __typename?: "Gist"
    /** A list of comments associated with the gist */
    comments: GistCommentConnection
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["DateTime"]
    /** The gist description. */
    description?: Maybe<Scalars["String"]>
    /** The files in this gist. */
    files?: Maybe<Array<Maybe<GistFile>>>
    /** A list of forks associated with the gist */
    forks: GistConnection
    id: Scalars["ID"]
    /** Identifies if the gist is a fork. */
    isFork: Scalars["Boolean"]
    /** Whether the gist is public or not. */
    isPublic: Scalars["Boolean"]
    /** The gist name. */
    name: Scalars["String"]
    /** The gist owner. */
    owner?: Maybe<RepositoryOwner>
    /** Identifies when the gist was last pushed to. */
    pushedAt?: Maybe<Scalars["DateTime"]>
    /** The HTML path to this resource. */
    resourcePath: Scalars["URI"]
    /** Returns a count of how many stargazers there are on this object */
    stargazerCount: Scalars["Int"]
    /** A list of users who have starred this starrable. */
    stargazers: StargazerConnection
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["DateTime"]
    /** The HTTP URL for this Gist. */
    url: Scalars["URI"]
    /** Returns a boolean indicating whether the viewing user has starred this starrable. */
    viewerHasStarred: Scalars["Boolean"]
  }

/** A Gist. */
export type GistCommentsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** A Gist. */
export type GistFilesArgs = {
  limit?: Maybe<Scalars["Int"]>
  oid?: Maybe<Scalars["GitObjectID"]>
}

/** A Gist. */
export type GistForksArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<GistOrder>
}

/** A Gist. */
export type GistStargazersArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<StarOrder>
}

/** Represents a comment on an Gist. */
export type GistComment = Comment &
  Deletable &
  Minimizable &
  Node &
  Updatable &
  UpdatableComment & {
    __typename?: "GistComment"
    /** The actor who authored the comment. */
    author?: Maybe<Actor>
    /** Author's association with the gist. */
    authorAssociation: CommentAuthorAssociation
    /** Identifies the comment body. */
    body: Scalars["String"]
    /** The body rendered to HTML. */
    bodyHTML: Scalars["HTML"]
    /** The body rendered to text. */
    bodyText: Scalars["String"]
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["DateTime"]
    /** Check if this comment was created via an email reply. */
    createdViaEmail: Scalars["Boolean"]
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>
    /** The actor who edited the comment. */
    editor?: Maybe<Actor>
    /** The associated gist. */
    gist: Gist
    id: Scalars["ID"]
    /** Check if this comment was edited and includes an edit with the creation data */
    includesCreatedEdit: Scalars["Boolean"]
    /** Returns whether or not a comment has been minimized. */
    isMinimized: Scalars["Boolean"]
    /** The moment the editor made the last edit */
    lastEditedAt?: Maybe<Scalars["DateTime"]>
    /** Returns why the comment was minimized. */
    minimizedReason?: Maybe<Scalars["String"]>
    /** Identifies when the comment was published at. */
    publishedAt?: Maybe<Scalars["DateTime"]>
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["DateTime"]
    /** A list of edits to this content. */
    userContentEdits?: Maybe<UserContentEditConnection>
    /** Check if the current viewer can delete this object. */
    viewerCanDelete: Scalars["Boolean"]
    /** Check if the current viewer can minimize this object. */
    viewerCanMinimize: Scalars["Boolean"]
    /** Check if the current viewer can update this object. */
    viewerCanUpdate: Scalars["Boolean"]
    /** Reasons why the current viewer can not update this comment. */
    viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>
    /** Did the viewer author this comment. */
    viewerDidAuthor: Scalars["Boolean"]
  }

/** Represents a comment on an Gist. */
export type GistCommentUserContentEditsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** The connection type for GistComment. */
export type GistCommentConnection = {
  __typename?: "GistCommentConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GistCommentEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GistComment>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type GistCommentEdge = {
  __typename?: "GistCommentEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<GistComment>
}

/** The connection type for Gist. */
export type GistConnection = {
  __typename?: "GistConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GistEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Gist>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type GistEdge = {
  __typename?: "GistEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<Gist>
}

/** A file in a gist. */
export type GistFile = {
  __typename?: "GistFile"
  /** The file name encoded to remove characters that are invalid in URL paths. */
  encodedName?: Maybe<Scalars["String"]>
  /** The gist file encoding. */
  encoding?: Maybe<Scalars["String"]>
  /** The file extension from the file name. */
  extension?: Maybe<Scalars["String"]>
  /** Indicates if this file is an image. */
  isImage: Scalars["Boolean"]
  /** Whether the file's contents were truncated. */
  isTruncated: Scalars["Boolean"]
  /** The programming language this file is written in. */
  language?: Maybe<Language>
  /** The gist file name. */
  name?: Maybe<Scalars["String"]>
  /** The gist file size in bytes. */
  size?: Maybe<Scalars["Int"]>
  /** UTF8 text data or null if the file is binary */
  text?: Maybe<Scalars["String"]>
}

/** A file in a gist. */
export type GistFileTextArgs = {
  truncate?: Maybe<Scalars["Int"]>
}

/** Ordering options for gist connections */
export type GistOrder = {
  /** The ordering direction. */
  direction: OrderDirection
  /** The field to order repositories by. */
  field: GistOrderField
}

/** Properties by which gist connections can be ordered. */
export enum GistOrderField {
  /** Order gists by creation time */
  CreatedAt = "CREATED_AT",
  /** Order gists by push time */
  PushedAt = "PUSHED_AT",
  /** Order gists by update time */
  UpdatedAt = "UPDATED_AT",
}

/** The privacy of a Gist */
export enum GistPrivacy {
  /** Gists that are public and secret */
  All = "ALL",
  /** Public */
  Public = "PUBLIC",
  /** Secret */
  Secret = "SECRET",
}

/** Represents an actor in a Git commit (ie. an author or committer). */
export type GitActor = {
  __typename?: "GitActor"
  /** A URL pointing to the author's public avatar. */
  avatarUrl: Scalars["URI"]
  /** The timestamp of the Git action (authoring or committing). */
  date?: Maybe<Scalars["GitTimestamp"]>
  /** The email in the Git commit. */
  email?: Maybe<Scalars["String"]>
  /** The name in the Git commit. */
  name?: Maybe<Scalars["String"]>
  /** The GitHub user corresponding to the email field. Null if no such user exists. */
  user?: Maybe<User>
}

/** Represents an actor in a Git commit (ie. an author or committer). */
export type GitActorAvatarUrlArgs = {
  size?: Maybe<Scalars["Int"]>
}

/** The connection type for GitActor. */
export type GitActorConnection = {
  __typename?: "GitActorConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GitActorEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GitActor>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type GitActorEdge = {
  __typename?: "GitActorEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<GitActor>
}

/** Represents information about the GitHub instance. */
export type GitHubMetadata = {
  __typename?: "GitHubMetadata"
  /** Returns a String that's a SHA of `github-services` */
  gitHubServicesSha: Scalars["GitObjectID"]
  /** IP addresses that users connect to for git operations */
  gitIpAddresses?: Maybe<Array<Scalars["String"]>>
  /** IP addresses that service hooks are sent from */
  hookIpAddresses?: Maybe<Array<Scalars["String"]>>
  /** IP addresses that the importer connects from */
  importerIpAddresses?: Maybe<Array<Scalars["String"]>>
  /** Whether or not users are verified */
  isPasswordAuthenticationVerifiable: Scalars["Boolean"]
  /** IP addresses for GitHub Pages' A records */
  pagesIpAddresses?: Maybe<Array<Scalars["String"]>>
}

/** Represents a Git object. */
export type GitObject = {
  /** An abbreviated version of the Git object ID */
  abbreviatedOid: Scalars["String"]
  /** The HTTP path for this Git object */
  commitResourcePath: Scalars["URI"]
  /** The HTTP URL for this Git object */
  commitUrl: Scalars["URI"]
  id: Scalars["ID"]
  /** The Git object ID */
  oid: Scalars["GitObjectID"]
  /** The Repository the Git object belongs to */
  repository: Repository
}

/** Information about a signature (GPG or S/MIME) on a Commit or Tag. */
export type GitSignature = {
  /** Email used to sign this object. */
  email: Scalars["String"]
  /** True if the signature is valid and verified by GitHub. */
  isValid: Scalars["Boolean"]
  /** Payload for GPG signing object. Raw ODB object without the signature header. */
  payload: Scalars["String"]
  /** ASCII-armored signature header from object. */
  signature: Scalars["String"]
  /** GitHub user corresponding to the email signing this commit. */
  signer?: Maybe<User>
  /**
   * The state of this signature. `VALID` if signature is valid and verified by
   * GitHub, otherwise represents reason why signature is considered invalid.
   */
  state: GitSignatureState
  /** True if the signature was made with GitHub's signing key. */
  wasSignedByGitHub: Scalars["Boolean"]
}

/** The state of a Git signature. */
export enum GitSignatureState {
  /** The signing certificate or its chain could not be verified */
  BadCert = "BAD_CERT",
  /** Invalid email used for signing */
  BadEmail = "BAD_EMAIL",
  /** Signing key expired */
  ExpiredKey = "EXPIRED_KEY",
  /** Internal error - the GPG verification service misbehaved */
  GpgverifyError = "GPGVERIFY_ERROR",
  /** Internal error - the GPG verification service is unavailable at the moment */
  GpgverifyUnavailable = "GPGVERIFY_UNAVAILABLE",
  /** Invalid signature */
  Invalid = "INVALID",
  /** Malformed signature */
  MalformedSig = "MALFORMED_SIG",
  /** Email used for signing not known to GitHub */
  NoUser = "NO_USER",
  /** The usage flags for the key that signed this don't allow signing */
  NotSigningKey = "NOT_SIGNING_KEY",
  /** Valid siganture, though certificate revocation check failed */
  OcspError = "OCSP_ERROR",
  /** Valid signature, pending certificate revocation checking */
  OcspPending = "OCSP_PENDING",
  /** One or more certificates in chain has been revoked */
  OcspRevoked = "OCSP_REVOKED",
  /** Key used for signing not known to GitHub */
  UnknownKey = "UNKNOWN_KEY",
  /** Unknown signature type */
  UnknownSigType = "UNKNOWN_SIG_TYPE",
  /** Unsigned */
  Unsigned = "UNSIGNED",
  /** Email used for signing unverified on GitHub */
  UnverifiedEmail = "UNVERIFIED_EMAIL",
  /** Valid signature and verified by GitHub */
  Valid = "VALID",
}

/** Represents a GPG signature on a Commit or Tag. */
export type GpgSignature = GitSignature & {
  __typename?: "GpgSignature"
  /** Email used to sign this object. */
  email: Scalars["String"]
  /** True if the signature is valid and verified by GitHub. */
  isValid: Scalars["Boolean"]
  /** Hex-encoded ID of the key that signed this object. */
  keyId?: Maybe<Scalars["String"]>
  /** Payload for GPG signing object. Raw ODB object without the signature header. */
  payload: Scalars["String"]
  /** ASCII-armored signature header from object. */
  signature: Scalars["String"]
  /** GitHub user corresponding to the email signing this commit. */
  signer?: Maybe<User>
  /**
   * The state of this signature. `VALID` if signature is valid and verified by
   * GitHub, otherwise represents reason why signature is considered invalid.
   */
  state: GitSignatureState
  /** True if the signature was made with GitHub's signing key. */
  wasSignedByGitHub: Scalars["Boolean"]
}

/** Represents a 'head_ref_deleted' event on a given pull request. */
export type HeadRefDeletedEvent = Node & {
  __typename?: "HeadRefDeletedEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  /** Identifies the Ref associated with the `head_ref_deleted` event. */
  headRef?: Maybe<Ref>
  /** Identifies the name of the Ref associated with the `head_ref_deleted` event. */
  headRefName: Scalars["String"]
  id: Scalars["ID"]
  /** PullRequest referenced by event. */
  pullRequest: PullRequest
}

/** Represents a 'head_ref_force_pushed' event on a given pull request. */
export type HeadRefForcePushedEvent = Node & {
  __typename?: "HeadRefForcePushedEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** Identifies the after commit SHA for the 'head_ref_force_pushed' event. */
  afterCommit?: Maybe<Commit>
  /** Identifies the before commit SHA for the 'head_ref_force_pushed' event. */
  beforeCommit?: Maybe<Commit>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  id: Scalars["ID"]
  /** PullRequest referenced by event. */
  pullRequest: PullRequest
  /** Identifies the fully qualified ref name for the 'head_ref_force_pushed' event. */
  ref?: Maybe<Ref>
}

/** Represents a 'head_ref_restored' event on a given pull request. */
export type HeadRefRestoredEvent = Node & {
  __typename?: "HeadRefRestoredEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  id: Scalars["ID"]
  /** PullRequest referenced by event. */
  pullRequest: PullRequest
}

/** Detail needed to display a hovercard for a user */
export type Hovercard = {
  __typename?: "Hovercard"
  /** Each of the contexts for this hovercard */
  contexts: Array<HovercardContext>
}

/** An individual line of a hovercard */
export type HovercardContext = {
  /** A string describing this context */
  message: Scalars["String"]
  /** An octicon to accompany this context */
  octicon: Scalars["String"]
}

/** The possible states in which authentication can be configured with an identity provider. */
export enum IdentityProviderConfigurationState {
  /** Authentication with an identity provider is configured but not enforced. */
  Configured = "CONFIGURED",
  /** Authentication with an identity provider is configured and enforced. */
  Enforced = "ENFORCED",
  /** Authentication with an identity provider is not configured. */
  Unconfigured = "UNCONFIGURED",
}

/** Autogenerated input type of InviteEnterpriseAdmin */
export type InviteEnterpriseAdminInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The email of the person to invite as an administrator. */
  email?: Maybe<Scalars["String"]>
  /** The ID of the enterprise to which you want to invite an administrator. */
  enterpriseId: Scalars["ID"]
  /** The login of a user to invite as an administrator. */
  invitee?: Maybe<Scalars["String"]>
  /** The role of the administrator. */
  role?: Maybe<EnterpriseAdministratorRole>
}

/** Autogenerated return type of InviteEnterpriseAdmin */
export type InviteEnterpriseAdminPayload = {
  __typename?: "InviteEnterpriseAdminPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The created enterprise administrator invitation. */
  invitation?: Maybe<EnterpriseAdministratorInvitation>
}

/** The possible values for the IP allow list enabled setting. */
export enum IpAllowListEnabledSettingValue {
  /** The setting is disabled for the owner. */
  Disabled = "DISABLED",
  /** The setting is enabled for the owner. */
  Enabled = "ENABLED",
}

/** An IP address or range of addresses that is allowed to access an owner's resources. */
export type IpAllowListEntry = Node & {
  __typename?: "IpAllowListEntry"
  /** A single IP address or range of IP addresses in CIDR notation. */
  allowListValue: Scalars["String"]
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  id: Scalars["ID"]
  /** Whether the entry is currently active. */
  isActive: Scalars["Boolean"]
  /** The name of the IP allow list entry. */
  name?: Maybe<Scalars["String"]>
  /** The owner of the IP allow list entry. */
  owner: IpAllowListOwner
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"]
}

/** The connection type for IpAllowListEntry. */
export type IpAllowListEntryConnection = {
  __typename?: "IpAllowListEntryConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<IpAllowListEntryEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<IpAllowListEntry>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type IpAllowListEntryEdge = {
  __typename?: "IpAllowListEntryEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<IpAllowListEntry>
}

/** Ordering options for IP allow list entry connections. */
export type IpAllowListEntryOrder = {
  /** The ordering direction. */
  direction: OrderDirection
  /** The field to order IP allow list entries by. */
  field: IpAllowListEntryOrderField
}

/** Properties by which IP allow list entry connections can be ordered. */
export enum IpAllowListEntryOrderField {
  /** Order IP allow list entries by the allow list value. */
  AllowListValue = "ALLOW_LIST_VALUE",
  /** Order IP allow list entries by creation time. */
  CreatedAt = "CREATED_AT",
}

/** Types that can own an IP allow list. */
export type IpAllowListOwner = Enterprise | Organization

/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type Issue = Assignable &
  Closable &
  Comment &
  Labelable &
  Lockable &
  Node &
  Reactable &
  RepositoryNode &
  Subscribable &
  UniformResourceLocatable &
  Updatable &
  UpdatableComment & {
    __typename?: "Issue"
    /** Reason that the conversation was locked. */
    activeLockReason?: Maybe<LockReason>
    /** A list of Users assigned to this object. */
    assignees: UserConnection
    /** The actor who authored the comment. */
    author?: Maybe<Actor>
    /** Author's association with the subject of the comment. */
    authorAssociation: CommentAuthorAssociation
    /** Identifies the body of the issue. */
    body: Scalars["String"]
    /** The body rendered to HTML. */
    bodyHTML: Scalars["HTML"]
    /** The http path for this issue body */
    bodyResourcePath: Scalars["URI"]
    /** Identifies the body of the issue rendered to text. */
    bodyText: Scalars["String"]
    /** The http URL for this issue body */
    bodyUrl: Scalars["URI"]
    /** `true` if the object is closed (definition of closed may depend on type) */
    closed: Scalars["Boolean"]
    /** Identifies the date and time when the object was closed. */
    closedAt?: Maybe<Scalars["DateTime"]>
    /** A list of comments associated with the Issue. */
    comments: IssueCommentConnection
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["DateTime"]
    /** Check if this comment was created via an email reply. */
    createdViaEmail: Scalars["Boolean"]
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>
    /** The actor who edited the comment. */
    editor?: Maybe<Actor>
    /** The hovercard information for this issue */
    hovercard: Hovercard
    id: Scalars["ID"]
    /** Check if this comment was edited and includes an edit with the creation data */
    includesCreatedEdit: Scalars["Boolean"]
    /** Is this issue read by the viewer */
    isReadByViewer?: Maybe<Scalars["Boolean"]>
    /** A list of labels associated with the object. */
    labels?: Maybe<LabelConnection>
    /** The moment the editor made the last edit */
    lastEditedAt?: Maybe<Scalars["DateTime"]>
    /** `true` if the object is locked */
    locked: Scalars["Boolean"]
    /** Identifies the milestone associated with the issue. */
    milestone?: Maybe<Milestone>
    /** Identifies the issue number. */
    number: Scalars["Int"]
    /** A list of Users that are participating in the Issue conversation. */
    participants: UserConnection
    /** List of project cards associated with this issue. */
    projectCards: ProjectCardConnection
    /** Identifies when the comment was published at. */
    publishedAt?: Maybe<Scalars["DateTime"]>
    /** A list of reactions grouped by content left on the subject. */
    reactionGroups?: Maybe<Array<ReactionGroup>>
    /** A list of Reactions left on the Issue. */
    reactions: ReactionConnection
    /** The repository associated with this node. */
    repository: Repository
    /** The HTTP path for this issue */
    resourcePath: Scalars["URI"]
    /** Identifies the state of the issue. */
    state: IssueState
    /**
     * A list of events, comments, commits, etc. associated with the issue.
     * @deprecated `timeline` will be removed Use Issue.timelineItems instead. Removal on 2020-10-01 UTC.
     */
    timeline: IssueTimelineConnection
    /** A list of events, comments, commits, etc. associated with the issue. */
    timelineItems: IssueTimelineItemsConnection
    /** Identifies the issue title. */
    title: Scalars["String"]
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["DateTime"]
    /** The HTTP URL for this issue */
    url: Scalars["URI"]
    /** A list of edits to this content. */
    userContentEdits?: Maybe<UserContentEditConnection>
    /** Can user react to this subject */
    viewerCanReact: Scalars["Boolean"]
    /** Check if the viewer is able to change their subscription status for the repository. */
    viewerCanSubscribe: Scalars["Boolean"]
    /** Check if the current viewer can update this object. */
    viewerCanUpdate: Scalars["Boolean"]
    /** Reasons why the current viewer can not update this comment. */
    viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>
    /** Did the viewer author this comment. */
    viewerDidAuthor: Scalars["Boolean"]
    /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
    viewerSubscription?: Maybe<SubscriptionState>
  }

/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type IssueAssigneesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type IssueCommentsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type IssueHovercardArgs = {
  includeNotificationContexts?: Maybe<Scalars["Boolean"]>
}

/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type IssueLabelsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<LabelOrder>
}

/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type IssueParticipantsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type IssueProjectCardsArgs = {
  after?: Maybe<Scalars["String"]>
  archivedStates?: Maybe<Array<Maybe<ProjectCardArchivedState>>>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type IssueReactionsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  content?: Maybe<ReactionContent>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<ReactionOrder>
}

/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type IssueTimelineArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  since?: Maybe<Scalars["DateTime"]>
}

/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type IssueTimelineItemsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  itemTypes?: Maybe<Array<IssueTimelineItemsItemType>>
  last?: Maybe<Scalars["Int"]>
  since?: Maybe<Scalars["DateTime"]>
  skip?: Maybe<Scalars["Int"]>
}

/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
export type IssueUserContentEditsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** Represents a comment on an Issue. */
export type IssueComment = Comment &
  Deletable &
  Minimizable &
  Node &
  Reactable &
  RepositoryNode &
  Updatable &
  UpdatableComment & {
    __typename?: "IssueComment"
    /** The actor who authored the comment. */
    author?: Maybe<Actor>
    /** Author's association with the subject of the comment. */
    authorAssociation: CommentAuthorAssociation
    /** The body as Markdown. */
    body: Scalars["String"]
    /** The body rendered to HTML. */
    bodyHTML: Scalars["HTML"]
    /** The body rendered to text. */
    bodyText: Scalars["String"]
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["DateTime"]
    /** Check if this comment was created via an email reply. */
    createdViaEmail: Scalars["Boolean"]
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>
    /** The actor who edited the comment. */
    editor?: Maybe<Actor>
    id: Scalars["ID"]
    /** Check if this comment was edited and includes an edit with the creation data */
    includesCreatedEdit: Scalars["Boolean"]
    /** Returns whether or not a comment has been minimized. */
    isMinimized: Scalars["Boolean"]
    /** Identifies the issue associated with the comment. */
    issue: Issue
    /** The moment the editor made the last edit */
    lastEditedAt?: Maybe<Scalars["DateTime"]>
    /** Returns why the comment was minimized. */
    minimizedReason?: Maybe<Scalars["String"]>
    /** Identifies when the comment was published at. */
    publishedAt?: Maybe<Scalars["DateTime"]>
    /**
     * Returns the pull request associated with the comment, if this comment was made on a
     * pull request.
     */
    pullRequest?: Maybe<PullRequest>
    /** A list of reactions grouped by content left on the subject. */
    reactionGroups?: Maybe<Array<ReactionGroup>>
    /** A list of Reactions left on the Issue. */
    reactions: ReactionConnection
    /** The repository associated with this node. */
    repository: Repository
    /** The HTTP path for this issue comment */
    resourcePath: Scalars["URI"]
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["DateTime"]
    /** The HTTP URL for this issue comment */
    url: Scalars["URI"]
    /** A list of edits to this content. */
    userContentEdits?: Maybe<UserContentEditConnection>
    /** Check if the current viewer can delete this object. */
    viewerCanDelete: Scalars["Boolean"]
    /** Check if the current viewer can minimize this object. */
    viewerCanMinimize: Scalars["Boolean"]
    /** Can user react to this subject */
    viewerCanReact: Scalars["Boolean"]
    /** Check if the current viewer can update this object. */
    viewerCanUpdate: Scalars["Boolean"]
    /** Reasons why the current viewer can not update this comment. */
    viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>
    /** Did the viewer author this comment. */
    viewerDidAuthor: Scalars["Boolean"]
  }

/** Represents a comment on an Issue. */
export type IssueCommentReactionsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  content?: Maybe<ReactionContent>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<ReactionOrder>
}

/** Represents a comment on an Issue. */
export type IssueCommentUserContentEditsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** The connection type for IssueComment. */
export type IssueCommentConnection = {
  __typename?: "IssueCommentConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<IssueCommentEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<IssueComment>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type IssueCommentEdge = {
  __typename?: "IssueCommentEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<IssueComment>
}

/** The connection type for Issue. */
export type IssueConnection = {
  __typename?: "IssueConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<IssueEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Issue>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** This aggregates issues opened by a user within one repository. */
export type IssueContributionsByRepository = {
  __typename?: "IssueContributionsByRepository"
  /** The issue contributions. */
  contributions: CreatedIssueContributionConnection
  /** The repository in which the issues were opened. */
  repository: Repository
}

/** This aggregates issues opened by a user within one repository. */
export type IssueContributionsByRepositoryContributionsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<ContributionOrder>
}

/** An edge in a connection. */
export type IssueEdge = {
  __typename?: "IssueEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<Issue>
}

/** Ways in which to filter lists of issues. */
export type IssueFilters = {
  /**
   * List issues assigned to given name. Pass in `null` for issues with no assigned
   * user, and `*` for issues assigned to any user.
   */
  assignee?: Maybe<Scalars["String"]>
  /** List issues created by given name. */
  createdBy?: Maybe<Scalars["String"]>
  /** List issues where the list of label names exist on the issue. */
  labels?: Maybe<Array<Scalars["String"]>>
  /** List issues where the given name is mentioned in the issue. */
  mentioned?: Maybe<Scalars["String"]>
  /**
   * List issues by given milestone argument. If an string representation of an
   * integer is passed, it should refer to a milestone by its number field. Pass in
   * `null` for issues with no milestone, and `*` for issues that are assigned to any milestone.
   */
  milestone?: Maybe<Scalars["String"]>
  /** List issues that have been updated at or after the given date. */
  since?: Maybe<Scalars["DateTime"]>
  /** List issues filtered by the list of states given. */
  states?: Maybe<Array<IssueState>>
  /** List issues subscribed to by viewer. */
  viewerSubscribed?: Maybe<Scalars["Boolean"]>
}

/** Used for return value of Repository.issueOrPullRequest. */
export type IssueOrPullRequest = Issue | PullRequest

/** Ways in which lists of issues can be ordered upon return. */
export type IssueOrder = {
  /** The direction in which to order issues by the specified field. */
  direction: OrderDirection
  /** The field in which to order issues by. */
  field: IssueOrderField
}

/** Properties by which issue connections can be ordered. */
export enum IssueOrderField {
  /** Order issues by comment count */
  Comments = "COMMENTS",
  /** Order issues by creation time */
  CreatedAt = "CREATED_AT",
  /** Order issues by update time */
  UpdatedAt = "UPDATED_AT",
}

/** The possible states of an issue. */
export enum IssueState {
  /** An issue that has been closed */
  Closed = "CLOSED",
  /** An issue that is still open */
  Open = "OPEN",
}

/** A repository issue template. */
export type IssueTemplate = {
  __typename?: "IssueTemplate"
  /** The template purpose. */
  about?: Maybe<Scalars["String"]>
  /** The suggested issue body. */
  body?: Maybe<Scalars["String"]>
  /** The template name. */
  name: Scalars["String"]
  /** The suggested issue title. */
  title?: Maybe<Scalars["String"]>
}

/** The connection type for IssueTimelineItem. */
export type IssueTimelineConnection = {
  __typename?: "IssueTimelineConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<IssueTimelineItemEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<IssueTimelineItem>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An item in an issue timeline */
export type IssueTimelineItem =
  | AssignedEvent
  | ClosedEvent
  | Commit
  | CrossReferencedEvent
  | DemilestonedEvent
  | IssueComment
  | LabeledEvent
  | LockedEvent
  | MilestonedEvent
  | ReferencedEvent
  | RenamedTitleEvent
  | ReopenedEvent
  | SubscribedEvent
  | TransferredEvent
  | UnassignedEvent
  | UnlabeledEvent
  | UnlockedEvent
  | UnsubscribedEvent
  | UserBlockedEvent

/** An edge in a connection. */
export type IssueTimelineItemEdge = {
  __typename?: "IssueTimelineItemEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<IssueTimelineItem>
}

/** An item in an issue timeline */
export type IssueTimelineItems =
  | AddedToProjectEvent
  | AssignedEvent
  | ClosedEvent
  | CommentDeletedEvent
  | ConnectedEvent
  | ConvertedNoteToIssueEvent
  | CrossReferencedEvent
  | DemilestonedEvent
  | DisconnectedEvent
  | IssueComment
  | LabeledEvent
  | LockedEvent
  | MarkedAsDuplicateEvent
  | MentionedEvent
  | MilestonedEvent
  | MovedColumnsInProjectEvent
  | PinnedEvent
  | ReferencedEvent
  | RemovedFromProjectEvent
  | RenamedTitleEvent
  | ReopenedEvent
  | SubscribedEvent
  | TransferredEvent
  | UnassignedEvent
  | UnlabeledEvent
  | UnlockedEvent
  | UnmarkedAsDuplicateEvent
  | UnpinnedEvent
  | UnsubscribedEvent
  | UserBlockedEvent

/** The connection type for IssueTimelineItems. */
export type IssueTimelineItemsConnection = {
  __typename?: "IssueTimelineItemsConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<IssueTimelineItemsEdge>>>
  /** Identifies the count of items after applying `before` and `after` filters. */
  filteredCount: Scalars["Int"]
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<IssueTimelineItems>>>
  /** Identifies the count of items after applying `before`/`after` filters and `first`/`last`/`skip` slicing. */
  pageCount: Scalars["Int"]
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
  /** Identifies the date and time when the timeline was last updated. */
  updatedAt: Scalars["DateTime"]
}

/** An edge in a connection. */
export type IssueTimelineItemsEdge = {
  __typename?: "IssueTimelineItemsEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<IssueTimelineItems>
}

/** The possible item types found in a timeline. */
export enum IssueTimelineItemsItemType {
  /** Represents a 'added_to_project' event on a given issue or pull request. */
  AddedToProjectEvent = "ADDED_TO_PROJECT_EVENT",
  /** Represents an 'assigned' event on any assignable object. */
  AssignedEvent = "ASSIGNED_EVENT",
  /** Represents a 'closed' event on any `Closable`. */
  ClosedEvent = "CLOSED_EVENT",
  /** Represents a 'comment_deleted' event on a given issue or pull request. */
  CommentDeletedEvent = "COMMENT_DELETED_EVENT",
  /** Represents a 'connected' event on a given issue or pull request. */
  ConnectedEvent = "CONNECTED_EVENT",
  /** Represents a 'converted_note_to_issue' event on a given issue or pull request. */
  ConvertedNoteToIssueEvent = "CONVERTED_NOTE_TO_ISSUE_EVENT",
  /** Represents a mention made by one issue or pull request to another. */
  CrossReferencedEvent = "CROSS_REFERENCED_EVENT",
  /** Represents a 'demilestoned' event on a given issue or pull request. */
  DemilestonedEvent = "DEMILESTONED_EVENT",
  /** Represents a 'disconnected' event on a given issue or pull request. */
  DisconnectedEvent = "DISCONNECTED_EVENT",
  /** Represents a comment on an Issue. */
  IssueComment = "ISSUE_COMMENT",
  /** Represents a 'labeled' event on a given issue or pull request. */
  LabeledEvent = "LABELED_EVENT",
  /** Represents a 'locked' event on a given issue or pull request. */
  LockedEvent = "LOCKED_EVENT",
  /** Represents a 'marked_as_duplicate' event on a given issue or pull request. */
  MarkedAsDuplicateEvent = "MARKED_AS_DUPLICATE_EVENT",
  /** Represents a 'mentioned' event on a given issue or pull request. */
  MentionedEvent = "MENTIONED_EVENT",
  /** Represents a 'milestoned' event on a given issue or pull request. */
  MilestonedEvent = "MILESTONED_EVENT",
  /** Represents a 'moved_columns_in_project' event on a given issue or pull request. */
  MovedColumnsInProjectEvent = "MOVED_COLUMNS_IN_PROJECT_EVENT",
  /** Represents a 'pinned' event on a given issue or pull request. */
  PinnedEvent = "PINNED_EVENT",
  /** Represents a 'referenced' event on a given `ReferencedSubject`. */
  ReferencedEvent = "REFERENCED_EVENT",
  /** Represents a 'removed_from_project' event on a given issue or pull request. */
  RemovedFromProjectEvent = "REMOVED_FROM_PROJECT_EVENT",
  /** Represents a 'renamed' event on a given issue or pull request */
  RenamedTitleEvent = "RENAMED_TITLE_EVENT",
  /** Represents a 'reopened' event on any `Closable`. */
  ReopenedEvent = "REOPENED_EVENT",
  /** Represents a 'subscribed' event on a given `Subscribable`. */
  SubscribedEvent = "SUBSCRIBED_EVENT",
  /** Represents a 'transferred' event on a given issue or pull request. */
  TransferredEvent = "TRANSFERRED_EVENT",
  /** Represents an 'unassigned' event on any assignable object. */
  UnassignedEvent = "UNASSIGNED_EVENT",
  /** Represents an 'unlabeled' event on a given issue or pull request. */
  UnlabeledEvent = "UNLABELED_EVENT",
  /** Represents an 'unlocked' event on a given issue or pull request. */
  UnlockedEvent = "UNLOCKED_EVENT",
  /** Represents an 'unmarked_as_duplicate' event on a given issue or pull request. */
  UnmarkedAsDuplicateEvent = "UNMARKED_AS_DUPLICATE_EVENT",
  /** Represents an 'unpinned' event on a given issue or pull request. */
  UnpinnedEvent = "UNPINNED_EVENT",
  /** Represents an 'unsubscribed' event on a given `Subscribable`. */
  UnsubscribedEvent = "UNSUBSCRIBED_EVENT",
  /** Represents a 'user_blocked' event on a given user. */
  UserBlockedEvent = "USER_BLOCKED_EVENT",
}

/** Represents a user signing up for a GitHub account. */
export type JoinedGitHubContribution = Contribution & {
  __typename?: "JoinedGitHubContribution"
  /**
   * Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  isRestricted: Scalars["Boolean"]
  /** When this contribution was made. */
  occurredAt: Scalars["DateTime"]
  /** The HTTP path for this contribution. */
  resourcePath: Scalars["URI"]
  /** The HTTP URL for this contribution. */
  url: Scalars["URI"]
  /** The user who made this contribution. */
  user: User
}

/** A label for categorizing Issues or Milestones with a given Repository. */
export type Label = Node & {
  __typename?: "Label"
  /** Identifies the label color. */
  color: Scalars["String"]
  /** Identifies the date and time when the label was created. */
  createdAt?: Maybe<Scalars["DateTime"]>
  /** A brief description of this label. */
  description?: Maybe<Scalars["String"]>
  id: Scalars["ID"]
  /** Indicates whether or not this is a default label. */
  isDefault: Scalars["Boolean"]
  /** A list of issues associated with this label. */
  issues: IssueConnection
  /** Identifies the label name. */
  name: Scalars["String"]
  /** A list of pull requests associated with this label. */
  pullRequests: PullRequestConnection
  /** The repository associated with this label. */
  repository: Repository
  /** The HTTP path for this label. */
  resourcePath: Scalars["URI"]
  /** Identifies the date and time when the label was last updated. */
  updatedAt?: Maybe<Scalars["DateTime"]>
  /** The HTTP URL for this label. */
  url: Scalars["URI"]
}

/** A label for categorizing Issues or Milestones with a given Repository. */
export type LabelIssuesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  filterBy?: Maybe<IssueFilters>
  first?: Maybe<Scalars["Int"]>
  labels?: Maybe<Array<Scalars["String"]>>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<IssueOrder>
  states?: Maybe<Array<IssueState>>
}

/** A label for categorizing Issues or Milestones with a given Repository. */
export type LabelPullRequestsArgs = {
  after?: Maybe<Scalars["String"]>
  baseRefName?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  headRefName?: Maybe<Scalars["String"]>
  labels?: Maybe<Array<Scalars["String"]>>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<IssueOrder>
  states?: Maybe<Array<PullRequestState>>
}

/** The connection type for Label. */
export type LabelConnection = {
  __typename?: "LabelConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<LabelEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Label>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type LabelEdge = {
  __typename?: "LabelEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<Label>
}

/** Ways in which lists of labels can be ordered upon return. */
export type LabelOrder = {
  /** The direction in which to order labels by the specified field. */
  direction: OrderDirection
  /** The field in which to order labels by. */
  field: LabelOrderField
}

/** Properties by which label connections can be ordered. */
export enum LabelOrderField {
  /** Order labels by creation time */
  CreatedAt = "CREATED_AT",
  /** Order labels by name  */
  Name = "NAME",
}

/** An object that can have labels assigned to it. */
export type Labelable = {
  /** A list of labels associated with the object. */
  labels?: Maybe<LabelConnection>
}

/** An object that can have labels assigned to it. */
export type LabelableLabelsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<LabelOrder>
}

/** Represents a 'labeled' event on a given issue or pull request. */
export type LabeledEvent = Node & {
  __typename?: "LabeledEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  id: Scalars["ID"]
  /** Identifies the label associated with the 'labeled' event. */
  label: Label
  /** Identifies the `Labelable` associated with the event. */
  labelable: Labelable
}

/** Represents a given language found in repositories. */
export type Language = Node & {
  __typename?: "Language"
  /** The color defined for the current language. */
  color?: Maybe<Scalars["String"]>
  id: Scalars["ID"]
  /** The name of the current language. */
  name: Scalars["String"]
}

/** A list of languages associated with the parent. */
export type LanguageConnection = {
  __typename?: "LanguageConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<LanguageEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Language>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
  /** The total size in bytes of files written in that language. */
  totalSize: Scalars["Int"]
}

/** Represents the language of a repository. */
export type LanguageEdge = {
  __typename?: "LanguageEdge"
  cursor: Scalars["String"]
  node: Language
  /** The number of bytes of code written in the language. */
  size: Scalars["Int"]
}

/** Ordering options for language connections. */
export type LanguageOrder = {
  /** The ordering direction. */
  direction: OrderDirection
  /** The field to order languages by. */
  field: LanguageOrderField
}

/** Properties by which language connections can be ordered. */
export enum LanguageOrderField {
  /** Order languages by the size of all files containing the language */
  Size = "SIZE",
}

/** A repository's open source license */
export type License = Node & {
  __typename?: "License"
  /** The full text of the license */
  body: Scalars["String"]
  /** The conditions set by the license */
  conditions: Array<Maybe<LicenseRule>>
  /** A human-readable description of the license */
  description?: Maybe<Scalars["String"]>
  /** Whether the license should be featured */
  featured: Scalars["Boolean"]
  /** Whether the license should be displayed in license pickers */
  hidden: Scalars["Boolean"]
  id: Scalars["ID"]
  /** Instructions on how to implement the license */
  implementation?: Maybe<Scalars["String"]>
  /** The lowercased SPDX ID of the license */
  key: Scalars["String"]
  /** The limitations set by the license */
  limitations: Array<Maybe<LicenseRule>>
  /** The license full name specified by <https://spdx.org/licenses> */
  name: Scalars["String"]
  /** Customary short name if applicable (e.g, GPLv3) */
  nickname?: Maybe<Scalars["String"]>
  /** The permissions set by the license */
  permissions: Array<Maybe<LicenseRule>>
  /** Whether the license is a pseudo-license placeholder (e.g., other, no-license) */
  pseudoLicense: Scalars["Boolean"]
  /** Short identifier specified by <https://spdx.org/licenses> */
  spdxId?: Maybe<Scalars["String"]>
  /** URL to the license on <https://choosealicense.com> */
  url?: Maybe<Scalars["URI"]>
}

/** Describes a License's conditions, permissions, and limitations */
export type LicenseRule = {
  __typename?: "LicenseRule"
  /** A description of the rule */
  description: Scalars["String"]
  /** The machine-readable rule key */
  key: Scalars["String"]
  /** The human-readable rule label */
  label: Scalars["String"]
}

/** Autogenerated input type of LinkRepositoryToProject */
export type LinkRepositoryToProjectInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ID of the Project to link to a Repository */
  projectId: Scalars["ID"]
  /** The ID of the Repository to link to a Project. */
  repositoryId: Scalars["ID"]
}

/** Autogenerated return type of LinkRepositoryToProject */
export type LinkRepositoryToProjectPayload = {
  __typename?: "LinkRepositoryToProjectPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The linked Project. */
  project?: Maybe<Project>
  /** The linked Repository. */
  repository?: Maybe<Repository>
}

/** Autogenerated input type of LockLockable */
export type LockLockableInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** A reason for why the issue or pull request will be locked. */
  lockReason?: Maybe<LockReason>
  /** ID of the issue or pull request to be locked. */
  lockableId: Scalars["ID"]
}

/** Autogenerated return type of LockLockable */
export type LockLockablePayload = {
  __typename?: "LockLockablePayload"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The item that was locked. */
  lockedRecord?: Maybe<Lockable>
}

/** The possible reasons that an issue or pull request was locked. */
export enum LockReason {
  /** The issue or pull request was locked because the conversation was off-topic. */
  OffTopic = "OFF_TOPIC",
  /** The issue or pull request was locked because the conversation was resolved. */
  Resolved = "RESOLVED",
  /** The issue or pull request was locked because the conversation was spam. */
  Spam = "SPAM",
  /** The issue or pull request was locked because the conversation was too heated. */
  TooHeated = "TOO_HEATED",
}

/** An object that can be locked. */
export type Lockable = {
  /** Reason that the conversation was locked. */
  activeLockReason?: Maybe<LockReason>
  /** `true` if the object is locked */
  locked: Scalars["Boolean"]
}

/** Represents a 'locked' event on a given issue or pull request. */
export type LockedEvent = Node & {
  __typename?: "LockedEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  id: Scalars["ID"]
  /** Reason that the conversation was locked (optional). */
  lockReason?: Maybe<LockReason>
  /** Object that was locked. */
  lockable: Lockable
}

/** A placeholder user for attribution of imported data on GitHub. */
export type Mannequin = Actor &
  Node &
  UniformResourceLocatable & {
    __typename?: "Mannequin"
    /** A URL pointing to the GitHub App's public avatar. */
    avatarUrl: Scalars["URI"]
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["DateTime"]
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>
    /** The mannequin's email on the source instance. */
    email?: Maybe<Scalars["String"]>
    id: Scalars["ID"]
    /** The username of the actor. */
    login: Scalars["String"]
    /** The HTML path to this resource. */
    resourcePath: Scalars["URI"]
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["DateTime"]
    /** The URL to this resource. */
    url: Scalars["URI"]
  }

/** A placeholder user for attribution of imported data on GitHub. */
export type MannequinAvatarUrlArgs = {
  size?: Maybe<Scalars["Int"]>
}

/** Autogenerated input type of MarkFileAsViewed */
export type MarkFileAsViewedInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The path of the file to mark as viewed */
  path: Scalars["String"]
  /** The Node ID of the pull request. */
  pullRequestId: Scalars["ID"]
}

/** Autogenerated return type of MarkFileAsViewed */
export type MarkFileAsViewedPayload = {
  __typename?: "MarkFileAsViewedPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The updated pull request. */
  pullRequest?: Maybe<PullRequest>
}

/** Autogenerated input type of MarkPullRequestReadyForReview */
export type MarkPullRequestReadyForReviewInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** ID of the pull request to be marked as ready for review. */
  pullRequestId: Scalars["ID"]
}

/** Autogenerated return type of MarkPullRequestReadyForReview */
export type MarkPullRequestReadyForReviewPayload = {
  __typename?: "MarkPullRequestReadyForReviewPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The pull request that is ready for review. */
  pullRequest?: Maybe<PullRequest>
}

/** Represents a 'marked_as_duplicate' event on a given issue or pull request. */
export type MarkedAsDuplicateEvent = Node & {
  __typename?: "MarkedAsDuplicateEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** The authoritative issue or pull request which has been duplicated by another. */
  canonical?: Maybe<IssueOrPullRequest>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  /** The issue or pull request which has been marked as a duplicate of another. */
  duplicate?: Maybe<IssueOrPullRequest>
  id: Scalars["ID"]
  /** Canonical and duplicate belong to different repositories. */
  isCrossRepository: Scalars["Boolean"]
}

/** A public description of a Marketplace category. */
export type MarketplaceCategory = Node & {
  __typename?: "MarketplaceCategory"
  /** The category's description. */
  description?: Maybe<Scalars["String"]>
  /** The technical description of how apps listed in this category work with GitHub. */
  howItWorks?: Maybe<Scalars["String"]>
  id: Scalars["ID"]
  /** The category's name. */
  name: Scalars["String"]
  /** How many Marketplace listings have this as their primary category. */
  primaryListingCount: Scalars["Int"]
  /** The HTTP path for this Marketplace category. */
  resourcePath: Scalars["URI"]
  /** How many Marketplace listings have this as their secondary category. */
  secondaryListingCount: Scalars["Int"]
  /** The short name of the category used in its URL. */
  slug: Scalars["String"]
  /** The HTTP URL for this Marketplace category. */
  url: Scalars["URI"]
}

/** A listing in the GitHub integration marketplace. */
export type MarketplaceListing = Node & {
  __typename?: "MarketplaceListing"
  /** The GitHub App this listing represents. */
  app?: Maybe<App>
  /** URL to the listing owner's company site. */
  companyUrl?: Maybe<Scalars["URI"]>
  /** The HTTP path for configuring access to the listing's integration or OAuth app */
  configurationResourcePath: Scalars["URI"]
  /** The HTTP URL for configuring access to the listing's integration or OAuth app */
  configurationUrl: Scalars["URI"]
  /** URL to the listing's documentation. */
  documentationUrl?: Maybe<Scalars["URI"]>
  /** The listing's detailed description. */
  extendedDescription?: Maybe<Scalars["String"]>
  /** The listing's detailed description rendered to HTML. */
  extendedDescriptionHTML: Scalars["HTML"]
  /** The listing's introductory description. */
  fullDescription: Scalars["String"]
  /** The listing's introductory description rendered to HTML. */
  fullDescriptionHTML: Scalars["HTML"]
  /** Does this listing have any plans with a free trial? */
  hasPublishedFreeTrialPlans: Scalars["Boolean"]
  /** Does this listing have a terms of service link? */
  hasTermsOfService: Scalars["Boolean"]
  /** A technical description of how this app works with GitHub. */
  howItWorks?: Maybe<Scalars["String"]>
  /** The listing's technical description rendered to HTML. */
  howItWorksHTML: Scalars["HTML"]
  id: Scalars["ID"]
  /** URL to install the product to the viewer's account or organization. */
  installationUrl?: Maybe<Scalars["URI"]>
  /** Whether this listing's app has been installed for the current viewer */
  installedForViewer: Scalars["Boolean"]
  /** Whether this listing has been removed from the Marketplace. */
  isArchived: Scalars["Boolean"]
  /**
   * Whether this listing is still an editable draft that has not been submitted
   * for review and is not publicly visible in the Marketplace.
   */
  isDraft: Scalars["Boolean"]
  /** Whether the product this listing represents is available as part of a paid plan. */
  isPaid: Scalars["Boolean"]
  /** Whether this listing has been approved for display in the Marketplace. */
  isPublic: Scalars["Boolean"]
  /** Whether this listing has been rejected by GitHub for display in the Marketplace. */
  isRejected: Scalars["Boolean"]
  /** Whether this listing has been approved for unverified display in the Marketplace. */
  isUnverified: Scalars["Boolean"]
  /** Whether this draft listing has been submitted for review for approval to be unverified in the Marketplace. */
  isUnverifiedPending: Scalars["Boolean"]
  /** Whether this draft listing has been submitted for review from GitHub for approval to be verified in the Marketplace. */
  isVerificationPendingFromDraft: Scalars["Boolean"]
  /** Whether this unverified listing has been submitted for review from GitHub for approval to be verified in the Marketplace. */
  isVerificationPendingFromUnverified: Scalars["Boolean"]
  /** Whether this listing has been approved for verified display in the Marketplace. */
  isVerified: Scalars["Boolean"]
  /** The hex color code, without the leading '#', for the logo background. */
  logoBackgroundColor: Scalars["String"]
  /** URL for the listing's logo image. */
  logoUrl?: Maybe<Scalars["URI"]>
  /** The listing's full name. */
  name: Scalars["String"]
  /** The listing's very short description without a trailing period or ampersands. */
  normalizedShortDescription: Scalars["String"]
  /** URL to the listing's detailed pricing. */
  pricingUrl?: Maybe<Scalars["URI"]>
  /** The category that best describes the listing. */
  primaryCategory: MarketplaceCategory
  /** URL to the listing's privacy policy, may return an empty string for listings that do not require a privacy policy URL. */
  privacyPolicyUrl: Scalars["URI"]
  /** The HTTP path for the Marketplace listing. */
  resourcePath: Scalars["URI"]
  /** The URLs for the listing's screenshots. */
  screenshotUrls: Array<Maybe<Scalars["String"]>>
  /** An alternate category that describes the listing. */
  secondaryCategory?: Maybe<MarketplaceCategory>
  /** The listing's very short description. */
  shortDescription: Scalars["String"]
  /** The short name of the listing used in its URL. */
  slug: Scalars["String"]
  /** URL to the listing's status page. */
  statusUrl?: Maybe<Scalars["URI"]>
  /** An email address for support for this listing's app. */
  supportEmail?: Maybe<Scalars["String"]>
  /**
   * Either a URL or an email address for support for this listing's app, may
   * return an empty string for listings that do not require a support URL.
   */
  supportUrl: Scalars["URI"]
  /** URL to the listing's terms of service. */
  termsOfServiceUrl?: Maybe<Scalars["URI"]>
  /** The HTTP URL for the Marketplace listing. */
  url: Scalars["URI"]
  /** Can the current viewer add plans for this Marketplace listing. */
  viewerCanAddPlans: Scalars["Boolean"]
  /** Can the current viewer approve this Marketplace listing. */
  viewerCanApprove: Scalars["Boolean"]
  /** Can the current viewer delist this Marketplace listing. */
  viewerCanDelist: Scalars["Boolean"]
  /** Can the current viewer edit this Marketplace listing. */
  viewerCanEdit: Scalars["Boolean"]
  /**
   * Can the current viewer edit the primary and secondary category of this
   * Marketplace listing.
   */
  viewerCanEditCategories: Scalars["Boolean"]
  /** Can the current viewer edit the plans for this Marketplace listing. */
  viewerCanEditPlans: Scalars["Boolean"]
  /**
   * Can the current viewer return this Marketplace listing to draft state
   * so it becomes editable again.
   */
  viewerCanRedraft: Scalars["Boolean"]
  /**
   * Can the current viewer reject this Marketplace listing by returning it to
   * an editable draft state or rejecting it entirely.
   */
  viewerCanReject: Scalars["Boolean"]
  /**
   * Can the current viewer request this listing be reviewed for display in
   * the Marketplace as verified.
   */
  viewerCanRequestApproval: Scalars["Boolean"]
  /** Indicates whether the current user has an active subscription to this Marketplace listing. */
  viewerHasPurchased: Scalars["Boolean"]
  /**
   * Indicates if the current user has purchased a subscription to this Marketplace listing
   * for all of the organizations the user owns.
   */
  viewerHasPurchasedForAllOrganizations: Scalars["Boolean"]
  /** Does the current viewer role allow them to administer this Marketplace listing. */
  viewerIsListingAdmin: Scalars["Boolean"]
}

/** A listing in the GitHub integration marketplace. */
export type MarketplaceListingLogoUrlArgs = {
  size?: Maybe<Scalars["Int"]>
}

/** Look up Marketplace Listings */
export type MarketplaceListingConnection = {
  __typename?: "MarketplaceListingConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<MarketplaceListingEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<MarketplaceListing>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type MarketplaceListingEdge = {
  __typename?: "MarketplaceListingEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<MarketplaceListing>
}

/** Entities that have members who can set status messages. */
export type MemberStatusable = {
  /** Get the status messages members of this entity have set that are either public or visible only to the organization. */
  memberStatuses: UserStatusConnection
}

/** Entities that have members who can set status messages. */
export type MemberStatusableMemberStatusesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<UserStatusOrder>
}

/** Audit log entry for a members_can_delete_repos.clear event. */
export type MembersCanDeleteReposClearAuditEntry = AuditEntry &
  EnterpriseAuditEntryData &
  Node &
  OrganizationAuditEntryData & {
    __typename?: "MembersCanDeleteReposClearAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    /** The HTTP path for this enterprise. */
    enterpriseResourcePath?: Maybe<Scalars["URI"]>
    /** The slug of the enterprise. */
    enterpriseSlug?: Maybe<Scalars["String"]>
    /** The HTTP URL for this enterprise. */
    enterpriseUrl?: Maybe<Scalars["URI"]>
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** Audit log entry for a members_can_delete_repos.disable event. */
export type MembersCanDeleteReposDisableAuditEntry = AuditEntry &
  EnterpriseAuditEntryData &
  Node &
  OrganizationAuditEntryData & {
    __typename?: "MembersCanDeleteReposDisableAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    /** The HTTP path for this enterprise. */
    enterpriseResourcePath?: Maybe<Scalars["URI"]>
    /** The slug of the enterprise. */
    enterpriseSlug?: Maybe<Scalars["String"]>
    /** The HTTP URL for this enterprise. */
    enterpriseUrl?: Maybe<Scalars["URI"]>
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** Audit log entry for a members_can_delete_repos.enable event. */
export type MembersCanDeleteReposEnableAuditEntry = AuditEntry &
  EnterpriseAuditEntryData &
  Node &
  OrganizationAuditEntryData & {
    __typename?: "MembersCanDeleteReposEnableAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    /** The HTTP path for this enterprise. */
    enterpriseResourcePath?: Maybe<Scalars["URI"]>
    /** The slug of the enterprise. */
    enterpriseSlug?: Maybe<Scalars["String"]>
    /** The HTTP URL for this enterprise. */
    enterpriseUrl?: Maybe<Scalars["URI"]>
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** Represents a 'mentioned' event on a given issue or pull request. */
export type MentionedEvent = Node & {
  __typename?: "MentionedEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>
  id: Scalars["ID"]
}

/** Autogenerated input type of MergeBranch */
export type MergeBranchInput = {
  /** The email address to associate with this commit. */
  authorEmail?: Maybe<Scalars["String"]>
  /** The name of the base branch that the provided head will be merged into. */
  base: Scalars["String"]
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** Message to use for the merge commit. If omitted, a default will be used. */
  commitMessage?: Maybe<Scalars["String"]>
  /** The head to merge into the base branch. This can be a branch name or a commit GitObjectID. */
  head: Scalars["String"]
  /** The Node ID of the Repository containing the base branch that will be modified. */
  repositoryId: Scalars["ID"]
}

/** Autogenerated return type of MergeBranch */
export type MergeBranchPayload = {
  __typename?: "MergeBranchPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The resulting merge Commit. */
  mergeCommit?: Maybe<Commit>
}

/** Autogenerated input type of MergePullRequest */
export type MergePullRequestInput = {
  /** The email address to associate with this merge. */
  authorEmail?: Maybe<Scalars["String"]>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** Commit body to use for the merge commit; if omitted, a default message will be used */
  commitBody?: Maybe<Scalars["String"]>
  /** Commit headline to use for the merge commit; if omitted, a default message will be used. */
  commitHeadline?: Maybe<Scalars["String"]>
  /** OID that the pull request head ref must match to allow merge; if omitted, no check is performed. */
  expectedHeadOid?: Maybe<Scalars["GitObjectID"]>
  /** The merge method to use. If omitted, defaults to 'MERGE' */
  mergeMethod?: Maybe<PullRequestMergeMethod>
  /** ID of the pull request to be merged. */
  pullRequestId: Scalars["ID"]
}

/** Autogenerated return type of MergePullRequest */
export type MergePullRequestPayload = {
  __typename?: "MergePullRequestPayload"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The pull request that was merged. */
  pullRequest?: Maybe<PullRequest>
}

/** Whether or not a PullRequest can be merged. */
export enum MergeableState {
  /** The pull request cannot be merged due to merge conflicts. */
  Conflicting = "CONFLICTING",
  /** The pull request can be merged. */
  Mergeable = "MERGEABLE",
  /** The mergeability of the pull request is still being calculated. */
  Unknown = "UNKNOWN",
}

/** Represents a 'merged' event on a given pull request. */
export type MergedEvent = Node &
  UniformResourceLocatable & {
    __typename?: "MergedEvent"
    /** Identifies the actor who performed the event. */
    actor?: Maybe<Actor>
    /** Identifies the commit associated with the `merge` event. */
    commit?: Maybe<Commit>
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["DateTime"]
    id: Scalars["ID"]
    /** Identifies the Ref associated with the `merge` event. */
    mergeRef?: Maybe<Ref>
    /** Identifies the name of the Ref associated with the `merge` event. */
    mergeRefName: Scalars["String"]
    /** PullRequest referenced by event. */
    pullRequest: PullRequest
    /** The HTTP path for this merged event. */
    resourcePath: Scalars["URI"]
    /** The HTTP URL for this merged event. */
    url: Scalars["URI"]
  }

/** Represents a Milestone object on a given repository. */
export type Milestone = Closable &
  Node &
  UniformResourceLocatable & {
    __typename?: "Milestone"
    /** `true` if the object is closed (definition of closed may depend on type) */
    closed: Scalars["Boolean"]
    /** Identifies the date and time when the object was closed. */
    closedAt?: Maybe<Scalars["DateTime"]>
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["DateTime"]
    /** Identifies the actor who created the milestone. */
    creator?: Maybe<Actor>
    /** Identifies the description of the milestone. */
    description?: Maybe<Scalars["String"]>
    /** Identifies the due date of the milestone. */
    dueOn?: Maybe<Scalars["DateTime"]>
    id: Scalars["ID"]
    /** A list of issues associated with the milestone. */
    issues: IssueConnection
    /** Identifies the number of the milestone. */
    number: Scalars["Int"]
    /** Indentifies the percentage complete for the milestone */
    progressPercentage: Scalars["Float"]
    /** A list of pull requests associated with the milestone. */
    pullRequests: PullRequestConnection
    /** The repository associated with this milestone. */
    repository: Repository
    /** The HTTP path for this milestone */
    resourcePath: Scalars["URI"]
    /** Identifies the state of the milestone. */
    state: MilestoneState
    /** Identifies the title of the milestone. */
    title: Scalars["String"]
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["DateTime"]
    /** The HTTP URL for this milestone */
    url: Scalars["URI"]
  }

/** Represents a Milestone object on a given repository. */
export type MilestoneIssuesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  filterBy?: Maybe<IssueFilters>
  first?: Maybe<Scalars["Int"]>
  labels?: Maybe<Array<Scalars["String"]>>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<IssueOrder>
  states?: Maybe<Array<IssueState>>
}

/** Represents a Milestone object on a given repository. */
export type MilestonePullRequestsArgs = {
  after?: Maybe<Scalars["String"]>
  baseRefName?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  headRefName?: Maybe<Scalars["String"]>
  labels?: Maybe<Array<Scalars["String"]>>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<IssueOrder>
  states?: Maybe<Array<PullRequestState>>
}

/** The connection type for Milestone. */
export type MilestoneConnection = {
  __typename?: "MilestoneConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<MilestoneEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Milestone>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type MilestoneEdge = {
  __typename?: "MilestoneEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<Milestone>
}

/** Types that can be inside a Milestone. */
export type MilestoneItem = Issue | PullRequest

/** Ordering options for milestone connections. */
export type MilestoneOrder = {
  /** The ordering direction. */
  direction: OrderDirection
  /** The field to order milestones by. */
  field: MilestoneOrderField
}

/** Properties by which milestone connections can be ordered. */
export enum MilestoneOrderField {
  /** Order milestones by when they were created. */
  CreatedAt = "CREATED_AT",
  /** Order milestones by when they are due. */
  DueDate = "DUE_DATE",
  /** Order milestones by their number. */
  Number = "NUMBER",
  /** Order milestones by when they were last updated. */
  UpdatedAt = "UPDATED_AT",
}

/** The possible states of a milestone. */
export enum MilestoneState {
  /** A milestone that has been closed. */
  Closed = "CLOSED",
  /** A milestone that is still open. */
  Open = "OPEN",
}

/** Represents a 'milestoned' event on a given issue or pull request. */
export type MilestonedEvent = Node & {
  __typename?: "MilestonedEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  id: Scalars["ID"]
  /** Identifies the milestone title associated with the 'milestoned' event. */
  milestoneTitle: Scalars["String"]
  /** Object referenced by event. */
  subject: MilestoneItem
}

/** Entities that can be minimized. */
export type Minimizable = {
  /** Returns whether or not a comment has been minimized. */
  isMinimized: Scalars["Boolean"]
  /** Returns why the comment was minimized. */
  minimizedReason?: Maybe<Scalars["String"]>
  /** Check if the current viewer can minimize this object. */
  viewerCanMinimize: Scalars["Boolean"]
}

/** Autogenerated input type of MinimizeComment */
export type MinimizeCommentInput = {
  /** The classification of comment */
  classifier: ReportedContentClassifiers
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The Node ID of the subject to modify. */
  subjectId: Scalars["ID"]
}

/** Autogenerated return type of MinimizeComment */
export type MinimizeCommentPayload = {
  __typename?: "MinimizeCommentPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The comment that was minimized. */
  minimizedComment?: Maybe<Minimizable>
}

/** Autogenerated input type of MoveProjectCard */
export type MoveProjectCardInput = {
  /** Place the new card after the card with this id. Pass null to place it at the top. */
  afterCardId?: Maybe<Scalars["ID"]>
  /** The id of the card to move. */
  cardId: Scalars["ID"]
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The id of the column to move it into. */
  columnId: Scalars["ID"]
}

/** Autogenerated return type of MoveProjectCard */
export type MoveProjectCardPayload = {
  __typename?: "MoveProjectCardPayload"
  /** The new edge of the moved card. */
  cardEdge?: Maybe<ProjectCardEdge>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
}

/** Autogenerated input type of MoveProjectColumn */
export type MoveProjectColumnInput = {
  /** Place the new column after the column with this id. Pass null to place it at the front. */
  afterColumnId?: Maybe<Scalars["ID"]>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The id of the column to move. */
  columnId: Scalars["ID"]
}

/** Autogenerated return type of MoveProjectColumn */
export type MoveProjectColumnPayload = {
  __typename?: "MoveProjectColumnPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The new edge of the moved column. */
  columnEdge?: Maybe<ProjectColumnEdge>
}

/** Represents a 'moved_columns_in_project' event on a given issue or pull request. */
export type MovedColumnsInProjectEvent = Node & {
  __typename?: "MovedColumnsInProjectEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>
  id: Scalars["ID"]
}

/** The root query for implementing GraphQL mutations. */
export type Mutation = {
  __typename?: "Mutation"
  /** Accepts a pending invitation for a user to become an administrator of an enterprise. */
  acceptEnterpriseAdministratorInvitation?: Maybe<AcceptEnterpriseAdministratorInvitationPayload>
  /** Applies a suggested topic to the repository. */
  acceptTopicSuggestion?: Maybe<AcceptTopicSuggestionPayload>
  /** Adds assignees to an assignable object. */
  addAssigneesToAssignable?: Maybe<AddAssigneesToAssignablePayload>
  /** Adds a comment to an Issue or Pull Request. */
  addComment?: Maybe<AddCommentPayload>
  /** Adds labels to a labelable object. */
  addLabelsToLabelable?: Maybe<AddLabelsToLabelablePayload>
  /** Adds a card to a ProjectColumn. Either `contentId` or `note` must be provided but **not** both. */
  addProjectCard?: Maybe<AddProjectCardPayload>
  /** Adds a column to a Project. */
  addProjectColumn?: Maybe<AddProjectColumnPayload>
  /** Adds a review to a Pull Request. */
  addPullRequestReview?: Maybe<AddPullRequestReviewPayload>
  /** Adds a comment to a review. */
  addPullRequestReviewComment?: Maybe<AddPullRequestReviewCommentPayload>
  /** Adds a new thread to a pending Pull Request Review. */
  addPullRequestReviewThread?: Maybe<AddPullRequestReviewThreadPayload>
  /** Adds a reaction to a subject. */
  addReaction?: Maybe<AddReactionPayload>
  /** Adds a star to a Starrable. */
  addStar?: Maybe<AddStarPayload>
  /** Marks a repository as archived. */
  archiveRepository?: Maybe<ArchiveRepositoryPayload>
  /** Cancels a pending invitation for an administrator to join an enterprise. */
  cancelEnterpriseAdminInvitation?: Maybe<CancelEnterpriseAdminInvitationPayload>
  /** Update your status on GitHub. */
  changeUserStatus?: Maybe<ChangeUserStatusPayload>
  /** Clears all labels from a labelable object. */
  clearLabelsFromLabelable?: Maybe<ClearLabelsFromLabelablePayload>
  /** Creates a new project by cloning configuration from an existing project. */
  cloneProject?: Maybe<CloneProjectPayload>
  /** Create a new repository with the same files and directory structure as a template repository. */
  cloneTemplateRepository?: Maybe<CloneTemplateRepositoryPayload>
  /** Close an issue. */
  closeIssue?: Maybe<CloseIssuePayload>
  /** Close a pull request. */
  closePullRequest?: Maybe<ClosePullRequestPayload>
  /** Convert a project note card to one associated with a newly created issue. */
  convertProjectCardNoteToIssue?: Maybe<ConvertProjectCardNoteToIssuePayload>
  /** Create a new branch protection rule */
  createBranchProtectionRule?: Maybe<CreateBranchProtectionRulePayload>
  /** Create a check run. */
  createCheckRun?: Maybe<CreateCheckRunPayload>
  /** Create a check suite */
  createCheckSuite?: Maybe<CreateCheckSuitePayload>
  /** Creates an organization as part of an enterprise account. */
  createEnterpriseOrganization?: Maybe<CreateEnterpriseOrganizationPayload>
  /** Creates a new IP allow list entry. */
  createIpAllowListEntry?: Maybe<CreateIpAllowListEntryPayload>
  /** Creates a new issue. */
  createIssue?: Maybe<CreateIssuePayload>
  /** Creates a new project. */
  createProject?: Maybe<CreateProjectPayload>
  /** Create a new pull request */
  createPullRequest?: Maybe<CreatePullRequestPayload>
  /** Create a new Git Ref. */
  createRef?: Maybe<CreateRefPayload>
  /** Create a new repository. */
  createRepository?: Maybe<CreateRepositoryPayload>
  /** Creates a new team discussion. */
  createTeamDiscussion?: Maybe<CreateTeamDiscussionPayload>
  /** Creates a new team discussion comment. */
  createTeamDiscussionComment?: Maybe<CreateTeamDiscussionCommentPayload>
  /** Rejects a suggested topic for the repository. */
  declineTopicSuggestion?: Maybe<DeclineTopicSuggestionPayload>
  /** Delete a branch protection rule */
  deleteBranchProtectionRule?: Maybe<DeleteBranchProtectionRulePayload>
  /** Deletes a deployment. */
  deleteDeployment?: Maybe<DeleteDeploymentPayload>
  /** Deletes an IP allow list entry. */
  deleteIpAllowListEntry?: Maybe<DeleteIpAllowListEntryPayload>
  /** Deletes an Issue object. */
  deleteIssue?: Maybe<DeleteIssuePayload>
  /** Deletes an IssueComment object. */
  deleteIssueComment?: Maybe<DeleteIssueCommentPayload>
  /** Deletes a project. */
  deleteProject?: Maybe<DeleteProjectPayload>
  /** Deletes a project card. */
  deleteProjectCard?: Maybe<DeleteProjectCardPayload>
  /** Deletes a project column. */
  deleteProjectColumn?: Maybe<DeleteProjectColumnPayload>
  /** Deletes a pull request review. */
  deletePullRequestReview?: Maybe<DeletePullRequestReviewPayload>
  /** Deletes a pull request review comment. */
  deletePullRequestReviewComment?: Maybe<DeletePullRequestReviewCommentPayload>
  /** Delete a Git Ref. */
  deleteRef?: Maybe<DeleteRefPayload>
  /** Deletes a team discussion. */
  deleteTeamDiscussion?: Maybe<DeleteTeamDiscussionPayload>
  /** Deletes a team discussion comment. */
  deleteTeamDiscussionComment?: Maybe<DeleteTeamDiscussionCommentPayload>
  /** Dismisses an approved or rejected pull request review. */
  dismissPullRequestReview?: Maybe<DismissPullRequestReviewPayload>
  /** Follow a user. */
  followUser?: Maybe<FollowUserPayload>
  /** Invite someone to become an administrator of the enterprise. */
  inviteEnterpriseAdmin?: Maybe<InviteEnterpriseAdminPayload>
  /** Creates a repository link for a project. */
  linkRepositoryToProject?: Maybe<LinkRepositoryToProjectPayload>
  /** Lock a lockable object */
  lockLockable?: Maybe<LockLockablePayload>
  /** Mark a pull request file as viewed */
  markFileAsViewed?: Maybe<MarkFileAsViewedPayload>
  /** Marks a pull request ready for review. */
  markPullRequestReadyForReview?: Maybe<MarkPullRequestReadyForReviewPayload>
  /** Merge a head into a branch. */
  mergeBranch?: Maybe<MergeBranchPayload>
  /** Merge a pull request. */
  mergePullRequest?: Maybe<MergePullRequestPayload>
  /** Minimizes a comment on an Issue, Commit, Pull Request, or Gist */
  minimizeComment?: Maybe<MinimizeCommentPayload>
  /** Moves a project card to another place. */
  moveProjectCard?: Maybe<MoveProjectCardPayload>
  /** Moves a project column to another place. */
  moveProjectColumn?: Maybe<MoveProjectColumnPayload>
  /** Regenerates the identity provider recovery codes for an enterprise */
  regenerateEnterpriseIdentityProviderRecoveryCodes?: Maybe<RegenerateEnterpriseIdentityProviderRecoveryCodesPayload>
  /** Removes assignees from an assignable object. */
  removeAssigneesFromAssignable?: Maybe<RemoveAssigneesFromAssignablePayload>
  /** Removes an administrator from the enterprise. */
  removeEnterpriseAdmin?: Maybe<RemoveEnterpriseAdminPayload>
  /** Removes the identity provider from an enterprise */
  removeEnterpriseIdentityProvider?: Maybe<RemoveEnterpriseIdentityProviderPayload>
  /** Removes an organization from the enterprise */
  removeEnterpriseOrganization?: Maybe<RemoveEnterpriseOrganizationPayload>
  /** Removes labels from a Labelable object. */
  removeLabelsFromLabelable?: Maybe<RemoveLabelsFromLabelablePayload>
  /** Removes outside collaborator from all repositories in an organization. */
  removeOutsideCollaborator?: Maybe<RemoveOutsideCollaboratorPayload>
  /** Removes a reaction from a subject. */
  removeReaction?: Maybe<RemoveReactionPayload>
  /** Removes a star from a Starrable. */
  removeStar?: Maybe<RemoveStarPayload>
  /** Reopen a issue. */
  reopenIssue?: Maybe<ReopenIssuePayload>
  /** Reopen a pull request. */
  reopenPullRequest?: Maybe<ReopenPullRequestPayload>
  /** Set review requests on a pull request. */
  requestReviews?: Maybe<RequestReviewsPayload>
  /** Rerequests an existing check suite. */
  rerequestCheckSuite?: Maybe<RerequestCheckSuitePayload>
  /** Marks a review thread as resolved. */
  resolveReviewThread?: Maybe<ResolveReviewThreadPayload>
  /** Creates or updates the identity provider for an enterprise. */
  setEnterpriseIdentityProvider?: Maybe<SetEnterpriseIdentityProviderPayload>
  /** Submits a pending pull request review. */
  submitPullRequestReview?: Maybe<SubmitPullRequestReviewPayload>
  /** Transfer an issue to a different repository */
  transferIssue?: Maybe<TransferIssuePayload>
  /** Unarchives a repository. */
  unarchiveRepository?: Maybe<UnarchiveRepositoryPayload>
  /** Unfollow a user. */
  unfollowUser?: Maybe<UnfollowUserPayload>
  /** Deletes a repository link from a project. */
  unlinkRepositoryFromProject?: Maybe<UnlinkRepositoryFromProjectPayload>
  /** Unlock a lockable object */
  unlockLockable?: Maybe<UnlockLockablePayload>
  /** Unmark a pull request file as viewed */
  unmarkFileAsViewed?: Maybe<UnmarkFileAsViewedPayload>
  /** Unmark an issue as a duplicate of another issue. */
  unmarkIssueAsDuplicate?: Maybe<UnmarkIssueAsDuplicatePayload>
  /** Unminimizes a comment on an Issue, Commit, Pull Request, or Gist */
  unminimizeComment?: Maybe<UnminimizeCommentPayload>
  /** Marks a review thread as unresolved. */
  unresolveReviewThread?: Maybe<UnresolveReviewThreadPayload>
  /** Create a new branch protection rule */
  updateBranchProtectionRule?: Maybe<UpdateBranchProtectionRulePayload>
  /** Update a check run */
  updateCheckRun?: Maybe<UpdateCheckRunPayload>
  /** Modifies the settings of an existing check suite */
  updateCheckSuitePreferences?: Maybe<UpdateCheckSuitePreferencesPayload>
  /** Updates the role of an enterprise administrator. */
  updateEnterpriseAdministratorRole?: Maybe<UpdateEnterpriseAdministratorRolePayload>
  /** Sets whether private repository forks are enabled for an enterprise. */
  updateEnterpriseAllowPrivateRepositoryForkingSetting?: Maybe<
    UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload
  >
  /** Sets the default repository permission for organizations in an enterprise. */
  updateEnterpriseDefaultRepositoryPermissionSetting?: Maybe<UpdateEnterpriseDefaultRepositoryPermissionSettingPayload>
  /** Sets whether organization members with admin permissions on a repository can change repository visibility. */
  updateEnterpriseMembersCanChangeRepositoryVisibilitySetting?: Maybe<
    UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload
  >
  /** Sets the members can create repositories setting for an enterprise. */
  updateEnterpriseMembersCanCreateRepositoriesSetting?: Maybe<
    UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload
  >
  /** Sets the members can delete issues setting for an enterprise. */
  updateEnterpriseMembersCanDeleteIssuesSetting?: Maybe<UpdateEnterpriseMembersCanDeleteIssuesSettingPayload>
  /** Sets the members can delete repositories setting for an enterprise. */
  updateEnterpriseMembersCanDeleteRepositoriesSetting?: Maybe<
    UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload
  >
  /** Sets whether members can invite collaborators are enabled for an enterprise. */
  updateEnterpriseMembersCanInviteCollaboratorsSetting?: Maybe<
    UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload
  >
  /** Sets whether or not an organization admin can make purchases. */
  updateEnterpriseMembersCanMakePurchasesSetting?: Maybe<UpdateEnterpriseMembersCanMakePurchasesSettingPayload>
  /** Sets the members can update protected branches setting for an enterprise. */
  updateEnterpriseMembersCanUpdateProtectedBranchesSetting?: Maybe<
    UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload
  >
  /** Sets the members can view dependency insights for an enterprise. */
  updateEnterpriseMembersCanViewDependencyInsightsSetting?: Maybe<
    UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload
  >
  /** Sets whether organization projects are enabled for an enterprise. */
  updateEnterpriseOrganizationProjectsSetting?: Maybe<UpdateEnterpriseOrganizationProjectsSettingPayload>
  /** Updates an enterprise's profile. */
  updateEnterpriseProfile?: Maybe<UpdateEnterpriseProfilePayload>
  /** Sets whether repository projects are enabled for a enterprise. */
  updateEnterpriseRepositoryProjectsSetting?: Maybe<UpdateEnterpriseRepositoryProjectsSettingPayload>
  /** Sets whether team discussions are enabled for an enterprise. */
  updateEnterpriseTeamDiscussionsSetting?: Maybe<UpdateEnterpriseTeamDiscussionsSettingPayload>
  /** Sets whether two factor authentication is required for all users in an enterprise. */
  updateEnterpriseTwoFactorAuthenticationRequiredSetting?: Maybe<
    UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload
  >
  /** Sets whether an IP allow list is enabled on an owner. */
  updateIpAllowListEnabledSetting?: Maybe<UpdateIpAllowListEnabledSettingPayload>
  /** Updates an IP allow list entry. */
  updateIpAllowListEntry?: Maybe<UpdateIpAllowListEntryPayload>
  /** Updates an Issue. */
  updateIssue?: Maybe<UpdateIssuePayload>
  /** Updates an IssueComment object. */
  updateIssueComment?: Maybe<UpdateIssueCommentPayload>
  /** Updates an existing project. */
  updateProject?: Maybe<UpdateProjectPayload>
  /** Updates an existing project card. */
  updateProjectCard?: Maybe<UpdateProjectCardPayload>
  /** Updates an existing project column. */
  updateProjectColumn?: Maybe<UpdateProjectColumnPayload>
  /** Update a pull request */
  updatePullRequest?: Maybe<UpdatePullRequestPayload>
  /** Updates the body of a pull request review. */
  updatePullRequestReview?: Maybe<UpdatePullRequestReviewPayload>
  /** Updates a pull request review comment. */
  updatePullRequestReviewComment?: Maybe<UpdatePullRequestReviewCommentPayload>
  /** Update a Git Ref. */
  updateRef?: Maybe<UpdateRefPayload>
  /** Update information about a repository. */
  updateRepository?: Maybe<UpdateRepositoryPayload>
  /** Updates the state for subscribable subjects. */
  updateSubscription?: Maybe<UpdateSubscriptionPayload>
  /** Updates a team discussion. */
  updateTeamDiscussion?: Maybe<UpdateTeamDiscussionPayload>
  /** Updates a discussion comment. */
  updateTeamDiscussionComment?: Maybe<UpdateTeamDiscussionCommentPayload>
  /** Replaces the repository's topics with the given topics. */
  updateTopics?: Maybe<UpdateTopicsPayload>
}

/** The root query for implementing GraphQL mutations. */
export type MutationAcceptEnterpriseAdministratorInvitationArgs = {
  input: AcceptEnterpriseAdministratorInvitationInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationAcceptTopicSuggestionArgs = {
  input: AcceptTopicSuggestionInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationAddAssigneesToAssignableArgs = {
  input: AddAssigneesToAssignableInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationAddCommentArgs = {
  input: AddCommentInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationAddLabelsToLabelableArgs = {
  input: AddLabelsToLabelableInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationAddProjectCardArgs = {
  input: AddProjectCardInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationAddProjectColumnArgs = {
  input: AddProjectColumnInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationAddPullRequestReviewArgs = {
  input: AddPullRequestReviewInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationAddPullRequestReviewCommentArgs = {
  input: AddPullRequestReviewCommentInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationAddPullRequestReviewThreadArgs = {
  input: AddPullRequestReviewThreadInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationAddReactionArgs = {
  input: AddReactionInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationAddStarArgs = {
  input: AddStarInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationArchiveRepositoryArgs = {
  input: ArchiveRepositoryInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationCancelEnterpriseAdminInvitationArgs = {
  input: CancelEnterpriseAdminInvitationInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationChangeUserStatusArgs = {
  input: ChangeUserStatusInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationClearLabelsFromLabelableArgs = {
  input: ClearLabelsFromLabelableInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationCloneProjectArgs = {
  input: CloneProjectInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationCloneTemplateRepositoryArgs = {
  input: CloneTemplateRepositoryInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationCloseIssueArgs = {
  input: CloseIssueInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationClosePullRequestArgs = {
  input: ClosePullRequestInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationConvertProjectCardNoteToIssueArgs = {
  input: ConvertProjectCardNoteToIssueInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationCreateBranchProtectionRuleArgs = {
  input: CreateBranchProtectionRuleInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationCreateCheckRunArgs = {
  input: CreateCheckRunInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationCreateCheckSuiteArgs = {
  input: CreateCheckSuiteInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationCreateEnterpriseOrganizationArgs = {
  input: CreateEnterpriseOrganizationInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationCreateIpAllowListEntryArgs = {
  input: CreateIpAllowListEntryInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationCreateIssueArgs = {
  input: CreateIssueInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationCreateProjectArgs = {
  input: CreateProjectInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationCreatePullRequestArgs = {
  input: CreatePullRequestInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationCreateRefArgs = {
  input: CreateRefInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationCreateRepositoryArgs = {
  input: CreateRepositoryInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationCreateTeamDiscussionArgs = {
  input: CreateTeamDiscussionInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationCreateTeamDiscussionCommentArgs = {
  input: CreateTeamDiscussionCommentInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationDeclineTopicSuggestionArgs = {
  input: DeclineTopicSuggestionInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationDeleteBranchProtectionRuleArgs = {
  input: DeleteBranchProtectionRuleInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationDeleteDeploymentArgs = {
  input: DeleteDeploymentInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationDeleteIpAllowListEntryArgs = {
  input: DeleteIpAllowListEntryInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationDeleteIssueArgs = {
  input: DeleteIssueInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationDeleteIssueCommentArgs = {
  input: DeleteIssueCommentInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationDeleteProjectArgs = {
  input: DeleteProjectInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationDeleteProjectCardArgs = {
  input: DeleteProjectCardInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationDeleteProjectColumnArgs = {
  input: DeleteProjectColumnInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationDeletePullRequestReviewArgs = {
  input: DeletePullRequestReviewInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationDeletePullRequestReviewCommentArgs = {
  input: DeletePullRequestReviewCommentInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationDeleteRefArgs = {
  input: DeleteRefInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationDeleteTeamDiscussionArgs = {
  input: DeleteTeamDiscussionInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationDeleteTeamDiscussionCommentArgs = {
  input: DeleteTeamDiscussionCommentInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationDismissPullRequestReviewArgs = {
  input: DismissPullRequestReviewInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationFollowUserArgs = {
  input: FollowUserInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationInviteEnterpriseAdminArgs = {
  input: InviteEnterpriseAdminInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationLinkRepositoryToProjectArgs = {
  input: LinkRepositoryToProjectInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationLockLockableArgs = {
  input: LockLockableInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationMarkFileAsViewedArgs = {
  input: MarkFileAsViewedInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationMarkPullRequestReadyForReviewArgs = {
  input: MarkPullRequestReadyForReviewInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationMergeBranchArgs = {
  input: MergeBranchInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationMergePullRequestArgs = {
  input: MergePullRequestInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationMinimizeCommentArgs = {
  input: MinimizeCommentInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationMoveProjectCardArgs = {
  input: MoveProjectCardInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationMoveProjectColumnArgs = {
  input: MoveProjectColumnInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationRegenerateEnterpriseIdentityProviderRecoveryCodesArgs = {
  input: RegenerateEnterpriseIdentityProviderRecoveryCodesInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationRemoveAssigneesFromAssignableArgs = {
  input: RemoveAssigneesFromAssignableInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationRemoveEnterpriseAdminArgs = {
  input: RemoveEnterpriseAdminInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationRemoveEnterpriseIdentityProviderArgs = {
  input: RemoveEnterpriseIdentityProviderInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationRemoveEnterpriseOrganizationArgs = {
  input: RemoveEnterpriseOrganizationInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationRemoveLabelsFromLabelableArgs = {
  input: RemoveLabelsFromLabelableInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationRemoveOutsideCollaboratorArgs = {
  input: RemoveOutsideCollaboratorInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationRemoveReactionArgs = {
  input: RemoveReactionInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationRemoveStarArgs = {
  input: RemoveStarInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationReopenIssueArgs = {
  input: ReopenIssueInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationReopenPullRequestArgs = {
  input: ReopenPullRequestInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationRequestReviewsArgs = {
  input: RequestReviewsInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationRerequestCheckSuiteArgs = {
  input: RerequestCheckSuiteInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationResolveReviewThreadArgs = {
  input: ResolveReviewThreadInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationSetEnterpriseIdentityProviderArgs = {
  input: SetEnterpriseIdentityProviderInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationSubmitPullRequestReviewArgs = {
  input: SubmitPullRequestReviewInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationTransferIssueArgs = {
  input: TransferIssueInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUnarchiveRepositoryArgs = {
  input: UnarchiveRepositoryInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUnfollowUserArgs = {
  input: UnfollowUserInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUnlinkRepositoryFromProjectArgs = {
  input: UnlinkRepositoryFromProjectInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUnlockLockableArgs = {
  input: UnlockLockableInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUnmarkFileAsViewedArgs = {
  input: UnmarkFileAsViewedInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUnmarkIssueAsDuplicateArgs = {
  input: UnmarkIssueAsDuplicateInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUnminimizeCommentArgs = {
  input: UnminimizeCommentInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUnresolveReviewThreadArgs = {
  input: UnresolveReviewThreadInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUpdateBranchProtectionRuleArgs = {
  input: UpdateBranchProtectionRuleInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUpdateCheckRunArgs = {
  input: UpdateCheckRunInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUpdateCheckSuitePreferencesArgs = {
  input: UpdateCheckSuitePreferencesInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUpdateEnterpriseAdministratorRoleArgs = {
  input: UpdateEnterpriseAdministratorRoleInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUpdateEnterpriseAllowPrivateRepositoryForkingSettingArgs = {
  input: UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUpdateEnterpriseDefaultRepositoryPermissionSettingArgs = {
  input: UpdateEnterpriseDefaultRepositoryPermissionSettingInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingArgs = {
  input: UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUpdateEnterpriseMembersCanCreateRepositoriesSettingArgs = {
  input: UpdateEnterpriseMembersCanCreateRepositoriesSettingInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUpdateEnterpriseMembersCanDeleteIssuesSettingArgs = {
  input: UpdateEnterpriseMembersCanDeleteIssuesSettingInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUpdateEnterpriseMembersCanDeleteRepositoriesSettingArgs = {
  input: UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUpdateEnterpriseMembersCanInviteCollaboratorsSettingArgs = {
  input: UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUpdateEnterpriseMembersCanMakePurchasesSettingArgs = {
  input: UpdateEnterpriseMembersCanMakePurchasesSettingInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUpdateEnterpriseMembersCanUpdateProtectedBranchesSettingArgs = {
  input: UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUpdateEnterpriseMembersCanViewDependencyInsightsSettingArgs = {
  input: UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUpdateEnterpriseOrganizationProjectsSettingArgs = {
  input: UpdateEnterpriseOrganizationProjectsSettingInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUpdateEnterpriseProfileArgs = {
  input: UpdateEnterpriseProfileInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUpdateEnterpriseRepositoryProjectsSettingArgs = {
  input: UpdateEnterpriseRepositoryProjectsSettingInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUpdateEnterpriseTeamDiscussionsSettingArgs = {
  input: UpdateEnterpriseTeamDiscussionsSettingInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUpdateEnterpriseTwoFactorAuthenticationRequiredSettingArgs = {
  input: UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUpdateIpAllowListEnabledSettingArgs = {
  input: UpdateIpAllowListEnabledSettingInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUpdateIpAllowListEntryArgs = {
  input: UpdateIpAllowListEntryInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUpdateIssueArgs = {
  input: UpdateIssueInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUpdateIssueCommentArgs = {
  input: UpdateIssueCommentInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUpdateProjectArgs = {
  input: UpdateProjectInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUpdateProjectCardArgs = {
  input: UpdateProjectCardInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUpdateProjectColumnArgs = {
  input: UpdateProjectColumnInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUpdatePullRequestArgs = {
  input: UpdatePullRequestInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUpdatePullRequestReviewArgs = {
  input: UpdatePullRequestReviewInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUpdatePullRequestReviewCommentArgs = {
  input: UpdatePullRequestReviewCommentInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUpdateRefArgs = {
  input: UpdateRefInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUpdateRepositoryArgs = {
  input: UpdateRepositoryInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUpdateSubscriptionArgs = {
  input: UpdateSubscriptionInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUpdateTeamDiscussionArgs = {
  input: UpdateTeamDiscussionInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUpdateTeamDiscussionCommentArgs = {
  input: UpdateTeamDiscussionCommentInput
}

/** The root query for implementing GraphQL mutations. */
export type MutationUpdateTopicsArgs = {
  input: UpdateTopicsInput
}

/** An object with an ID. */
export type Node = {
  /** ID of the object. */
  id: Scalars["ID"]
}

/** Metadata for an audit entry with action oauth_application.* */
export type OauthApplicationAuditEntryData = {
  /** The name of the OAuth Application. */
  oauthApplicationName?: Maybe<Scalars["String"]>
  /** The HTTP path for the OAuth Application */
  oauthApplicationResourcePath?: Maybe<Scalars["URI"]>
  /** The HTTP URL for the OAuth Application */
  oauthApplicationUrl?: Maybe<Scalars["URI"]>
}

/** Audit log entry for a oauth_application.create event. */
export type OauthApplicationCreateAuditEntry = AuditEntry &
  Node &
  OauthApplicationAuditEntryData &
  OrganizationAuditEntryData & {
    __typename?: "OauthApplicationCreateAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The application URL of the OAuth Application. */
    applicationUrl?: Maybe<Scalars["URI"]>
    /** The callback URL of the OAuth Application. */
    callbackUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The name of the OAuth Application. */
    oauthApplicationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the OAuth Application */
    oauthApplicationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the OAuth Application */
    oauthApplicationUrl?: Maybe<Scalars["URI"]>
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The rate limit of the OAuth Application. */
    rateLimit?: Maybe<Scalars["Int"]>
    /** The state of the OAuth Application. */
    state?: Maybe<OauthApplicationCreateAuditEntryState>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** The state of an OAuth Application when it was created. */
export enum OauthApplicationCreateAuditEntryState {
  /** The OAuth Application was active and allowed to have OAuth Accesses. */
  Active = "ACTIVE",
  /** The OAuth Application was in the process of being deleted. */
  PendingDeletion = "PENDING_DELETION",
  /** The OAuth Application was suspended from generating OAuth Accesses due to abuse or security concerns. */
  Suspended = "SUSPENDED",
}

/** The corresponding operation type for the action */
export enum OperationType {
  /** An existing resource was accessed */
  Access = "ACCESS",
  /** A resource performed an authentication event */
  Authentication = "AUTHENTICATION",
  /** A new resource was created */
  Create = "CREATE",
  /** An existing resource was modified */
  Modify = "MODIFY",
  /** An existing resource was removed */
  Remove = "REMOVE",
  /** An existing resource was restored */
  Restore = "RESTORE",
  /** An existing resource was transferred between multiple resources */
  Transfer = "TRANSFER",
}

/** Possible directions in which to order a list of items when provided an `orderBy` argument. */
export enum OrderDirection {
  /** Specifies an ascending order for a given `orderBy` argument. */
  Asc = "ASC",
  /** Specifies a descending order for a given `orderBy` argument. */
  Desc = "DESC",
}

/** Audit log entry for a org.add_billing_manager */
export type OrgAddBillingManagerAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData & {
    __typename?: "OrgAddBillingManagerAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The email address used to invite a billing manager for the organization. */
    invitationEmail?: Maybe<Scalars["String"]>
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** Audit log entry for a org.add_member */
export type OrgAddMemberAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData & {
    __typename?: "OrgAddMemberAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The permission level of the member added to the organization. */
    permission?: Maybe<OrgAddMemberAuditEntryPermission>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** The permissions available to members on an Organization. */
export enum OrgAddMemberAuditEntryPermission {
  /** Can read, clone, push, and add collaborators to repositories. */
  Admin = "ADMIN",
  /** Can read and clone repositories. */
  Read = "READ",
}

/** Audit log entry for a org.block_user */
export type OrgBlockUserAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData & {
    __typename?: "OrgBlockUserAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The blocked user. */
    blockedUser?: Maybe<User>
    /** The username of the blocked user. */
    blockedUserName?: Maybe<Scalars["String"]>
    /** The HTTP path for the blocked user. */
    blockedUserResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the blocked user. */
    blockedUserUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** Audit log entry for a org.config.disable_collaborators_only event. */
export type OrgConfigDisableCollaboratorsOnlyAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData & {
    __typename?: "OrgConfigDisableCollaboratorsOnlyAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** Audit log entry for a org.config.enable_collaborators_only event. */
export type OrgConfigEnableCollaboratorsOnlyAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData & {
    __typename?: "OrgConfigEnableCollaboratorsOnlyAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** Audit log entry for a org.create event. */
export type OrgCreateAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData & {
    __typename?: "OrgCreateAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The billing plan for the Organization. */
    billingPlan?: Maybe<OrgCreateAuditEntryBillingPlan>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** The billing plans available for organizations. */
export enum OrgCreateAuditEntryBillingPlan {
  /** Team Plan */
  Business = "BUSINESS",
  /** Enterprise Cloud Plan */
  BusinessPlus = "BUSINESS_PLUS",
  /** Free Plan */
  Free = "FREE",
  /** Tiered Per Seat Plan */
  TieredPerSeat = "TIERED_PER_SEAT",
  /** Legacy Unlimited Plan */
  Unlimited = "UNLIMITED",
}

/** Audit log entry for a org.disable_oauth_app_restrictions event. */
export type OrgDisableOauthAppRestrictionsAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData & {
    __typename?: "OrgDisableOauthAppRestrictionsAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** Audit log entry for a org.disable_saml event. */
export type OrgDisableSamlAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData & {
    __typename?: "OrgDisableSamlAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    /** The SAML provider's digest algorithm URL. */
    digestMethodUrl?: Maybe<Scalars["URI"]>
    id: Scalars["ID"]
    /** The SAML provider's issuer URL. */
    issuerUrl?: Maybe<Scalars["URI"]>
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The SAML provider's signature algorithm URL. */
    signatureMethodUrl?: Maybe<Scalars["URI"]>
    /** The SAML provider's single sign-on URL. */
    singleSignOnUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** Audit log entry for a org.disable_two_factor_requirement event. */
export type OrgDisableTwoFactorRequirementAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData & {
    __typename?: "OrgDisableTwoFactorRequirementAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** Audit log entry for a org.enable_oauth_app_restrictions event. */
export type OrgEnableOauthAppRestrictionsAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData & {
    __typename?: "OrgEnableOauthAppRestrictionsAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** Audit log entry for a org.enable_saml event. */
export type OrgEnableSamlAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData & {
    __typename?: "OrgEnableSamlAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    /** The SAML provider's digest algorithm URL. */
    digestMethodUrl?: Maybe<Scalars["URI"]>
    id: Scalars["ID"]
    /** The SAML provider's issuer URL. */
    issuerUrl?: Maybe<Scalars["URI"]>
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The SAML provider's signature algorithm URL. */
    signatureMethodUrl?: Maybe<Scalars["URI"]>
    /** The SAML provider's single sign-on URL. */
    singleSignOnUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** Audit log entry for a org.enable_two_factor_requirement event. */
export type OrgEnableTwoFactorRequirementAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData & {
    __typename?: "OrgEnableTwoFactorRequirementAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** Audit log entry for a org.invite_member event. */
export type OrgInviteMemberAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData & {
    __typename?: "OrgInviteMemberAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    /** The email address of the organization invitation. */
    email?: Maybe<Scalars["String"]>
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The organization invitation. */
    organizationInvitation?: Maybe<OrganizationInvitation>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** Audit log entry for a org.invite_to_business event. */
export type OrgInviteToBusinessAuditEntry = AuditEntry &
  EnterpriseAuditEntryData &
  Node &
  OrganizationAuditEntryData & {
    __typename?: "OrgInviteToBusinessAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    /** The HTTP path for this enterprise. */
    enterpriseResourcePath?: Maybe<Scalars["URI"]>
    /** The slug of the enterprise. */
    enterpriseSlug?: Maybe<Scalars["String"]>
    /** The HTTP URL for this enterprise. */
    enterpriseUrl?: Maybe<Scalars["URI"]>
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** Audit log entry for a org.oauth_app_access_approved event. */
export type OrgOauthAppAccessApprovedAuditEntry = AuditEntry &
  Node &
  OauthApplicationAuditEntryData &
  OrganizationAuditEntryData & {
    __typename?: "OrgOauthAppAccessApprovedAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The name of the OAuth Application. */
    oauthApplicationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the OAuth Application */
    oauthApplicationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the OAuth Application */
    oauthApplicationUrl?: Maybe<Scalars["URI"]>
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** Audit log entry for a org.oauth_app_access_denied event. */
export type OrgOauthAppAccessDeniedAuditEntry = AuditEntry &
  Node &
  OauthApplicationAuditEntryData &
  OrganizationAuditEntryData & {
    __typename?: "OrgOauthAppAccessDeniedAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The name of the OAuth Application. */
    oauthApplicationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the OAuth Application */
    oauthApplicationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the OAuth Application */
    oauthApplicationUrl?: Maybe<Scalars["URI"]>
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** Audit log entry for a org.oauth_app_access_requested event. */
export type OrgOauthAppAccessRequestedAuditEntry = AuditEntry &
  Node &
  OauthApplicationAuditEntryData &
  OrganizationAuditEntryData & {
    __typename?: "OrgOauthAppAccessRequestedAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The name of the OAuth Application. */
    oauthApplicationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the OAuth Application */
    oauthApplicationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the OAuth Application */
    oauthApplicationUrl?: Maybe<Scalars["URI"]>
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** Audit log entry for a org.remove_billing_manager event. */
export type OrgRemoveBillingManagerAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData & {
    __typename?: "OrgRemoveBillingManagerAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The reason for the billing manager being removed. */
    reason?: Maybe<OrgRemoveBillingManagerAuditEntryReason>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** The reason a billing manager was removed from an Organization. */
export enum OrgRemoveBillingManagerAuditEntryReason {
  /** SAML external identity missing */
  SamlExternalIdentityMissing = "SAML_EXTERNAL_IDENTITY_MISSING",
  /** SAML SSO enforcement requires an external identity */
  SamlSsoEnforcementRequiresExternalIdentity = "SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY",
  /** The organization required 2FA of its billing managers and this user did not have 2FA enabled. */
  TwoFactorRequirementNonCompliance = "TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE",
}

/** Audit log entry for a org.remove_member event. */
export type OrgRemoveMemberAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData & {
    __typename?: "OrgRemoveMemberAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The types of membership the member has with the organization. */
    membershipTypes?: Maybe<Array<OrgRemoveMemberAuditEntryMembershipType>>
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The reason for the member being removed. */
    reason?: Maybe<OrgRemoveMemberAuditEntryReason>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** The type of membership a user has with an Organization. */
export enum OrgRemoveMemberAuditEntryMembershipType {
  /**
   * Organization administrators have full access and can change several settings,
   * including the names of repositories that belong to the Organization and Owners
   * team membership. In addition, organization admins can delete the organization
   * and all of its repositories.
   */
  Admin = "ADMIN",
  /** A billing manager is a user who manages the billing settings for the Organization, such as updating payment information. */
  BillingManager = "BILLING_MANAGER",
  /** A direct member is a user that is a member of the Organization. */
  DirectMember = "DIRECT_MEMBER",
  /**
   * An outside collaborator is a person who isn't explicitly a member of the
   * Organization, but who has Read, Write, or Admin permissions to one or more
   * repositories in the organization.
   */
  OutsideCollaborator = "OUTSIDE_COLLABORATOR",
  /**
   * An unaffiliated collaborator is a person who is not a member of the
   * Organization and does not have access to any repositories in the Organization.
   */
  Unaffiliated = "UNAFFILIATED",
}

/** The reason a member was removed from an Organization. */
export enum OrgRemoveMemberAuditEntryReason {
  /** SAML external identity missing */
  SamlExternalIdentityMissing = "SAML_EXTERNAL_IDENTITY_MISSING",
  /** SAML SSO enforcement requires an external identity */
  SamlSsoEnforcementRequiresExternalIdentity = "SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY",
  /** User was removed from organization during account recovery */
  TwoFactorAccountRecovery = "TWO_FACTOR_ACCOUNT_RECOVERY",
  /** The organization required 2FA of its billing managers and this user did not have 2FA enabled. */
  TwoFactorRequirementNonCompliance = "TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE",
  /** User account has been deleted */
  UserAccountDeleted = "USER_ACCOUNT_DELETED",
}

/** Audit log entry for a org.remove_outside_collaborator event. */
export type OrgRemoveOutsideCollaboratorAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData & {
    __typename?: "OrgRemoveOutsideCollaboratorAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The types of membership the outside collaborator has with the organization. */
    membershipTypes?: Maybe<Array<OrgRemoveOutsideCollaboratorAuditEntryMembershipType>>
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The reason for the outside collaborator being removed from the Organization. */
    reason?: Maybe<OrgRemoveOutsideCollaboratorAuditEntryReason>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** The type of membership a user has with an Organization. */
export enum OrgRemoveOutsideCollaboratorAuditEntryMembershipType {
  /** A billing manager is a user who manages the billing settings for the Organization, such as updating payment information. */
  BillingManager = "BILLING_MANAGER",
  /**
   * An outside collaborator is a person who isn't explicitly a member of the
   * Organization, but who has Read, Write, or Admin permissions to one or more
   * repositories in the organization.
   */
  OutsideCollaborator = "OUTSIDE_COLLABORATOR",
  /**
   * An unaffiliated collaborator is a person who is not a member of the
   * Organization and does not have access to any repositories in the organization.
   */
  Unaffiliated = "UNAFFILIATED",
}

/** The reason an outside collaborator was removed from an Organization. */
export enum OrgRemoveOutsideCollaboratorAuditEntryReason {
  /** SAML external identity missing */
  SamlExternalIdentityMissing = "SAML_EXTERNAL_IDENTITY_MISSING",
  /** The organization required 2FA of its billing managers and this user did not have 2FA enabled. */
  TwoFactorRequirementNonCompliance = "TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE",
}

/** Audit log entry for a org.restore_member event. */
export type OrgRestoreMemberAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData & {
    __typename?: "OrgRestoreMemberAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The number of custom email routings for the restored member. */
    restoredCustomEmailRoutingsCount?: Maybe<Scalars["Int"]>
    /** The number of issue assignemnts for the restored member. */
    restoredIssueAssignmentsCount?: Maybe<Scalars["Int"]>
    /** Restored organization membership objects. */
    restoredMemberships?: Maybe<Array<OrgRestoreMemberAuditEntryMembership>>
    /** The number of restored memberships. */
    restoredMembershipsCount?: Maybe<Scalars["Int"]>
    /** The number of repositories of the restored member. */
    restoredRepositoriesCount?: Maybe<Scalars["Int"]>
    /** The number of starred repositories for the restored member. */
    restoredRepositoryStarsCount?: Maybe<Scalars["Int"]>
    /** The number of watched repositories for the restored member. */
    restoredRepositoryWatchesCount?: Maybe<Scalars["Int"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** Types of memberships that can be restored for an Organization member. */
export type OrgRestoreMemberAuditEntryMembership =
  | OrgRestoreMemberMembershipOrganizationAuditEntryData
  | OrgRestoreMemberMembershipRepositoryAuditEntryData
  | OrgRestoreMemberMembershipTeamAuditEntryData

/** Metadata for an organization membership for org.restore_member actions */
export type OrgRestoreMemberMembershipOrganizationAuditEntryData = OrganizationAuditEntryData & {
  __typename?: "OrgRestoreMemberMembershipOrganizationAuditEntryData"
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<Organization>
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars["String"]>
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars["URI"]>
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars["URI"]>
}

/** Metadata for a repository membership for org.restore_member actions */
export type OrgRestoreMemberMembershipRepositoryAuditEntryData = RepositoryAuditEntryData & {
  __typename?: "OrgRestoreMemberMembershipRepositoryAuditEntryData"
  /** The repository associated with the action */
  repository?: Maybe<Repository>
  /** The name of the repository */
  repositoryName?: Maybe<Scalars["String"]>
  /** The HTTP path for the repository */
  repositoryResourcePath?: Maybe<Scalars["URI"]>
  /** The HTTP URL for the repository */
  repositoryUrl?: Maybe<Scalars["URI"]>
}

/** Metadata for a team membership for org.restore_member actions */
export type OrgRestoreMemberMembershipTeamAuditEntryData = TeamAuditEntryData & {
  __typename?: "OrgRestoreMemberMembershipTeamAuditEntryData"
  /** The team associated with the action */
  team?: Maybe<Team>
  /** The name of the team */
  teamName?: Maybe<Scalars["String"]>
  /** The HTTP path for this team */
  teamResourcePath?: Maybe<Scalars["URI"]>
  /** The HTTP URL for this team */
  teamUrl?: Maybe<Scalars["URI"]>
}

/** Audit log entry for a org.unblock_user */
export type OrgUnblockUserAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData & {
    __typename?: "OrgUnblockUserAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The user being unblocked by the organization. */
    blockedUser?: Maybe<User>
    /** The username of the blocked user. */
    blockedUserName?: Maybe<Scalars["String"]>
    /** The HTTP path for the blocked user. */
    blockedUserResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the blocked user. */
    blockedUserUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** Audit log entry for a org.update_default_repository_permission */
export type OrgUpdateDefaultRepositoryPermissionAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData & {
    __typename?: "OrgUpdateDefaultRepositoryPermissionAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The new default repository permission level for the organization. */
    permission?: Maybe<OrgUpdateDefaultRepositoryPermissionAuditEntryPermission>
    /** The former default repository permission level for the organization. */
    permissionWas?: Maybe<OrgUpdateDefaultRepositoryPermissionAuditEntryPermission>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** The default permission a repository can have in an Organization. */
export enum OrgUpdateDefaultRepositoryPermissionAuditEntryPermission {
  /** Can read, clone, push, and add collaborators to repositories. */
  Admin = "ADMIN",
  /** No default permission value. */
  None = "NONE",
  /** Can read and clone repositories. */
  Read = "READ",
  /** Can read, clone and push to repositories. */
  Write = "WRITE",
}

/** Audit log entry for a org.update_member event. */
export type OrgUpdateMemberAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData & {
    __typename?: "OrgUpdateMemberAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The new member permission level for the organization. */
    permission?: Maybe<OrgUpdateMemberAuditEntryPermission>
    /** The former member permission level for the organization. */
    permissionWas?: Maybe<OrgUpdateMemberAuditEntryPermission>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** The permissions available to members on an Organization. */
export enum OrgUpdateMemberAuditEntryPermission {
  /** Can read, clone, push, and add collaborators to repositories. */
  Admin = "ADMIN",
  /** Can read and clone repositories. */
  Read = "READ",
}

/** Audit log entry for a org.update_member_repository_creation_permission event. */
export type OrgUpdateMemberRepositoryCreationPermissionAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData & {
    __typename?: "OrgUpdateMemberRepositoryCreationPermissionAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** Can members create repositories in the organization. */
    canCreateRepositories?: Maybe<Scalars["Boolean"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
    /** The permission for visibility level of repositories for this organization. */
    visibility?: Maybe<OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility>
  }

/** The permissions available for repository creation on an Organization. */
export enum OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility {
  /** All organization members are restricted from creating any repositories. */
  All = "ALL",
  /** All organization members are restricted from creating internal repositories. */
  Internal = "INTERNAL",
  /** All organization members are allowed to create any repositories. */
  None = "NONE",
  /** All organization members are restricted from creating private repositories. */
  Private = "PRIVATE",
  /** All organization members are restricted from creating private or internal repositories. */
  PrivateInternal = "PRIVATE_INTERNAL",
  /** All organization members are restricted from creating public repositories. */
  Public = "PUBLIC",
  /** All organization members are restricted from creating public or internal repositories. */
  PublicInternal = "PUBLIC_INTERNAL",
  /** All organization members are restricted from creating public or private repositories. */
  PublicPrivate = "PUBLIC_PRIVATE",
}

/** Audit log entry for a org.update_member_repository_invitation_permission event. */
export type OrgUpdateMemberRepositoryInvitationPermissionAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData & {
    __typename?: "OrgUpdateMemberRepositoryInvitationPermissionAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** Can outside collaborators be invited to repositories in the organization. */
    canInviteOutsideCollaboratorsToRepositories?: Maybe<Scalars["Boolean"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type Organization = Actor &
  MemberStatusable &
  Node &
  PackageOwner &
  ProfileOwner &
  ProjectOwner &
  RepositoryOwner &
  Sponsorable &
  UniformResourceLocatable & {
    __typename?: "Organization"
    /** Determine if this repository owner has any items that can be pinned to their profile. */
    anyPinnableItems: Scalars["Boolean"]
    /** Audit log entries of the organization */
    auditLog: OrganizationAuditEntryConnection
    /** A URL pointing to the organization's public avatar. */
    avatarUrl: Scalars["URI"]
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["DateTime"]
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>
    /** The organization's public profile description. */
    description?: Maybe<Scalars["String"]>
    /** The organization's public profile description rendered to HTML. */
    descriptionHTML?: Maybe<Scalars["String"]>
    /** The organization's public email. */
    email?: Maybe<Scalars["String"]>
    id: Scalars["ID"]
    /** The setting value for whether the organization has an IP allow list enabled. */
    ipAllowListEnabledSetting: IpAllowListEnabledSettingValue
    /** The IP addresses that are allowed to access resources owned by the organization. */
    ipAllowListEntries: IpAllowListEntryConnection
    /** Whether the organization has verified its profile email and website, always false on Enterprise. */
    isVerified: Scalars["Boolean"]
    /**
     * Showcases a selection of repositories and gists that the profile owner has
     * either curated or that have been selected automatically based on popularity.
     */
    itemShowcase: ProfileItemShowcase
    /** The organization's public profile location. */
    location?: Maybe<Scalars["String"]>
    /** The organization's login name. */
    login: Scalars["String"]
    /** Get the status messages members of this entity have set that are either public or visible only to the organization. */
    memberStatuses: UserStatusConnection
    /** A list of users who are members of this organization. */
    membersWithRole: OrganizationMemberConnection
    /** The organization's public profile name. */
    name?: Maybe<Scalars["String"]>
    /** The HTTP path creating a new team */
    newTeamResourcePath: Scalars["URI"]
    /** The HTTP URL creating a new team */
    newTeamUrl: Scalars["URI"]
    /** The billing email for the organization. */
    organizationBillingEmail?: Maybe<Scalars["String"]>
    /** A list of packages under the owner. */
    packages: PackageConnection
    /** A list of users who have been invited to join this organization. */
    pendingMembers: UserConnection
    /** A list of repositories and gists this profile owner can pin to their profile. */
    pinnableItems: PinnableItemConnection
    /** A list of repositories and gists this profile owner has pinned to their profile */
    pinnedItems: PinnableItemConnection
    /** Returns how many more items this profile owner can pin to their profile. */
    pinnedItemsRemaining: Scalars["Int"]
    /** Find project by number. */
    project?: Maybe<Project>
    /** A list of projects under the owner. */
    projects: ProjectConnection
    /** The HTTP path listing organization's projects */
    projectsResourcePath: Scalars["URI"]
    /** The HTTP URL listing organization's projects */
    projectsUrl: Scalars["URI"]
    /** A list of repositories that the user owns. */
    repositories: RepositoryConnection
    /** Find Repository. */
    repository?: Maybe<Repository>
    /**
     * When true the organization requires all members, billing managers, and outside
     * collaborators to enable two-factor authentication.
     */
    requiresTwoFactorAuthentication?: Maybe<Scalars["Boolean"]>
    /** The HTTP path for this organization. */
    resourcePath: Scalars["URI"]
    /** The Organization's SAML identity providers */
    samlIdentityProvider?: Maybe<OrganizationIdentityProvider>
    /** The GitHub Sponsors listing for this user. */
    sponsorsListing?: Maybe<SponsorsListing>
    /** This object's sponsorships as the maintainer. */
    sponsorshipsAsMaintainer: SponsorshipConnection
    /** This object's sponsorships as the sponsor. */
    sponsorshipsAsSponsor: SponsorshipConnection
    /** Find an organization's team by its slug. */
    team?: Maybe<Team>
    /** A list of teams in this organization. */
    teams: TeamConnection
    /** The HTTP path listing organization's teams */
    teamsResourcePath: Scalars["URI"]
    /** The HTTP URL listing organization's teams */
    teamsUrl: Scalars["URI"]
    /** The organization's Twitter username. */
    twitterUsername?: Maybe<Scalars["String"]>
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["DateTime"]
    /** The HTTP URL for this organization. */
    url: Scalars["URI"]
    /** Organization is adminable by the viewer. */
    viewerCanAdminister: Scalars["Boolean"]
    /** Can the viewer pin repositories and gists to the profile? */
    viewerCanChangePinnedItems: Scalars["Boolean"]
    /** Can the current viewer create new projects on this owner. */
    viewerCanCreateProjects: Scalars["Boolean"]
    /** Viewer can create repositories on this organization */
    viewerCanCreateRepositories: Scalars["Boolean"]
    /** Viewer can create teams on this organization. */
    viewerCanCreateTeams: Scalars["Boolean"]
    /** Viewer is an active member of this organization. */
    viewerIsAMember: Scalars["Boolean"]
    /** The organization's public profile URL. */
    websiteUrl?: Maybe<Scalars["URI"]>
  }

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type OrganizationAnyPinnableItemsArgs = {
  type?: Maybe<PinnableItemType>
}

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type OrganizationAuditLogArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<AuditLogOrder>
  query?: Maybe<Scalars["String"]>
}

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type OrganizationAvatarUrlArgs = {
  size?: Maybe<Scalars["Int"]>
}

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type OrganizationIpAllowListEntriesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<IpAllowListEntryOrder>
}

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type OrganizationMemberStatusesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<UserStatusOrder>
}

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type OrganizationMembersWithRoleArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type OrganizationPackagesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  names?: Maybe<Array<Maybe<Scalars["String"]>>>
  orderBy?: Maybe<PackageOrder>
  packageType?: Maybe<PackageType>
  repositoryId?: Maybe<Scalars["ID"]>
}

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type OrganizationPendingMembersArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type OrganizationPinnableItemsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  types?: Maybe<Array<PinnableItemType>>
}

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type OrganizationPinnedItemsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  types?: Maybe<Array<PinnableItemType>>
}

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type OrganizationProjectArgs = {
  number: Scalars["Int"]
}

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type OrganizationProjectsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<ProjectOrder>
  search?: Maybe<Scalars["String"]>
  states?: Maybe<Array<ProjectState>>
}

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type OrganizationRepositoriesArgs = {
  affiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  isFork?: Maybe<Scalars["Boolean"]>
  isLocked?: Maybe<Scalars["Boolean"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<RepositoryOrder>
  ownerAffiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>
  privacy?: Maybe<RepositoryPrivacy>
}

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type OrganizationRepositoryArgs = {
  name: Scalars["String"]
}

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type OrganizationSponsorshipsAsMaintainerArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  includePrivate?: Maybe<Scalars["Boolean"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<SponsorshipOrder>
}

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type OrganizationSponsorshipsAsSponsorArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<SponsorshipOrder>
}

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type OrganizationTeamArgs = {
  slug: Scalars["String"]
}

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
export type OrganizationTeamsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  ldapMapped?: Maybe<Scalars["Boolean"]>
  orderBy?: Maybe<TeamOrder>
  privacy?: Maybe<TeamPrivacy>
  query?: Maybe<Scalars["String"]>
  role?: Maybe<TeamRole>
  rootTeamsOnly?: Maybe<Scalars["Boolean"]>
  userLogins?: Maybe<Array<Scalars["String"]>>
}

/** An audit entry in an organization audit log. */
export type OrganizationAuditEntry =
  | MembersCanDeleteReposClearAuditEntry
  | MembersCanDeleteReposDisableAuditEntry
  | MembersCanDeleteReposEnableAuditEntry
  | OauthApplicationCreateAuditEntry
  | OrgAddBillingManagerAuditEntry
  | OrgAddMemberAuditEntry
  | OrgBlockUserAuditEntry
  | OrgConfigDisableCollaboratorsOnlyAuditEntry
  | OrgConfigEnableCollaboratorsOnlyAuditEntry
  | OrgCreateAuditEntry
  | OrgDisableOauthAppRestrictionsAuditEntry
  | OrgDisableSamlAuditEntry
  | OrgDisableTwoFactorRequirementAuditEntry
  | OrgEnableOauthAppRestrictionsAuditEntry
  | OrgEnableSamlAuditEntry
  | OrgEnableTwoFactorRequirementAuditEntry
  | OrgInviteMemberAuditEntry
  | OrgInviteToBusinessAuditEntry
  | OrgOauthAppAccessApprovedAuditEntry
  | OrgOauthAppAccessDeniedAuditEntry
  | OrgOauthAppAccessRequestedAuditEntry
  | OrgRemoveBillingManagerAuditEntry
  | OrgRemoveMemberAuditEntry
  | OrgRemoveOutsideCollaboratorAuditEntry
  | OrgRestoreMemberAuditEntry
  | OrgUnblockUserAuditEntry
  | OrgUpdateDefaultRepositoryPermissionAuditEntry
  | OrgUpdateMemberAuditEntry
  | OrgUpdateMemberRepositoryCreationPermissionAuditEntry
  | OrgUpdateMemberRepositoryInvitationPermissionAuditEntry
  | PrivateRepositoryForkingDisableAuditEntry
  | PrivateRepositoryForkingEnableAuditEntry
  | RepoAccessAuditEntry
  | RepoAddMemberAuditEntry
  | RepoAddTopicAuditEntry
  | RepoArchivedAuditEntry
  | RepoChangeMergeSettingAuditEntry
  | RepoConfigDisableAnonymousGitAccessAuditEntry
  | RepoConfigDisableCollaboratorsOnlyAuditEntry
  | RepoConfigDisableContributorsOnlyAuditEntry
  | RepoConfigDisableSockpuppetDisallowedAuditEntry
  | RepoConfigEnableAnonymousGitAccessAuditEntry
  | RepoConfigEnableCollaboratorsOnlyAuditEntry
  | RepoConfigEnableContributorsOnlyAuditEntry
  | RepoConfigEnableSockpuppetDisallowedAuditEntry
  | RepoConfigLockAnonymousGitAccessAuditEntry
  | RepoConfigUnlockAnonymousGitAccessAuditEntry
  | RepoCreateAuditEntry
  | RepoDestroyAuditEntry
  | RepoRemoveMemberAuditEntry
  | RepoRemoveTopicAuditEntry
  | RepositoryVisibilityChangeDisableAuditEntry
  | RepositoryVisibilityChangeEnableAuditEntry
  | TeamAddMemberAuditEntry
  | TeamAddRepositoryAuditEntry
  | TeamChangeParentTeamAuditEntry
  | TeamRemoveMemberAuditEntry
  | TeamRemoveRepositoryAuditEntry

/** The connection type for OrganizationAuditEntry. */
export type OrganizationAuditEntryConnection = {
  __typename?: "OrganizationAuditEntryConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<OrganizationAuditEntryEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<OrganizationAuditEntry>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** Metadata for an audit entry with action org.* */
export type OrganizationAuditEntryData = {
  /** The Organization associated with the Audit Entry. */
  organization?: Maybe<Organization>
  /** The name of the Organization. */
  organizationName?: Maybe<Scalars["String"]>
  /** The HTTP path for the organization */
  organizationResourcePath?: Maybe<Scalars["URI"]>
  /** The HTTP URL for the organization */
  organizationUrl?: Maybe<Scalars["URI"]>
}

/** An edge in a connection. */
export type OrganizationAuditEntryEdge = {
  __typename?: "OrganizationAuditEntryEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<OrganizationAuditEntry>
}

/** The connection type for Organization. */
export type OrganizationConnection = {
  __typename?: "OrganizationConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<OrganizationEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Organization>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type OrganizationEdge = {
  __typename?: "OrganizationEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<Organization>
}

/** An Identity Provider configured to provision SAML and SCIM identities for Organizations */
export type OrganizationIdentityProvider = Node & {
  __typename?: "OrganizationIdentityProvider"
  /** The digest algorithm used to sign SAML requests for the Identity Provider. */
  digestMethod?: Maybe<Scalars["URI"]>
  /** External Identities provisioned by this Identity Provider */
  externalIdentities: ExternalIdentityConnection
  id: Scalars["ID"]
  /** The x509 certificate used by the Identity Provder to sign assertions and responses. */
  idpCertificate?: Maybe<Scalars["X509Certificate"]>
  /** The Issuer Entity ID for the SAML Identity Provider */
  issuer?: Maybe<Scalars["String"]>
  /** Organization this Identity Provider belongs to */
  organization?: Maybe<Organization>
  /** The signature algorithm used to sign SAML requests for the Identity Provider. */
  signatureMethod?: Maybe<Scalars["URI"]>
  /** The URL endpoint for the Identity Provider's SAML SSO. */
  ssoUrl?: Maybe<Scalars["URI"]>
}

/** An Identity Provider configured to provision SAML and SCIM identities for Organizations */
export type OrganizationIdentityProviderExternalIdentitiesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** An Invitation for a user to an organization. */
export type OrganizationInvitation = Node & {
  __typename?: "OrganizationInvitation"
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  /** The email address of the user invited to the organization. */
  email?: Maybe<Scalars["String"]>
  id: Scalars["ID"]
  /** The type of invitation that was sent (e.g. email, user). */
  invitationType: OrganizationInvitationType
  /** The user who was invited to the organization. */
  invitee?: Maybe<User>
  /** The user who created the invitation. */
  inviter: User
  /** The organization the invite is for */
  organization: Organization
  /** The user's pending role in the organization (e.g. member, owner). */
  role: OrganizationInvitationRole
}

/** The connection type for OrganizationInvitation. */
export type OrganizationInvitationConnection = {
  __typename?: "OrganizationInvitationConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<OrganizationInvitationEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<OrganizationInvitation>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type OrganizationInvitationEdge = {
  __typename?: "OrganizationInvitationEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<OrganizationInvitation>
}

/** The possible organization invitation roles. */
export enum OrganizationInvitationRole {
  /** The user is invited to be an admin of the organization. */
  Admin = "ADMIN",
  /** The user is invited to be a billing manager of the organization. */
  BillingManager = "BILLING_MANAGER",
  /** The user is invited to be a direct member of the organization. */
  DirectMember = "DIRECT_MEMBER",
  /** The user's previous role will be reinstated. */
  Reinstate = "REINSTATE",
}

/** The possible organization invitation types. */
export enum OrganizationInvitationType {
  /** The invitation was to an email address. */
  Email = "EMAIL",
  /** The invitation was to an existing user. */
  User = "USER",
}

/** The connection type for User. */
export type OrganizationMemberConnection = {
  __typename?: "OrganizationMemberConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<OrganizationMemberEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<User>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** Represents a user within an organization. */
export type OrganizationMemberEdge = {
  __typename?: "OrganizationMemberEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** Whether the organization member has two factor enabled or not. Returns null if information is not available to viewer. */
  hasTwoFactorEnabled?: Maybe<Scalars["Boolean"]>
  /** The item at the end of the edge. */
  node?: Maybe<User>
  /** The role this user has in the organization. */
  role?: Maybe<OrganizationMemberRole>
}

/** The possible roles within an organization for its members. */
export enum OrganizationMemberRole {
  /** The user is an administrator of the organization. */
  Admin = "ADMIN",
  /** The user is a member of the organization. */
  Member = "MEMBER",
}

/** The possible values for the members can create repositories setting on an organization. */
export enum OrganizationMembersCanCreateRepositoriesSettingValue {
  /** Members will be able to create public and private repositories. */
  All = "ALL",
  /** Members will not be able to create public or private repositories. */
  Disabled = "DISABLED",
  /** Members will be able to create only private repositories. */
  Private = "PRIVATE",
}

/** Ordering options for organization connections. */
export type OrganizationOrder = {
  /** The ordering direction. */
  direction: OrderDirection
  /** The field to order organizations by. */
  field: OrganizationOrderField
}

/** Properties by which organization connections can be ordered. */
export enum OrganizationOrderField {
  /** Order organizations by creation time */
  CreatedAt = "CREATED_AT",
  /** Order organizations by login */
  Login = "LOGIN",
}

/** An organization teams hovercard context */
export type OrganizationTeamsHovercardContext = HovercardContext & {
  __typename?: "OrganizationTeamsHovercardContext"
  /** A string describing this context */
  message: Scalars["String"]
  /** An octicon to accompany this context */
  octicon: Scalars["String"]
  /** Teams in this organization the user is a member of that are relevant */
  relevantTeams: TeamConnection
  /** The path for the full team list for this user */
  teamsResourcePath: Scalars["URI"]
  /** The URL for the full team list for this user */
  teamsUrl: Scalars["URI"]
  /** The total number of teams the user is on in the organization */
  totalTeamCount: Scalars["Int"]
}

/** An organization teams hovercard context */
export type OrganizationTeamsHovercardContextRelevantTeamsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** An organization list hovercard context */
export type OrganizationsHovercardContext = HovercardContext & {
  __typename?: "OrganizationsHovercardContext"
  /** A string describing this context */
  message: Scalars["String"]
  /** An octicon to accompany this context */
  octicon: Scalars["String"]
  /** Organizations this user is a member of that are relevant */
  relevantOrganizations: OrganizationConnection
  /** The total number of organizations this user is in */
  totalOrganizationCount: Scalars["Int"]
}

/** An organization list hovercard context */
export type OrganizationsHovercardContextRelevantOrganizationsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** Information for an uploaded package. */
export type Package = Node & {
  __typename?: "Package"
  id: Scalars["ID"]
  /** Find the latest version for the package. */
  latestVersion?: Maybe<PackageVersion>
  /** Identifies the name of the package. */
  name: Scalars["String"]
  /** Identifies the type of the package. */
  packageType: PackageType
  /** The repository this package belongs to. */
  repository?: Maybe<Repository>
  /** Statistics about package activity. */
  statistics?: Maybe<PackageStatistics>
  /** Find package version by version string. */
  version?: Maybe<PackageVersion>
  /** list of versions for this package */
  versions: PackageVersionConnection
}

/** Information for an uploaded package. */
export type PackageVersionArgs = {
  version: Scalars["String"]
}

/** Information for an uploaded package. */
export type PackageVersionsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<PackageVersionOrder>
}

/** The connection type for Package. */
export type PackageConnection = {
  __typename?: "PackageConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PackageEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Package>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type PackageEdge = {
  __typename?: "PackageEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<Package>
}

/** A file in a package version. */
export type PackageFile = Node & {
  __typename?: "PackageFile"
  id: Scalars["ID"]
  /** MD5 hash of the file. */
  md5?: Maybe<Scalars["String"]>
  /** Name of the file. */
  name: Scalars["String"]
  /** The package version this file belongs to. */
  packageVersion?: Maybe<PackageVersion>
  /** SHA1 hash of the file. */
  sha1?: Maybe<Scalars["String"]>
  /** SHA256 hash of the file. */
  sha256?: Maybe<Scalars["String"]>
  /** Size of the file in bytes. */
  size?: Maybe<Scalars["Int"]>
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"]
  /** URL to download the asset. */
  url?: Maybe<Scalars["URI"]>
}

/** The connection type for PackageFile. */
export type PackageFileConnection = {
  __typename?: "PackageFileConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PackageFileEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<PackageFile>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type PackageFileEdge = {
  __typename?: "PackageFileEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<PackageFile>
}

/** Ways in which lists of package files can be ordered upon return. */
export type PackageFileOrder = {
  /** The direction in which to order package files by the specified field. */
  direction?: Maybe<OrderDirection>
  /** The field in which to order package files by. */
  field?: Maybe<PackageFileOrderField>
}

/** Properties by which package file connections can be ordered. */
export enum PackageFileOrderField {
  /** Order package files by creation time */
  CreatedAt = "CREATED_AT",
}

/** Ways in which lists of packages can be ordered upon return. */
export type PackageOrder = {
  /** The direction in which to order packages by the specified field. */
  direction?: Maybe<OrderDirection>
  /** The field in which to order packages by. */
  field?: Maybe<PackageOrderField>
}

/** Properties by which package connections can be ordered. */
export enum PackageOrderField {
  /** Order packages by creation time */
  CreatedAt = "CREATED_AT",
}

/** Represents an owner of a package. */
export type PackageOwner = {
  id: Scalars["ID"]
  /** A list of packages under the owner. */
  packages: PackageConnection
}

/** Represents an owner of a package. */
export type PackageOwnerPackagesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  names?: Maybe<Array<Maybe<Scalars["String"]>>>
  orderBy?: Maybe<PackageOrder>
  packageType?: Maybe<PackageType>
  repositoryId?: Maybe<Scalars["ID"]>
}

/** Represents a object that contains package activity statistics such as downloads. */
export type PackageStatistics = {
  __typename?: "PackageStatistics"
  /** Number of times the package was downloaded since it was created. */
  downloadsTotalCount: Scalars["Int"]
}

/** A version tag contains the mapping between a tag name and a version. */
export type PackageTag = Node & {
  __typename?: "PackageTag"
  id: Scalars["ID"]
  /** Identifies the tag name of the version. */
  name: Scalars["String"]
  /** Version that the tag is associated with. */
  version?: Maybe<PackageVersion>
}

/** The possible types of a package. */
export enum PackageType {
  /** A debian package. */
  Debian = "DEBIAN",
  /** A docker image. */
  Docker = "DOCKER",
  /** A maven package. */
  Maven = "MAVEN",
  /** An npm package. */
  Npm = "NPM",
  /** A nuget package. */
  Nuget = "NUGET",
  /** A python package. */
  Pypi = "PYPI",
  /** A rubygems package. */
  Rubygems = "RUBYGEMS",
}

/** Information about a specific package version. */
export type PackageVersion = Node & {
  __typename?: "PackageVersion"
  /** List of files associated with this package version */
  files: PackageFileConnection
  id: Scalars["ID"]
  /** The package associated with this version. */
  package?: Maybe<Package>
  /** The platform this version was built for. */
  platform?: Maybe<Scalars["String"]>
  /** Whether or not this version is a pre-release. */
  preRelease: Scalars["Boolean"]
  /** The README of this package version. */
  readme?: Maybe<Scalars["String"]>
  /** The release associated with this package version. */
  release?: Maybe<Release>
  /** Statistics about package activity. */
  statistics?: Maybe<PackageVersionStatistics>
  /** The package version summary. */
  summary?: Maybe<Scalars["String"]>
  /** The version string. */
  version: Scalars["String"]
}

/** Information about a specific package version. */
export type PackageVersionFilesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<PackageFileOrder>
}

/** The connection type for PackageVersion. */
export type PackageVersionConnection = {
  __typename?: "PackageVersionConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PackageVersionEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<PackageVersion>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type PackageVersionEdge = {
  __typename?: "PackageVersionEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<PackageVersion>
}

/** Ways in which lists of package versions can be ordered upon return. */
export type PackageVersionOrder = {
  /** The direction in which to order package versions by the specified field. */
  direction?: Maybe<OrderDirection>
  /** The field in which to order package versions by. */
  field?: Maybe<PackageVersionOrderField>
}

/** Properties by which package version connections can be ordered. */
export enum PackageVersionOrderField {
  /** Order package versions by creation time */
  CreatedAt = "CREATED_AT",
}

/** Represents a object that contains package version activity statistics such as downloads. */
export type PackageVersionStatistics = {
  __typename?: "PackageVersionStatistics"
  /** Number of times the package was downloaded since it was created. */
  downloadsTotalCount: Scalars["Int"]
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: "PageInfo"
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"]
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"]
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]>
}

/** Types that can grant permissions on a repository to a user */
export type PermissionGranter = Organization | Repository | Team

/** A level of permission and source for a user's access to a repository. */
export type PermissionSource = {
  __typename?: "PermissionSource"
  /** The organization the repository belongs to. */
  organization: Organization
  /** The level of access this source has granted to the user. */
  permission: DefaultRepositoryPermissionField
  /** The source of this permission. */
  source: PermissionGranter
}

/** Types that can be pinned to a profile page. */
export type PinnableItem = Gist | Repository

/** The connection type for PinnableItem. */
export type PinnableItemConnection = {
  __typename?: "PinnableItemConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PinnableItemEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<PinnableItem>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type PinnableItemEdge = {
  __typename?: "PinnableItemEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<PinnableItem>
}

/** Represents items that can be pinned to a profile page or dashboard. */
export enum PinnableItemType {
  /** A gist. */
  Gist = "GIST",
  /** An issue. */
  Issue = "ISSUE",
  /** An organization. */
  Organization = "ORGANIZATION",
  /** A project. */
  Project = "PROJECT",
  /** A pull request. */
  PullRequest = "PULL_REQUEST",
  /** A repository. */
  Repository = "REPOSITORY",
  /** A team. */
  Team = "TEAM",
  /** A user. */
  User = "USER",
}

/** Represents a 'pinned' event on a given issue or pull request. */
export type PinnedEvent = Node & {
  __typename?: "PinnedEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  id: Scalars["ID"]
  /** Identifies the issue associated with the event. */
  issue: Issue
}

/** Audit log entry for a private_repository_forking.disable event. */
export type PrivateRepositoryForkingDisableAuditEntry = AuditEntry &
  EnterpriseAuditEntryData &
  Node &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData & {
    __typename?: "PrivateRepositoryForkingDisableAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    /** The HTTP path for this enterprise. */
    enterpriseResourcePath?: Maybe<Scalars["URI"]>
    /** The slug of the enterprise. */
    enterpriseSlug?: Maybe<Scalars["String"]>
    /** The HTTP URL for this enterprise. */
    enterpriseUrl?: Maybe<Scalars["URI"]>
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The repository associated with the action */
    repository?: Maybe<Repository>
    /** The name of the repository */
    repositoryName?: Maybe<Scalars["String"]>
    /** The HTTP path for the repository */
    repositoryResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the repository */
    repositoryUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** Audit log entry for a private_repository_forking.enable event. */
export type PrivateRepositoryForkingEnableAuditEntry = AuditEntry &
  EnterpriseAuditEntryData &
  Node &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData & {
    __typename?: "PrivateRepositoryForkingEnableAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    /** The HTTP path for this enterprise. */
    enterpriseResourcePath?: Maybe<Scalars["URI"]>
    /** The slug of the enterprise. */
    enterpriseSlug?: Maybe<Scalars["String"]>
    /** The HTTP URL for this enterprise. */
    enterpriseUrl?: Maybe<Scalars["URI"]>
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The repository associated with the action */
    repository?: Maybe<Repository>
    /** The name of the repository */
    repositoryName?: Maybe<Scalars["String"]>
    /** The HTTP path for the repository */
    repositoryResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the repository */
    repositoryUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/**
 * A curatable list of repositories relating to a repository owner, which defaults
 * to showing the most popular repositories they own.
 */
export type ProfileItemShowcase = {
  __typename?: "ProfileItemShowcase"
  /** Whether or not the owner has pinned any repositories or gists. */
  hasPinnedItems: Scalars["Boolean"]
  /**
   * The repositories and gists in the showcase. If the profile owner has any
   * pinned items, those will be returned. Otherwise, the profile owner's popular
   * repositories will be returned.
   */
  items: PinnableItemConnection
}

/**
 * A curatable list of repositories relating to a repository owner, which defaults
 * to showing the most popular repositories they own.
 */
export type ProfileItemShowcaseItemsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** Represents any entity on GitHub that has a profile page. */
export type ProfileOwner = {
  /** Determine if this repository owner has any items that can be pinned to their profile. */
  anyPinnableItems: Scalars["Boolean"]
  /** The public profile email. */
  email?: Maybe<Scalars["String"]>
  id: Scalars["ID"]
  /**
   * Showcases a selection of repositories and gists that the profile owner has
   * either curated or that have been selected automatically based on popularity.
   */
  itemShowcase: ProfileItemShowcase
  /** The public profile location. */
  location?: Maybe<Scalars["String"]>
  /** The username used to login. */
  login: Scalars["String"]
  /** The public profile name. */
  name?: Maybe<Scalars["String"]>
  /** A list of repositories and gists this profile owner can pin to their profile. */
  pinnableItems: PinnableItemConnection
  /** A list of repositories and gists this profile owner has pinned to their profile */
  pinnedItems: PinnableItemConnection
  /** Returns how many more items this profile owner can pin to their profile. */
  pinnedItemsRemaining: Scalars["Int"]
  /** Can the viewer pin repositories and gists to the profile? */
  viewerCanChangePinnedItems: Scalars["Boolean"]
  /** The public profile website URL. */
  websiteUrl?: Maybe<Scalars["URI"]>
}

/** Represents any entity on GitHub that has a profile page. */
export type ProfileOwnerAnyPinnableItemsArgs = {
  type?: Maybe<PinnableItemType>
}

/** Represents any entity on GitHub that has a profile page. */
export type ProfileOwnerPinnableItemsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  types?: Maybe<Array<PinnableItemType>>
}

/** Represents any entity on GitHub that has a profile page. */
export type ProfileOwnerPinnedItemsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  types?: Maybe<Array<PinnableItemType>>
}

/** Projects manage issues, pull requests and notes within a project owner. */
export type Project = Closable &
  Node &
  Updatable & {
    __typename?: "Project"
    /** The project's description body. */
    body?: Maybe<Scalars["String"]>
    /** The projects description body rendered to HTML. */
    bodyHTML: Scalars["HTML"]
    /** `true` if the object is closed (definition of closed may depend on type) */
    closed: Scalars["Boolean"]
    /** Identifies the date and time when the object was closed. */
    closedAt?: Maybe<Scalars["DateTime"]>
    /** List of columns in the project */
    columns: ProjectColumnConnection
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["DateTime"]
    /** The actor who originally created the project. */
    creator?: Maybe<Actor>
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>
    id: Scalars["ID"]
    /** The project's name. */
    name: Scalars["String"]
    /** The project's number. */
    number: Scalars["Int"]
    /** The project's owner. Currently limited to repositories, organizations, and users. */
    owner: ProjectOwner
    /** List of pending cards in this project */
    pendingCards: ProjectCardConnection
    /** Project progress details. */
    progress: ProjectProgress
    /** The HTTP path for this project */
    resourcePath: Scalars["URI"]
    /** Whether the project is open or closed. */
    state: ProjectState
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["DateTime"]
    /** The HTTP URL for this project */
    url: Scalars["URI"]
    /** Check if the current viewer can update this object. */
    viewerCanUpdate: Scalars["Boolean"]
  }

/** Projects manage issues, pull requests and notes within a project owner. */
export type ProjectColumnsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** Projects manage issues, pull requests and notes within a project owner. */
export type ProjectPendingCardsArgs = {
  after?: Maybe<Scalars["String"]>
  archivedStates?: Maybe<Array<Maybe<ProjectCardArchivedState>>>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** A card in a project. */
export type ProjectCard = Node & {
  __typename?: "ProjectCard"
  /**
   * The project column this card is associated under. A card may only belong to one
   * project column at a time. The column field will be null if the card is created
   * in a pending state and has yet to be associated with a column. Once cards are
   * associated with a column, they will not become pending in the future.
   */
  column?: Maybe<ProjectColumn>
  /** The card content item */
  content?: Maybe<ProjectCardItem>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  /** The actor who created this card */
  creator?: Maybe<Actor>
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>
  id: Scalars["ID"]
  /** Whether the card is archived */
  isArchived: Scalars["Boolean"]
  /** The card note */
  note?: Maybe<Scalars["String"]>
  /** The project that contains this card. */
  project: Project
  /** The HTTP path for this card */
  resourcePath: Scalars["URI"]
  /** The state of ProjectCard */
  state?: Maybe<ProjectCardState>
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"]
  /** The HTTP URL for this card */
  url: Scalars["URI"]
}

/** The possible archived states of a project card. */
export enum ProjectCardArchivedState {
  /** A project card that is archived */
  Archived = "ARCHIVED",
  /** A project card that is not archived */
  NotArchived = "NOT_ARCHIVED",
}

/** The connection type for ProjectCard. */
export type ProjectCardConnection = {
  __typename?: "ProjectCardConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ProjectCardEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<ProjectCard>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type ProjectCardEdge = {
  __typename?: "ProjectCardEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<ProjectCard>
}

/** Types that can be inside Project Cards. */
export type ProjectCardItem = Issue | PullRequest

/** Various content states of a ProjectCard */
export enum ProjectCardState {
  /** The card has content only. */
  ContentOnly = "CONTENT_ONLY",
  /** The card has a note only. */
  NoteOnly = "NOTE_ONLY",
  /** The card is redacted. */
  Redacted = "REDACTED",
}

/** A column inside a project. */
export type ProjectColumn = Node & {
  __typename?: "ProjectColumn"
  /** List of cards in the column */
  cards: ProjectCardConnection
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>
  id: Scalars["ID"]
  /** The project column's name. */
  name: Scalars["String"]
  /** The project that contains this column. */
  project: Project
  /** The semantic purpose of the column */
  purpose?: Maybe<ProjectColumnPurpose>
  /** The HTTP path for this project column */
  resourcePath: Scalars["URI"]
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"]
  /** The HTTP URL for this project column */
  url: Scalars["URI"]
}

/** A column inside a project. */
export type ProjectColumnCardsArgs = {
  after?: Maybe<Scalars["String"]>
  archivedStates?: Maybe<Array<Maybe<ProjectCardArchivedState>>>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** The connection type for ProjectColumn. */
export type ProjectColumnConnection = {
  __typename?: "ProjectColumnConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ProjectColumnEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<ProjectColumn>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type ProjectColumnEdge = {
  __typename?: "ProjectColumnEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<ProjectColumn>
}

/** The semantic purpose of the column - todo, in progress, or done. */
export enum ProjectColumnPurpose {
  /** The column contains cards which are complete */
  Done = "DONE",
  /** The column contains cards which are currently being worked on */
  InProgress = "IN_PROGRESS",
  /** The column contains cards still to be worked on */
  Todo = "TODO",
}

/** A list of projects associated with the owner. */
export type ProjectConnection = {
  __typename?: "ProjectConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ProjectEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Project>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type ProjectEdge = {
  __typename?: "ProjectEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<Project>
}

/** Ways in which lists of projects can be ordered upon return. */
export type ProjectOrder = {
  /** The direction in which to order projects by the specified field. */
  direction: OrderDirection
  /** The field in which to order projects by. */
  field: ProjectOrderField
}

/** Properties by which project connections can be ordered. */
export enum ProjectOrderField {
  /** Order projects by creation time */
  CreatedAt = "CREATED_AT",
  /** Order projects by name */
  Name = "NAME",
  /** Order projects by update time */
  UpdatedAt = "UPDATED_AT",
}

/** Represents an owner of a Project. */
export type ProjectOwner = {
  id: Scalars["ID"]
  /** Find project by number. */
  project?: Maybe<Project>
  /** A list of projects under the owner. */
  projects: ProjectConnection
  /** The HTTP path listing owners projects */
  projectsResourcePath: Scalars["URI"]
  /** The HTTP URL listing owners projects */
  projectsUrl: Scalars["URI"]
  /** Can the current viewer create new projects on this owner. */
  viewerCanCreateProjects: Scalars["Boolean"]
}

/** Represents an owner of a Project. */
export type ProjectOwnerProjectArgs = {
  number: Scalars["Int"]
}

/** Represents an owner of a Project. */
export type ProjectOwnerProjectsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<ProjectOrder>
  search?: Maybe<Scalars["String"]>
  states?: Maybe<Array<ProjectState>>
}

/** Project progress stats. */
export type ProjectProgress = {
  __typename?: "ProjectProgress"
  /** The number of done cards. */
  doneCount: Scalars["Int"]
  /** The percentage of done cards. */
  donePercentage: Scalars["Float"]
  /** Whether progress tracking is enabled and cards with purpose exist for this project */
  enabled: Scalars["Boolean"]
  /** The number of in-progress cards. */
  inProgressCount: Scalars["Int"]
  /** The percentage of in-progress cards. */
  inProgressPercentage: Scalars["Float"]
  /** The number of to do cards. */
  todoCount: Scalars["Int"]
  /** The percentage of to do cards. */
  todoPercentage: Scalars["Float"]
}

/** State of the project; either 'open' or 'closed' */
export enum ProjectState {
  /** The project is closed. */
  Closed = "CLOSED",
  /** The project is open. */
  Open = "OPEN",
}

/** GitHub-provided templates for Projects */
export enum ProjectTemplate {
  /** Create a board with v2 triggers to automatically move cards across To do, In progress and Done columns. */
  AutomatedKanbanV2 = "AUTOMATED_KANBAN_V2",
  /** Create a board with triggers to automatically move cards across columns with review automation. */
  AutomatedReviewsKanban = "AUTOMATED_REVIEWS_KANBAN",
  /** Create a board with columns for To do, In progress and Done. */
  BasicKanban = "BASIC_KANBAN",
  /** Create a board to triage and prioritize bugs with To do, priority, and Done columns. */
  BugTriage = "BUG_TRIAGE",
}

/** A user's public key. */
export type PublicKey = Node & {
  __typename?: "PublicKey"
  /** The last time this authorization was used to perform an action. Values will be null for keys not owned by the user. */
  accessedAt?: Maybe<Scalars["DateTime"]>
  /**
   * Identifies the date and time when the key was created. Keys created before
   * March 5th, 2014 have inaccurate values. Values will be null for keys not owned by the user.
   */
  createdAt?: Maybe<Scalars["DateTime"]>
  /** The fingerprint for this PublicKey. */
  fingerprint: Scalars["String"]
  id: Scalars["ID"]
  /** Whether this PublicKey is read-only or not. Values will be null for keys not owned by the user. */
  isReadOnly?: Maybe<Scalars["Boolean"]>
  /** The public key string. */
  key: Scalars["String"]
  /**
   * Identifies the date and time when the key was updated. Keys created before
   * March 5th, 2014 may have inaccurate values. Values will be null for keys not
   * owned by the user.
   */
  updatedAt?: Maybe<Scalars["DateTime"]>
}

/** The connection type for PublicKey. */
export type PublicKeyConnection = {
  __typename?: "PublicKeyConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PublicKeyEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<PublicKey>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type PublicKeyEdge = {
  __typename?: "PublicKeyEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<PublicKey>
}

/** A repository pull request. */
export type PullRequest = Assignable &
  Closable &
  Comment &
  Labelable &
  Lockable &
  Node &
  Reactable &
  RepositoryNode &
  Subscribable &
  UniformResourceLocatable &
  Updatable &
  UpdatableComment & {
    __typename?: "PullRequest"
    /** Reason that the conversation was locked. */
    activeLockReason?: Maybe<LockReason>
    /** The number of additions in this pull request. */
    additions: Scalars["Int"]
    /** A list of Users assigned to this object. */
    assignees: UserConnection
    /** The actor who authored the comment. */
    author?: Maybe<Actor>
    /** Author's association with the subject of the comment. */
    authorAssociation: CommentAuthorAssociation
    /** Identifies the base Ref associated with the pull request. */
    baseRef?: Maybe<Ref>
    /** Identifies the name of the base Ref associated with the pull request, even if the ref has been deleted. */
    baseRefName: Scalars["String"]
    /** Identifies the oid of the base ref associated with the pull request, even if the ref has been deleted. */
    baseRefOid: Scalars["GitObjectID"]
    /** The repository associated with this pull request's base Ref. */
    baseRepository?: Maybe<Repository>
    /** The body as Markdown. */
    body: Scalars["String"]
    /** The body rendered to HTML. */
    bodyHTML: Scalars["HTML"]
    /** The body rendered to text. */
    bodyText: Scalars["String"]
    /** The number of changed files in this pull request. */
    changedFiles: Scalars["Int"]
    /** The HTTP path for the checks of this pull request. */
    checksResourcePath: Scalars["URI"]
    /** The HTTP URL for the checks of this pull request. */
    checksUrl: Scalars["URI"]
    /** `true` if the pull request is closed */
    closed: Scalars["Boolean"]
    /** Identifies the date and time when the object was closed. */
    closedAt?: Maybe<Scalars["DateTime"]>
    /** A list of comments associated with the pull request. */
    comments: IssueCommentConnection
    /** A list of commits present in this pull request's head branch not present in the base branch. */
    commits: PullRequestCommitConnection
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["DateTime"]
    /** Check if this comment was created via an email reply. */
    createdViaEmail: Scalars["Boolean"]
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>
    /** The number of deletions in this pull request. */
    deletions: Scalars["Int"]
    /** The actor who edited this pull request's body. */
    editor?: Maybe<Actor>
    /** Lists the files changed within this pull request. */
    files?: Maybe<PullRequestChangedFileConnection>
    /** Identifies the head Ref associated with the pull request. */
    headRef?: Maybe<Ref>
    /** Identifies the name of the head Ref associated with the pull request, even if the ref has been deleted. */
    headRefName: Scalars["String"]
    /** Identifies the oid of the head ref associated with the pull request, even if the ref has been deleted. */
    headRefOid: Scalars["GitObjectID"]
    /** The repository associated with this pull request's head Ref. */
    headRepository?: Maybe<Repository>
    /** The owner of the repository associated with this pull request's head Ref. */
    headRepositoryOwner?: Maybe<RepositoryOwner>
    /** The hovercard information for this issue */
    hovercard: Hovercard
    id: Scalars["ID"]
    /** Check if this comment was edited and includes an edit with the creation data */
    includesCreatedEdit: Scalars["Boolean"]
    /** The head and base repositories are different. */
    isCrossRepository: Scalars["Boolean"]
    /** Identifies if the pull request is a draft. */
    isDraft: Scalars["Boolean"]
    /** Is this pull request read by the viewer */
    isReadByViewer?: Maybe<Scalars["Boolean"]>
    /** A list of labels associated with the object. */
    labels?: Maybe<LabelConnection>
    /** The moment the editor made the last edit */
    lastEditedAt?: Maybe<Scalars["DateTime"]>
    /** A list of latest reviews per user associated with the pull request. */
    latestOpinionatedReviews?: Maybe<PullRequestReviewConnection>
    /** A list of latest reviews per user associated with the pull request that are not also pending review. */
    latestReviews?: Maybe<PullRequestReviewConnection>
    /** `true` if the pull request is locked */
    locked: Scalars["Boolean"]
    /** Indicates whether maintainers can modify the pull request. */
    maintainerCanModify: Scalars["Boolean"]
    /** The commit that was created when this pull request was merged. */
    mergeCommit?: Maybe<Commit>
    /** Whether or not the pull request can be merged based on the existence of merge conflicts. */
    mergeable: MergeableState
    /** Whether or not the pull request was merged. */
    merged: Scalars["Boolean"]
    /** The date and time that the pull request was merged. */
    mergedAt?: Maybe<Scalars["DateTime"]>
    /** The actor who merged the pull request. */
    mergedBy?: Maybe<Actor>
    /** Identifies the milestone associated with the pull request. */
    milestone?: Maybe<Milestone>
    /** Identifies the pull request number. */
    number: Scalars["Int"]
    /** A list of Users that are participating in the Pull Request conversation. */
    participants: UserConnection
    /** The permalink to the pull request. */
    permalink: Scalars["URI"]
    /**
     * The commit that GitHub automatically generated to test if this pull request
     * could be merged. This field will not return a value if the pull request is
     * merged, or if the test merge commit is still being generated. See the
     * `mergeable` field for more details on the mergeability of the pull request.
     */
    potentialMergeCommit?: Maybe<Commit>
    /** List of project cards associated with this pull request. */
    projectCards: ProjectCardConnection
    /** Identifies when the comment was published at. */
    publishedAt?: Maybe<Scalars["DateTime"]>
    /** A list of reactions grouped by content left on the subject. */
    reactionGroups?: Maybe<Array<ReactionGroup>>
    /** A list of Reactions left on the Issue. */
    reactions: ReactionConnection
    /** The repository associated with this node. */
    repository: Repository
    /** The HTTP path for this pull request. */
    resourcePath: Scalars["URI"]
    /** The HTTP path for reverting this pull request. */
    revertResourcePath: Scalars["URI"]
    /** The HTTP URL for reverting this pull request. */
    revertUrl: Scalars["URI"]
    /** The current status of this pull request with respect to code review. */
    reviewDecision?: Maybe<PullRequestReviewDecision>
    /** A list of review requests associated with the pull request. */
    reviewRequests?: Maybe<ReviewRequestConnection>
    /** The list of all review threads for this pull request. */
    reviewThreads: PullRequestReviewThreadConnection
    /** A list of reviews associated with the pull request. */
    reviews?: Maybe<PullRequestReviewConnection>
    /** Identifies the state of the pull request. */
    state: PullRequestState
    /** A list of reviewer suggestions based on commit history and past review comments. */
    suggestedReviewers: Array<Maybe<SuggestedReviewer>>
    /**
     * A list of events, comments, commits, etc. associated with the pull request.
     * @deprecated `timeline` will be removed Use PullRequest.timelineItems instead. Removal on 2020-10-01 UTC.
     */
    timeline: PullRequestTimelineConnection
    /** A list of events, comments, commits, etc. associated with the pull request. */
    timelineItems: PullRequestTimelineItemsConnection
    /** Identifies the pull request title. */
    title: Scalars["String"]
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["DateTime"]
    /** The HTTP URL for this pull request. */
    url: Scalars["URI"]
    /** A list of edits to this content. */
    userContentEdits?: Maybe<UserContentEditConnection>
    /** Whether or not the viewer can apply suggestion. */
    viewerCanApplySuggestion: Scalars["Boolean"]
    /** Check if the viewer can restore the deleted head ref. */
    viewerCanDeleteHeadRef: Scalars["Boolean"]
    /** Can user react to this subject */
    viewerCanReact: Scalars["Boolean"]
    /** Check if the viewer is able to change their subscription status for the repository. */
    viewerCanSubscribe: Scalars["Boolean"]
    /** Check if the current viewer can update this object. */
    viewerCanUpdate: Scalars["Boolean"]
    /** Reasons why the current viewer can not update this comment. */
    viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>
    /** Did the viewer author this comment. */
    viewerDidAuthor: Scalars["Boolean"]
    /** The merge body text for the viewer and method. */
    viewerMergeBodyText: Scalars["String"]
    /** The merge headline text for the viewer and method. */
    viewerMergeHeadlineText: Scalars["String"]
    /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
    viewerSubscription?: Maybe<SubscriptionState>
  }

/** A repository pull request. */
export type PullRequestAssigneesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** A repository pull request. */
export type PullRequestCommentsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** A repository pull request. */
export type PullRequestCommitsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** A repository pull request. */
export type PullRequestFilesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** A repository pull request. */
export type PullRequestHovercardArgs = {
  includeNotificationContexts?: Maybe<Scalars["Boolean"]>
}

/** A repository pull request. */
export type PullRequestLabelsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<LabelOrder>
}

/** A repository pull request. */
export type PullRequestLatestOpinionatedReviewsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  writersOnly?: Maybe<Scalars["Boolean"]>
}

/** A repository pull request. */
export type PullRequestLatestReviewsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** A repository pull request. */
export type PullRequestParticipantsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** A repository pull request. */
export type PullRequestProjectCardsArgs = {
  after?: Maybe<Scalars["String"]>
  archivedStates?: Maybe<Array<Maybe<ProjectCardArchivedState>>>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** A repository pull request. */
export type PullRequestReactionsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  content?: Maybe<ReactionContent>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<ReactionOrder>
}

/** A repository pull request. */
export type PullRequestReviewRequestsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** A repository pull request. */
export type PullRequestReviewThreadsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** A repository pull request. */
export type PullRequestReviewsArgs = {
  after?: Maybe<Scalars["String"]>
  author?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  states?: Maybe<Array<PullRequestReviewState>>
}

/** A repository pull request. */
export type PullRequestTimelineArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  since?: Maybe<Scalars["DateTime"]>
}

/** A repository pull request. */
export type PullRequestTimelineItemsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  itemTypes?: Maybe<Array<PullRequestTimelineItemsItemType>>
  last?: Maybe<Scalars["Int"]>
  since?: Maybe<Scalars["DateTime"]>
  skip?: Maybe<Scalars["Int"]>
}

/** A repository pull request. */
export type PullRequestUserContentEditsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** A repository pull request. */
export type PullRequestViewerMergeBodyTextArgs = {
  mergeType?: Maybe<PullRequestMergeMethod>
}

/** A repository pull request. */
export type PullRequestViewerMergeHeadlineTextArgs = {
  mergeType?: Maybe<PullRequestMergeMethod>
}

/** A file changed in a pull request. */
export type PullRequestChangedFile = {
  __typename?: "PullRequestChangedFile"
  /** The number of additions to the file. */
  additions: Scalars["Int"]
  /** The number of deletions to the file. */
  deletions: Scalars["Int"]
  /** The path of the file. */
  path: Scalars["String"]
  /** The state of the file for the viewer. */
  viewerViewedState: FileViewedState
}

/** The connection type for PullRequestChangedFile. */
export type PullRequestChangedFileConnection = {
  __typename?: "PullRequestChangedFileConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PullRequestChangedFileEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<PullRequestChangedFile>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type PullRequestChangedFileEdge = {
  __typename?: "PullRequestChangedFileEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<PullRequestChangedFile>
}

/** Represents a Git commit part of a pull request. */
export type PullRequestCommit = Node &
  UniformResourceLocatable & {
    __typename?: "PullRequestCommit"
    /** The Git commit object */
    commit: Commit
    id: Scalars["ID"]
    /** The pull request this commit belongs to */
    pullRequest: PullRequest
    /** The HTTP path for this pull request commit */
    resourcePath: Scalars["URI"]
    /** The HTTP URL for this pull request commit */
    url: Scalars["URI"]
  }

/** Represents a commit comment thread part of a pull request. */
export type PullRequestCommitCommentThread = Node &
  RepositoryNode & {
    __typename?: "PullRequestCommitCommentThread"
    /** The comments that exist in this thread. */
    comments: CommitCommentConnection
    /** The commit the comments were made on. */
    commit: Commit
    id: Scalars["ID"]
    /** The file the comments were made on. */
    path?: Maybe<Scalars["String"]>
    /** The position in the diff for the commit that the comment was made on. */
    position?: Maybe<Scalars["Int"]>
    /** The pull request this commit comment thread belongs to */
    pullRequest: PullRequest
    /** The repository associated with this node. */
    repository: Repository
  }

/** Represents a commit comment thread part of a pull request. */
export type PullRequestCommitCommentThreadCommentsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** The connection type for PullRequestCommit. */
export type PullRequestCommitConnection = {
  __typename?: "PullRequestCommitConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PullRequestCommitEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<PullRequestCommit>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type PullRequestCommitEdge = {
  __typename?: "PullRequestCommitEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<PullRequestCommit>
}

/** The connection type for PullRequest. */
export type PullRequestConnection = {
  __typename?: "PullRequestConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PullRequestEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<PullRequest>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** This aggregates pull requests opened by a user within one repository. */
export type PullRequestContributionsByRepository = {
  __typename?: "PullRequestContributionsByRepository"
  /** The pull request contributions. */
  contributions: CreatedPullRequestContributionConnection
  /** The repository in which the pull requests were opened. */
  repository: Repository
}

/** This aggregates pull requests opened by a user within one repository. */
export type PullRequestContributionsByRepositoryContributionsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<ContributionOrder>
}

/** An edge in a connection. */
export type PullRequestEdge = {
  __typename?: "PullRequestEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<PullRequest>
}

/** Represents available types of methods to use when merging a pull request. */
export enum PullRequestMergeMethod {
  /** Add all commits from the head branch to the base branch with a merge commit. */
  Merge = "MERGE",
  /** Add all commits from the head branch onto the base branch individually. */
  Rebase = "REBASE",
  /** Combine all commits from the head branch into a single commit in the base branch. */
  Squash = "SQUASH",
}

/** Ways in which lists of issues can be ordered upon return. */
export type PullRequestOrder = {
  /** The direction in which to order pull requests by the specified field. */
  direction: OrderDirection
  /** The field in which to order pull requests by. */
  field: PullRequestOrderField
}

/** Properties by which pull_requests connections can be ordered. */
export enum PullRequestOrderField {
  /** Order pull_requests by creation time */
  CreatedAt = "CREATED_AT",
  /** Order pull_requests by update time */
  UpdatedAt = "UPDATED_AT",
}

/** A review object for a given pull request. */
export type PullRequestReview = Comment &
  Deletable &
  Node &
  Reactable &
  RepositoryNode &
  Updatable &
  UpdatableComment & {
    __typename?: "PullRequestReview"
    /** The actor who authored the comment. */
    author?: Maybe<Actor>
    /** Author's association with the subject of the comment. */
    authorAssociation: CommentAuthorAssociation
    /** Indicates whether the author of this review has push access to the repository. */
    authorCanPushToRepository: Scalars["Boolean"]
    /** Identifies the pull request review body. */
    body: Scalars["String"]
    /** The body rendered to HTML. */
    bodyHTML: Scalars["HTML"]
    /** The body of this review rendered as plain text. */
    bodyText: Scalars["String"]
    /** A list of review comments for the current pull request review. */
    comments: PullRequestReviewCommentConnection
    /** Identifies the commit associated with this pull request review. */
    commit?: Maybe<Commit>
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["DateTime"]
    /** Check if this comment was created via an email reply. */
    createdViaEmail: Scalars["Boolean"]
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>
    /** The actor who edited the comment. */
    editor?: Maybe<Actor>
    id: Scalars["ID"]
    /** Check if this comment was edited and includes an edit with the creation data */
    includesCreatedEdit: Scalars["Boolean"]
    /** The moment the editor made the last edit */
    lastEditedAt?: Maybe<Scalars["DateTime"]>
    /** A list of teams that this review was made on behalf of. */
    onBehalfOf: TeamConnection
    /** Identifies when the comment was published at. */
    publishedAt?: Maybe<Scalars["DateTime"]>
    /** Identifies the pull request associated with this pull request review. */
    pullRequest: PullRequest
    /** A list of reactions grouped by content left on the subject. */
    reactionGroups?: Maybe<Array<ReactionGroup>>
    /** A list of Reactions left on the Issue. */
    reactions: ReactionConnection
    /** The repository associated with this node. */
    repository: Repository
    /** The HTTP path permalink for this PullRequestReview. */
    resourcePath: Scalars["URI"]
    /** Identifies the current state of the pull request review. */
    state: PullRequestReviewState
    /** Identifies when the Pull Request Review was submitted */
    submittedAt?: Maybe<Scalars["DateTime"]>
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["DateTime"]
    /** The HTTP URL permalink for this PullRequestReview. */
    url: Scalars["URI"]
    /** A list of edits to this content. */
    userContentEdits?: Maybe<UserContentEditConnection>
    /** Check if the current viewer can delete this object. */
    viewerCanDelete: Scalars["Boolean"]
    /** Can user react to this subject */
    viewerCanReact: Scalars["Boolean"]
    /** Check if the current viewer can update this object. */
    viewerCanUpdate: Scalars["Boolean"]
    /** Reasons why the current viewer can not update this comment. */
    viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>
    /** Did the viewer author this comment. */
    viewerDidAuthor: Scalars["Boolean"]
  }

/** A review object for a given pull request. */
export type PullRequestReviewCommentsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** A review object for a given pull request. */
export type PullRequestReviewOnBehalfOfArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** A review object for a given pull request. */
export type PullRequestReviewReactionsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  content?: Maybe<ReactionContent>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<ReactionOrder>
}

/** A review object for a given pull request. */
export type PullRequestReviewUserContentEditsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** A review comment associated with a given repository pull request. */
export type PullRequestReviewComment = Comment &
  Deletable &
  Minimizable &
  Node &
  Reactable &
  RepositoryNode &
  Updatable &
  UpdatableComment & {
    __typename?: "PullRequestReviewComment"
    /** The actor who authored the comment. */
    author?: Maybe<Actor>
    /** Author's association with the subject of the comment. */
    authorAssociation: CommentAuthorAssociation
    /** The comment body of this review comment. */
    body: Scalars["String"]
    /** The body rendered to HTML. */
    bodyHTML: Scalars["HTML"]
    /** The comment body of this review comment rendered as plain text. */
    bodyText: Scalars["String"]
    /** Identifies the commit associated with the comment. */
    commit?: Maybe<Commit>
    /** Identifies when the comment was created. */
    createdAt: Scalars["DateTime"]
    /** Check if this comment was created via an email reply. */
    createdViaEmail: Scalars["Boolean"]
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>
    /** The diff hunk to which the comment applies. */
    diffHunk: Scalars["String"]
    /** Identifies when the comment was created in a draft state. */
    draftedAt: Scalars["DateTime"]
    /** The actor who edited the comment. */
    editor?: Maybe<Actor>
    id: Scalars["ID"]
    /** Check if this comment was edited and includes an edit with the creation data */
    includesCreatedEdit: Scalars["Boolean"]
    /** Returns whether or not a comment has been minimized. */
    isMinimized: Scalars["Boolean"]
    /** The moment the editor made the last edit */
    lastEditedAt?: Maybe<Scalars["DateTime"]>
    /** Returns why the comment was minimized. */
    minimizedReason?: Maybe<Scalars["String"]>
    /** Identifies the original commit associated with the comment. */
    originalCommit?: Maybe<Commit>
    /** The original line index in the diff to which the comment applies. */
    originalPosition: Scalars["Int"]
    /** Identifies when the comment body is outdated */
    outdated: Scalars["Boolean"]
    /** The path to which the comment applies. */
    path: Scalars["String"]
    /** The line index in the diff to which the comment applies. */
    position?: Maybe<Scalars["Int"]>
    /** Identifies when the comment was published at. */
    publishedAt?: Maybe<Scalars["DateTime"]>
    /** The pull request associated with this review comment. */
    pullRequest: PullRequest
    /** The pull request review associated with this review comment. */
    pullRequestReview?: Maybe<PullRequestReview>
    /** A list of reactions grouped by content left on the subject. */
    reactionGroups?: Maybe<Array<ReactionGroup>>
    /** A list of Reactions left on the Issue. */
    reactions: ReactionConnection
    /** The comment this is a reply to. */
    replyTo?: Maybe<PullRequestReviewComment>
    /** The repository associated with this node. */
    repository: Repository
    /** The HTTP path permalink for this review comment. */
    resourcePath: Scalars["URI"]
    /** Identifies the state of the comment. */
    state: PullRequestReviewCommentState
    /** Identifies when the comment was last updated. */
    updatedAt: Scalars["DateTime"]
    /** The HTTP URL permalink for this review comment. */
    url: Scalars["URI"]
    /** A list of edits to this content. */
    userContentEdits?: Maybe<UserContentEditConnection>
    /** Check if the current viewer can delete this object. */
    viewerCanDelete: Scalars["Boolean"]
    /** Check if the current viewer can minimize this object. */
    viewerCanMinimize: Scalars["Boolean"]
    /** Can user react to this subject */
    viewerCanReact: Scalars["Boolean"]
    /** Check if the current viewer can update this object. */
    viewerCanUpdate: Scalars["Boolean"]
    /** Reasons why the current viewer can not update this comment. */
    viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>
    /** Did the viewer author this comment. */
    viewerDidAuthor: Scalars["Boolean"]
  }

/** A review comment associated with a given repository pull request. */
export type PullRequestReviewCommentReactionsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  content?: Maybe<ReactionContent>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<ReactionOrder>
}

/** A review comment associated with a given repository pull request. */
export type PullRequestReviewCommentUserContentEditsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** The connection type for PullRequestReviewComment. */
export type PullRequestReviewCommentConnection = {
  __typename?: "PullRequestReviewCommentConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PullRequestReviewCommentEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<PullRequestReviewComment>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type PullRequestReviewCommentEdge = {
  __typename?: "PullRequestReviewCommentEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<PullRequestReviewComment>
}

/** The possible states of a pull request review comment. */
export enum PullRequestReviewCommentState {
  /** A comment that is part of a pending review */
  Pending = "PENDING",
  /** A comment that is part of a submitted review */
  Submitted = "SUBMITTED",
}

/** The connection type for PullRequestReview. */
export type PullRequestReviewConnection = {
  __typename?: "PullRequestReviewConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PullRequestReviewEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<PullRequestReview>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** This aggregates pull request reviews made by a user within one repository. */
export type PullRequestReviewContributionsByRepository = {
  __typename?: "PullRequestReviewContributionsByRepository"
  /** The pull request review contributions. */
  contributions: CreatedPullRequestReviewContributionConnection
  /** The repository in which the pull request reviews were made. */
  repository: Repository
}

/** This aggregates pull request reviews made by a user within one repository. */
export type PullRequestReviewContributionsByRepositoryContributionsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<ContributionOrder>
}

/** The review status of a pull request. */
export enum PullRequestReviewDecision {
  /** The pull request has received an approving review. */
  Approved = "APPROVED",
  /** Changes have been requested on the pull request. */
  ChangesRequested = "CHANGES_REQUESTED",
  /** A review is required before the pull request can be merged. */
  ReviewRequired = "REVIEW_REQUIRED",
}

/** An edge in a connection. */
export type PullRequestReviewEdge = {
  __typename?: "PullRequestReviewEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<PullRequestReview>
}

/** The possible events to perform on a pull request review. */
export enum PullRequestReviewEvent {
  /** Submit feedback and approve merging these changes. */
  Approve = "APPROVE",
  /** Submit general feedback without explicit approval. */
  Comment = "COMMENT",
  /** Dismiss review so it now longer effects merging. */
  Dismiss = "DISMISS",
  /** Submit feedback that must be addressed before merging. */
  RequestChanges = "REQUEST_CHANGES",
}

/** The possible states of a pull request review. */
export enum PullRequestReviewState {
  /** A review allowing the pull request to merge. */
  Approved = "APPROVED",
  /** A review blocking the pull request from merging. */
  ChangesRequested = "CHANGES_REQUESTED",
  /** An informational review. */
  Commented = "COMMENTED",
  /** A review that has been dismissed. */
  Dismissed = "DISMISSED",
  /** A review that has not yet been submitted. */
  Pending = "PENDING",
}

/** A threaded list of comments for a given pull request. */
export type PullRequestReviewThread = Node & {
  __typename?: "PullRequestReviewThread"
  /** A list of pull request comments associated with the thread. */
  comments: PullRequestReviewCommentConnection
  /** The side of the diff on which this thread was placed. */
  diffSide: DiffSide
  id: Scalars["ID"]
  /** Whether or not the thread has been collapsed (outdated or resolved) */
  isCollapsed: Scalars["Boolean"]
  /** Indicates whether this thread was outdated by newer changes. */
  isOutdated: Scalars["Boolean"]
  /** Whether this thread has been resolved */
  isResolved: Scalars["Boolean"]
  /** The line in the file to which this thread refers */
  line?: Maybe<Scalars["Int"]>
  /** The original line in the file to which this thread refers. */
  originalLine?: Maybe<Scalars["Int"]>
  /** The original start line in the file to which this thread refers (multi-line only). */
  originalStartLine?: Maybe<Scalars["Int"]>
  /** Identifies the file path of this thread. */
  path: Scalars["String"]
  /** Identifies the pull request associated with this thread. */
  pullRequest: PullRequest
  /** Identifies the repository associated with this thread. */
  repository: Repository
  /** The user who resolved this thread */
  resolvedBy?: Maybe<User>
  /** The side of the diff that the first line of the thread starts on (multi-line only) */
  startDiffSide?: Maybe<DiffSide>
  /** The start line in the file to which this thread refers (multi-line only) */
  startLine?: Maybe<Scalars["Int"]>
  /** Indicates whether the current viewer can reply to this thread. */
  viewerCanReply: Scalars["Boolean"]
  /** Whether or not the viewer can resolve this thread */
  viewerCanResolve: Scalars["Boolean"]
  /** Whether or not the viewer can unresolve this thread */
  viewerCanUnresolve: Scalars["Boolean"]
}

/** A threaded list of comments for a given pull request. */
export type PullRequestReviewThreadCommentsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  skip?: Maybe<Scalars["Int"]>
}

/** Review comment threads for a pull request review. */
export type PullRequestReviewThreadConnection = {
  __typename?: "PullRequestReviewThreadConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PullRequestReviewThreadEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<PullRequestReviewThread>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type PullRequestReviewThreadEdge = {
  __typename?: "PullRequestReviewThreadEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<PullRequestReviewThread>
}

/** Represents the latest point in the pull request timeline for which the viewer has seen the pull request's commits. */
export type PullRequestRevisionMarker = {
  __typename?: "PullRequestRevisionMarker"
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  /** The last commit the viewer has seen. */
  lastSeenCommit: Commit
  /** The pull request to which the marker belongs. */
  pullRequest: PullRequest
}

/** The possible states of a pull request. */
export enum PullRequestState {
  /** A pull request that has been closed without being merged. */
  Closed = "CLOSED",
  /** A pull request that has been closed by being merged. */
  Merged = "MERGED",
  /** A pull request that is still open. */
  Open = "OPEN",
}

/** The connection type for PullRequestTimelineItem. */
export type PullRequestTimelineConnection = {
  __typename?: "PullRequestTimelineConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PullRequestTimelineItemEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<PullRequestTimelineItem>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An item in an pull request timeline */
export type PullRequestTimelineItem =
  | AssignedEvent
  | BaseRefDeletedEvent
  | BaseRefForcePushedEvent
  | ClosedEvent
  | Commit
  | CommitCommentThread
  | CrossReferencedEvent
  | DemilestonedEvent
  | DeployedEvent
  | DeploymentEnvironmentChangedEvent
  | HeadRefDeletedEvent
  | HeadRefForcePushedEvent
  | HeadRefRestoredEvent
  | IssueComment
  | LabeledEvent
  | LockedEvent
  | MergedEvent
  | MilestonedEvent
  | PullRequestReview
  | PullRequestReviewComment
  | PullRequestReviewThread
  | ReferencedEvent
  | RenamedTitleEvent
  | ReopenedEvent
  | ReviewDismissedEvent
  | ReviewRequestRemovedEvent
  | ReviewRequestedEvent
  | SubscribedEvent
  | UnassignedEvent
  | UnlabeledEvent
  | UnlockedEvent
  | UnsubscribedEvent
  | UserBlockedEvent

/** An edge in a connection. */
export type PullRequestTimelineItemEdge = {
  __typename?: "PullRequestTimelineItemEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<PullRequestTimelineItem>
}

/** An item in a pull request timeline */
export type PullRequestTimelineItems =
  | AddedToProjectEvent
  | AssignedEvent
  | AutomaticBaseChangeFailedEvent
  | AutomaticBaseChangeSucceededEvent
  | BaseRefChangedEvent
  | BaseRefDeletedEvent
  | BaseRefForcePushedEvent
  | ClosedEvent
  | CommentDeletedEvent
  | ConnectedEvent
  | ConvertToDraftEvent
  | ConvertedNoteToIssueEvent
  | CrossReferencedEvent
  | DemilestonedEvent
  | DeployedEvent
  | DeploymentEnvironmentChangedEvent
  | DisconnectedEvent
  | HeadRefDeletedEvent
  | HeadRefForcePushedEvent
  | HeadRefRestoredEvent
  | IssueComment
  | LabeledEvent
  | LockedEvent
  | MarkedAsDuplicateEvent
  | MentionedEvent
  | MergedEvent
  | MilestonedEvent
  | MovedColumnsInProjectEvent
  | PinnedEvent
  | PullRequestCommit
  | PullRequestCommitCommentThread
  | PullRequestReview
  | PullRequestReviewThread
  | PullRequestRevisionMarker
  | ReadyForReviewEvent
  | ReferencedEvent
  | RemovedFromProjectEvent
  | RenamedTitleEvent
  | ReopenedEvent
  | ReviewDismissedEvent
  | ReviewRequestRemovedEvent
  | ReviewRequestedEvent
  | SubscribedEvent
  | TransferredEvent
  | UnassignedEvent
  | UnlabeledEvent
  | UnlockedEvent
  | UnmarkedAsDuplicateEvent
  | UnpinnedEvent
  | UnsubscribedEvent
  | UserBlockedEvent

/** The connection type for PullRequestTimelineItems. */
export type PullRequestTimelineItemsConnection = {
  __typename?: "PullRequestTimelineItemsConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PullRequestTimelineItemsEdge>>>
  /** Identifies the count of items after applying `before` and `after` filters. */
  filteredCount: Scalars["Int"]
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<PullRequestTimelineItems>>>
  /** Identifies the count of items after applying `before`/`after` filters and `first`/`last`/`skip` slicing. */
  pageCount: Scalars["Int"]
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
  /** Identifies the date and time when the timeline was last updated. */
  updatedAt: Scalars["DateTime"]
}

/** An edge in a connection. */
export type PullRequestTimelineItemsEdge = {
  __typename?: "PullRequestTimelineItemsEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<PullRequestTimelineItems>
}

/** The possible item types found in a timeline. */
export enum PullRequestTimelineItemsItemType {
  /** Represents a 'added_to_project' event on a given issue or pull request. */
  AddedToProjectEvent = "ADDED_TO_PROJECT_EVENT",
  /** Represents an 'assigned' event on any assignable object. */
  AssignedEvent = "ASSIGNED_EVENT",
  /** Represents a 'automatic_base_change_failed' event on a given pull request. */
  AutomaticBaseChangeFailedEvent = "AUTOMATIC_BASE_CHANGE_FAILED_EVENT",
  /** Represents a 'automatic_base_change_succeeded' event on a given pull request. */
  AutomaticBaseChangeSucceededEvent = "AUTOMATIC_BASE_CHANGE_SUCCEEDED_EVENT",
  /** Represents a 'base_ref_changed' event on a given issue or pull request. */
  BaseRefChangedEvent = "BASE_REF_CHANGED_EVENT",
  /** Represents a 'base_ref_deleted' event on a given pull request. */
  BaseRefDeletedEvent = "BASE_REF_DELETED_EVENT",
  /** Represents a 'base_ref_force_pushed' event on a given pull request. */
  BaseRefForcePushedEvent = "BASE_REF_FORCE_PUSHED_EVENT",
  /** Represents a 'closed' event on any `Closable`. */
  ClosedEvent = "CLOSED_EVENT",
  /** Represents a 'comment_deleted' event on a given issue or pull request. */
  CommentDeletedEvent = "COMMENT_DELETED_EVENT",
  /** Represents a 'connected' event on a given issue or pull request. */
  ConnectedEvent = "CONNECTED_EVENT",
  /** Represents a 'convert_to_draft' event on a given pull request. */
  ConvertToDraftEvent = "CONVERT_TO_DRAFT_EVENT",
  /** Represents a 'converted_note_to_issue' event on a given issue or pull request. */
  ConvertedNoteToIssueEvent = "CONVERTED_NOTE_TO_ISSUE_EVENT",
  /** Represents a mention made by one issue or pull request to another. */
  CrossReferencedEvent = "CROSS_REFERENCED_EVENT",
  /** Represents a 'demilestoned' event on a given issue or pull request. */
  DemilestonedEvent = "DEMILESTONED_EVENT",
  /** Represents a 'deployed' event on a given pull request. */
  DeployedEvent = "DEPLOYED_EVENT",
  /** Represents a 'deployment_environment_changed' event on a given pull request. */
  DeploymentEnvironmentChangedEvent = "DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT",
  /** Represents a 'disconnected' event on a given issue or pull request. */
  DisconnectedEvent = "DISCONNECTED_EVENT",
  /** Represents a 'head_ref_deleted' event on a given pull request. */
  HeadRefDeletedEvent = "HEAD_REF_DELETED_EVENT",
  /** Represents a 'head_ref_force_pushed' event on a given pull request. */
  HeadRefForcePushedEvent = "HEAD_REF_FORCE_PUSHED_EVENT",
  /** Represents a 'head_ref_restored' event on a given pull request. */
  HeadRefRestoredEvent = "HEAD_REF_RESTORED_EVENT",
  /** Represents a comment on an Issue. */
  IssueComment = "ISSUE_COMMENT",
  /** Represents a 'labeled' event on a given issue or pull request. */
  LabeledEvent = "LABELED_EVENT",
  /** Represents a 'locked' event on a given issue or pull request. */
  LockedEvent = "LOCKED_EVENT",
  /** Represents a 'marked_as_duplicate' event on a given issue or pull request. */
  MarkedAsDuplicateEvent = "MARKED_AS_DUPLICATE_EVENT",
  /** Represents a 'mentioned' event on a given issue or pull request. */
  MentionedEvent = "MENTIONED_EVENT",
  /** Represents a 'merged' event on a given pull request. */
  MergedEvent = "MERGED_EVENT",
  /** Represents a 'milestoned' event on a given issue or pull request. */
  MilestonedEvent = "MILESTONED_EVENT",
  /** Represents a 'moved_columns_in_project' event on a given issue or pull request. */
  MovedColumnsInProjectEvent = "MOVED_COLUMNS_IN_PROJECT_EVENT",
  /** Represents a 'pinned' event on a given issue or pull request. */
  PinnedEvent = "PINNED_EVENT",
  /** Represents a Git commit part of a pull request. */
  PullRequestCommit = "PULL_REQUEST_COMMIT",
  /** Represents a commit comment thread part of a pull request. */
  PullRequestCommitCommentThread = "PULL_REQUEST_COMMIT_COMMENT_THREAD",
  /** A review object for a given pull request. */
  PullRequestReview = "PULL_REQUEST_REVIEW",
  /** A threaded list of comments for a given pull request. */
  PullRequestReviewThread = "PULL_REQUEST_REVIEW_THREAD",
  /** Represents the latest point in the pull request timeline for which the viewer has seen the pull request's commits. */
  PullRequestRevisionMarker = "PULL_REQUEST_REVISION_MARKER",
  /** Represents a 'ready_for_review' event on a given pull request. */
  ReadyForReviewEvent = "READY_FOR_REVIEW_EVENT",
  /** Represents a 'referenced' event on a given `ReferencedSubject`. */
  ReferencedEvent = "REFERENCED_EVENT",
  /** Represents a 'removed_from_project' event on a given issue or pull request. */
  RemovedFromProjectEvent = "REMOVED_FROM_PROJECT_EVENT",
  /** Represents a 'renamed' event on a given issue or pull request */
  RenamedTitleEvent = "RENAMED_TITLE_EVENT",
  /** Represents a 'reopened' event on any `Closable`. */
  ReopenedEvent = "REOPENED_EVENT",
  /** Represents a 'review_dismissed' event on a given issue or pull request. */
  ReviewDismissedEvent = "REVIEW_DISMISSED_EVENT",
  /** Represents an 'review_request_removed' event on a given pull request. */
  ReviewRequestRemovedEvent = "REVIEW_REQUEST_REMOVED_EVENT",
  /** Represents an 'review_requested' event on a given pull request. */
  ReviewRequestedEvent = "REVIEW_REQUESTED_EVENT",
  /** Represents a 'subscribed' event on a given `Subscribable`. */
  SubscribedEvent = "SUBSCRIBED_EVENT",
  /** Represents a 'transferred' event on a given issue or pull request. */
  TransferredEvent = "TRANSFERRED_EVENT",
  /** Represents an 'unassigned' event on any assignable object. */
  UnassignedEvent = "UNASSIGNED_EVENT",
  /** Represents an 'unlabeled' event on a given issue or pull request. */
  UnlabeledEvent = "UNLABELED_EVENT",
  /** Represents an 'unlocked' event on a given issue or pull request. */
  UnlockedEvent = "UNLOCKED_EVENT",
  /** Represents an 'unmarked_as_duplicate' event on a given issue or pull request. */
  UnmarkedAsDuplicateEvent = "UNMARKED_AS_DUPLICATE_EVENT",
  /** Represents an 'unpinned' event on a given issue or pull request. */
  UnpinnedEvent = "UNPINNED_EVENT",
  /** Represents an 'unsubscribed' event on a given `Subscribable`. */
  UnsubscribedEvent = "UNSUBSCRIBED_EVENT",
  /** Represents a 'user_blocked' event on a given user. */
  UserBlockedEvent = "USER_BLOCKED_EVENT",
}

/** The possible target states when updating a pull request. */
export enum PullRequestUpdateState {
  /** A pull request that has been closed without being merged. */
  Closed = "CLOSED",
  /** A pull request that is still open. */
  Open = "OPEN",
}

/** A Git push. */
export type Push = Node & {
  __typename?: "Push"
  id: Scalars["ID"]
  /** The SHA after the push */
  nextSha?: Maybe<Scalars["GitObjectID"]>
  /** The permalink for this push. */
  permalink: Scalars["URI"]
  /** The SHA before the push */
  previousSha?: Maybe<Scalars["GitObjectID"]>
  /** The user who pushed */
  pusher: User
  /** The repository that was pushed to */
  repository: Repository
}

/** A team, user or app who has the ability to push to a protected branch. */
export type PushAllowance = Node & {
  __typename?: "PushAllowance"
  /** The actor that can push. */
  actor?: Maybe<PushAllowanceActor>
  /** Identifies the branch protection rule associated with the allowed user or team. */
  branchProtectionRule?: Maybe<BranchProtectionRule>
  id: Scalars["ID"]
}

/** Types that can be an actor. */
export type PushAllowanceActor = App | Team | User

/** The connection type for PushAllowance. */
export type PushAllowanceConnection = {
  __typename?: "PushAllowanceConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PushAllowanceEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<PushAllowance>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type PushAllowanceEdge = {
  __typename?: "PushAllowanceEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<PushAllowance>
}

/** The query root of GitHub's GraphQL interface. */
export type Query = {
  __typename?: "Query"
  /** Look up a code of conduct by its key */
  codeOfConduct?: Maybe<CodeOfConduct>
  /** Look up a code of conduct by its key */
  codesOfConduct?: Maybe<Array<Maybe<CodeOfConduct>>>
  /** Look up an enterprise by URL slug. */
  enterprise?: Maybe<Enterprise>
  /** Look up a pending enterprise administrator invitation by invitee, enterprise and role. */
  enterpriseAdministratorInvitation?: Maybe<EnterpriseAdministratorInvitation>
  /** Look up a pending enterprise administrator invitation by invitation token. */
  enterpriseAdministratorInvitationByToken?: Maybe<EnterpriseAdministratorInvitation>
  /** Look up an open source license by its key */
  license?: Maybe<License>
  /** Return a list of known open source licenses */
  licenses: Array<Maybe<License>>
  /** Get alphabetically sorted list of Marketplace categories */
  marketplaceCategories: Array<MarketplaceCategory>
  /** Look up a Marketplace category by its slug. */
  marketplaceCategory?: Maybe<MarketplaceCategory>
  /** Look up a single Marketplace listing */
  marketplaceListing?: Maybe<MarketplaceListing>
  /** Look up Marketplace listings */
  marketplaceListings: MarketplaceListingConnection
  /** Return information about the GitHub instance */
  meta: GitHubMetadata
  /** Fetches an object given its ID. */
  node?: Maybe<Node>
  /** Lookup nodes by a list of IDs. */
  nodes: Array<Maybe<Node>>
  /** Lookup a organization by login. */
  organization?: Maybe<Organization>
  /** The client's rate limit information. */
  rateLimit?: Maybe<RateLimit>
  /** Hack to workaround https://github.com/facebook/relay/issues/112 re-exposing the root query object */
  relay: Query
  /** Lookup a given repository by the owner and repository name. */
  repository?: Maybe<Repository>
  /** Lookup a repository owner (ie. either a User or an Organization) by login. */
  repositoryOwner?: Maybe<RepositoryOwner>
  /** Lookup resource by a URL. */
  resource?: Maybe<UniformResourceLocatable>
  /** Perform a search across resources. */
  search: SearchResultItemConnection
  /** GitHub Security Advisories */
  securityAdvisories: SecurityAdvisoryConnection
  /** Fetch a Security Advisory by its GHSA ID */
  securityAdvisory?: Maybe<SecurityAdvisory>
  /** Software Vulnerabilities documented by GitHub Security Advisories */
  securityVulnerabilities: SecurityVulnerabilityConnection
  /**
   * Look up a single Sponsors Listing
   * @deprecated `Query.sponsorsListing` will be removed. Use `Sponsorable.sponsorsListing` instead. Removal on 2020-04-01 UTC.
   */
  sponsorsListing?: Maybe<SponsorsListing>
  /** Look up a topic by name. */
  topic?: Maybe<Topic>
  /** Lookup a user by login. */
  user?: Maybe<User>
  /** The currently authenticated user. */
  viewer: User
}

/** The query root of GitHub's GraphQL interface. */
export type QueryCodeOfConductArgs = {
  key: Scalars["String"]
}

/** The query root of GitHub's GraphQL interface. */
export type QueryEnterpriseArgs = {
  invitationToken?: Maybe<Scalars["String"]>
  slug: Scalars["String"]
}

/** The query root of GitHub's GraphQL interface. */
export type QueryEnterpriseAdministratorInvitationArgs = {
  enterpriseSlug: Scalars["String"]
  role: EnterpriseAdministratorRole
  userLogin: Scalars["String"]
}

/** The query root of GitHub's GraphQL interface. */
export type QueryEnterpriseAdministratorInvitationByTokenArgs = {
  invitationToken: Scalars["String"]
}

/** The query root of GitHub's GraphQL interface. */
export type QueryLicenseArgs = {
  key: Scalars["String"]
}

/** The query root of GitHub's GraphQL interface. */
export type QueryMarketplaceCategoriesArgs = {
  excludeEmpty?: Maybe<Scalars["Boolean"]>
  excludeSubcategories?: Maybe<Scalars["Boolean"]>
  includeCategories?: Maybe<Array<Scalars["String"]>>
}

/** The query root of GitHub's GraphQL interface. */
export type QueryMarketplaceCategoryArgs = {
  slug: Scalars["String"]
  useTopicAliases?: Maybe<Scalars["Boolean"]>
}

/** The query root of GitHub's GraphQL interface. */
export type QueryMarketplaceListingArgs = {
  slug: Scalars["String"]
}

/** The query root of GitHub's GraphQL interface. */
export type QueryMarketplaceListingsArgs = {
  adminId?: Maybe<Scalars["ID"]>
  after?: Maybe<Scalars["String"]>
  allStates?: Maybe<Scalars["Boolean"]>
  before?: Maybe<Scalars["String"]>
  categorySlug?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  organizationId?: Maybe<Scalars["ID"]>
  primaryCategoryOnly?: Maybe<Scalars["Boolean"]>
  slugs?: Maybe<Array<Maybe<Scalars["String"]>>>
  useTopicAliases?: Maybe<Scalars["Boolean"]>
  viewerCanAdmin?: Maybe<Scalars["Boolean"]>
  withFreeTrialsOnly?: Maybe<Scalars["Boolean"]>
}

/** The query root of GitHub's GraphQL interface. */
export type QueryNodeArgs = {
  id: Scalars["ID"]
}

/** The query root of GitHub's GraphQL interface. */
export type QueryNodesArgs = {
  ids: Array<Scalars["ID"]>
}

/** The query root of GitHub's GraphQL interface. */
export type QueryOrganizationArgs = {
  login: Scalars["String"]
}

/** The query root of GitHub's GraphQL interface. */
export type QueryRateLimitArgs = {
  dryRun?: Maybe<Scalars["Boolean"]>
}

/** The query root of GitHub's GraphQL interface. */
export type QueryRepositoryArgs = {
  name: Scalars["String"]
  owner: Scalars["String"]
}

/** The query root of GitHub's GraphQL interface. */
export type QueryRepositoryOwnerArgs = {
  login: Scalars["String"]
}

/** The query root of GitHub's GraphQL interface. */
export type QueryResourceArgs = {
  url: Scalars["URI"]
}

/** The query root of GitHub's GraphQL interface. */
export type QuerySearchArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  query: Scalars["String"]
  type: SearchType
}

/** The query root of GitHub's GraphQL interface. */
export type QuerySecurityAdvisoriesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  identifier?: Maybe<SecurityAdvisoryIdentifierFilter>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<SecurityAdvisoryOrder>
  publishedSince?: Maybe<Scalars["DateTime"]>
  updatedSince?: Maybe<Scalars["DateTime"]>
}

/** The query root of GitHub's GraphQL interface. */
export type QuerySecurityAdvisoryArgs = {
  ghsaId: Scalars["String"]
}

/** The query root of GitHub's GraphQL interface. */
export type QuerySecurityVulnerabilitiesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  ecosystem?: Maybe<SecurityAdvisoryEcosystem>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<SecurityVulnerabilityOrder>
  package?: Maybe<Scalars["String"]>
  severities?: Maybe<Array<SecurityAdvisorySeverity>>
}

/** The query root of GitHub's GraphQL interface. */
export type QuerySponsorsListingArgs = {
  slug: Scalars["String"]
}

/** The query root of GitHub's GraphQL interface. */
export type QueryTopicArgs = {
  name: Scalars["String"]
}

/** The query root of GitHub's GraphQL interface. */
export type QueryUserArgs = {
  login: Scalars["String"]
}

/** Represents the client's rate limit. */
export type RateLimit = {
  __typename?: "RateLimit"
  /** The point cost for the current query counting against the rate limit. */
  cost: Scalars["Int"]
  /** The maximum number of points the client is permitted to consume in a 60 minute window. */
  limit: Scalars["Int"]
  /** The maximum number of nodes this query may return */
  nodeCount: Scalars["Int"]
  /** The number of points remaining in the current rate limit window. */
  remaining: Scalars["Int"]
  /** The time at which the current rate limit window resets in UTC epoch seconds. */
  resetAt: Scalars["DateTime"]
  /** The number of points used in the current rate limit window. */
  used: Scalars["Int"]
}

/** Represents a subject that can be reacted on. */
export type Reactable = {
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>
  id: Scalars["ID"]
  /** A list of reactions grouped by content left on the subject. */
  reactionGroups?: Maybe<Array<ReactionGroup>>
  /** A list of Reactions left on the Issue. */
  reactions: ReactionConnection
  /** Can user react to this subject */
  viewerCanReact: Scalars["Boolean"]
}

/** Represents a subject that can be reacted on. */
export type ReactableReactionsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  content?: Maybe<ReactionContent>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<ReactionOrder>
}

/** The connection type for User. */
export type ReactingUserConnection = {
  __typename?: "ReactingUserConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ReactingUserEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<User>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** Represents a user that's made a reaction. */
export type ReactingUserEdge = {
  __typename?: "ReactingUserEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  node: User
  /** The moment when the user made the reaction. */
  reactedAt: Scalars["DateTime"]
}

/** An emoji reaction to a particular piece of content. */
export type Reaction = Node & {
  __typename?: "Reaction"
  /** Identifies the emoji reaction. */
  content: ReactionContent
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>
  id: Scalars["ID"]
  /** The reactable piece of content */
  reactable: Reactable
  /** Identifies the user who created this reaction. */
  user?: Maybe<User>
}

/** A list of reactions that have been left on the subject. */
export type ReactionConnection = {
  __typename?: "ReactionConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ReactionEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Reaction>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
  /** Whether or not the authenticated user has left a reaction on the subject. */
  viewerHasReacted: Scalars["Boolean"]
}

/** Emojis that can be attached to Issues, Pull Requests and Comments. */
export enum ReactionContent {
  /** Represents the `:confused:` emoji. */
  Confused = "CONFUSED",
  /** Represents the `:eyes:` emoji. */
  Eyes = "EYES",
  /** Represents the `:heart:` emoji. */
  Heart = "HEART",
  /** Represents the `:hooray:` emoji. */
  Hooray = "HOORAY",
  /** Represents the `:laugh:` emoji. */
  Laugh = "LAUGH",
  /** Represents the `:rocket:` emoji. */
  Rocket = "ROCKET",
  /** Represents the `:-1:` emoji. */
  ThumbsDown = "THUMBS_DOWN",
  /** Represents the `:+1:` emoji. */
  ThumbsUp = "THUMBS_UP",
}

/** An edge in a connection. */
export type ReactionEdge = {
  __typename?: "ReactionEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<Reaction>
}

/** A group of emoji reactions to a particular piece of content. */
export type ReactionGroup = {
  __typename?: "ReactionGroup"
  /** Identifies the emoji reaction. */
  content: ReactionContent
  /** Identifies when the reaction was created. */
  createdAt?: Maybe<Scalars["DateTime"]>
  /** The subject that was reacted to. */
  subject: Reactable
  /** Users who have reacted to the reaction subject with the emotion represented by this reaction group */
  users: ReactingUserConnection
  /** Whether or not the authenticated user has left a reaction on the subject. */
  viewerHasReacted: Scalars["Boolean"]
}

/** A group of emoji reactions to a particular piece of content. */
export type ReactionGroupUsersArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** Ways in which lists of reactions can be ordered upon return. */
export type ReactionOrder = {
  /** The direction in which to order reactions by the specified field. */
  direction: OrderDirection
  /** The field in which to order reactions by. */
  field: ReactionOrderField
}

/** A list of fields that reactions can be ordered by. */
export enum ReactionOrderField {
  /** Allows ordering a list of reactions by when they were created. */
  CreatedAt = "CREATED_AT",
}

/** Represents a 'ready_for_review' event on a given pull request. */
export type ReadyForReviewEvent = Node &
  UniformResourceLocatable & {
    __typename?: "ReadyForReviewEvent"
    /** Identifies the actor who performed the event. */
    actor?: Maybe<Actor>
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["DateTime"]
    id: Scalars["ID"]
    /** PullRequest referenced by event. */
    pullRequest: PullRequest
    /** The HTTP path for this ready for review event. */
    resourcePath: Scalars["URI"]
    /** The HTTP URL for this ready for review event. */
    url: Scalars["URI"]
  }

/** Represents a Git reference. */
export type Ref = Node & {
  __typename?: "Ref"
  /** A list of pull requests with this ref as the head ref. */
  associatedPullRequests: PullRequestConnection
  /** Branch protection rules for this ref */
  branchProtectionRule?: Maybe<BranchProtectionRule>
  id: Scalars["ID"]
  /** The ref name. */
  name: Scalars["String"]
  /** The ref's prefix, such as `refs/heads/` or `refs/tags/`. */
  prefix: Scalars["String"]
  /** Branch protection rules that are viewable by non-admins */
  refUpdateRule?: Maybe<RefUpdateRule>
  /** The repository the ref belongs to. */
  repository: Repository
  /** The object the ref points to. Returns null when object does not exist. */
  target?: Maybe<GitObject>
}

/** Represents a Git reference. */
export type RefAssociatedPullRequestsArgs = {
  after?: Maybe<Scalars["String"]>
  baseRefName?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  headRefName?: Maybe<Scalars["String"]>
  labels?: Maybe<Array<Scalars["String"]>>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<IssueOrder>
  states?: Maybe<Array<PullRequestState>>
}

/** The connection type for Ref. */
export type RefConnection = {
  __typename?: "RefConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<RefEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Ref>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type RefEdge = {
  __typename?: "RefEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<Ref>
}

/** Ways in which lists of git refs can be ordered upon return. */
export type RefOrder = {
  /** The direction in which to order refs by the specified field. */
  direction: OrderDirection
  /** The field in which to order refs by. */
  field: RefOrderField
}

/** Properties by which ref connections can be ordered. */
export enum RefOrderField {
  /** Order refs by their alphanumeric name */
  Alphabetical = "ALPHABETICAL",
  /** Order refs by underlying commit date if the ref prefix is refs/tags/ */
  TagCommitDate = "TAG_COMMIT_DATE",
}

/** A ref update rules for a viewer. */
export type RefUpdateRule = {
  __typename?: "RefUpdateRule"
  /** Can this branch be deleted. */
  allowsDeletions: Scalars["Boolean"]
  /** Are force pushes allowed on this branch. */
  allowsForcePushes: Scalars["Boolean"]
  /** Identifies the protection rule pattern. */
  pattern: Scalars["String"]
  /** Number of approving reviews required to update matching branches. */
  requiredApprovingReviewCount?: Maybe<Scalars["Int"]>
  /** List of required status check contexts that must pass for commits to be accepted to matching branches. */
  requiredStatusCheckContexts?: Maybe<Array<Maybe<Scalars["String"]>>>
  /** Are merge commits prohibited from being pushed to this branch. */
  requiresLinearHistory: Scalars["Boolean"]
  /** Are commits required to be signed. */
  requiresSignatures: Scalars["Boolean"]
  /** Can the viewer push to the branch */
  viewerCanPush: Scalars["Boolean"]
}

/** Represents a 'referenced' event on a given `ReferencedSubject`. */
export type ReferencedEvent = Node & {
  __typename?: "ReferencedEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** Identifies the commit associated with the 'referenced' event. */
  commit?: Maybe<Commit>
  /** Identifies the repository associated with the 'referenced' event. */
  commitRepository: Repository
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  id: Scalars["ID"]
  /** Reference originated in a different repository. */
  isCrossRepository: Scalars["Boolean"]
  /** Checks if the commit message itself references the subject. Can be false in the case of a commit comment reference. */
  isDirectReference: Scalars["Boolean"]
  /** Object referenced by event. */
  subject: ReferencedSubject
}

/** Any referencable object */
export type ReferencedSubject = Issue | PullRequest

/** Autogenerated input type of RegenerateEnterpriseIdentityProviderRecoveryCodes */
export type RegenerateEnterpriseIdentityProviderRecoveryCodesInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ID of the enterprise on which to set an identity provider. */
  enterpriseId: Scalars["ID"]
}

/** Autogenerated return type of RegenerateEnterpriseIdentityProviderRecoveryCodes */
export type RegenerateEnterpriseIdentityProviderRecoveryCodesPayload = {
  __typename?: "RegenerateEnterpriseIdentityProviderRecoveryCodesPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The identity provider for the enterprise. */
  identityProvider?: Maybe<EnterpriseIdentityProvider>
}

/** A release contains the content for a release. */
export type Release = Node &
  UniformResourceLocatable & {
    __typename?: "Release"
    /** The author of the release */
    author?: Maybe<User>
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["DateTime"]
    /** The description of the release. */
    description?: Maybe<Scalars["String"]>
    /** The description of this release rendered to HTML. */
    descriptionHTML?: Maybe<Scalars["HTML"]>
    id: Scalars["ID"]
    /** Whether or not the release is a draft */
    isDraft: Scalars["Boolean"]
    /** Whether or not the release is a prerelease */
    isPrerelease: Scalars["Boolean"]
    /** The title of the release. */
    name?: Maybe<Scalars["String"]>
    /** Identifies the date and time when the release was created. */
    publishedAt?: Maybe<Scalars["DateTime"]>
    /** List of releases assets which are dependent on this release. */
    releaseAssets: ReleaseAssetConnection
    /** The HTTP path for this issue */
    resourcePath: Scalars["URI"]
    /** A description of the release, rendered to HTML without any links in it. */
    shortDescriptionHTML?: Maybe<Scalars["HTML"]>
    /** The Git tag the release points to */
    tag?: Maybe<Ref>
    /** The name of the release's Git tag */
    tagName: Scalars["String"]
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["DateTime"]
    /** The HTTP URL for this issue */
    url: Scalars["URI"]
  }

/** A release contains the content for a release. */
export type ReleaseReleaseAssetsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  name?: Maybe<Scalars["String"]>
}

/** A release contains the content for a release. */
export type ReleaseShortDescriptionHtmlArgs = {
  limit?: Maybe<Scalars["Int"]>
}

/** A release asset contains the content for a release asset. */
export type ReleaseAsset = Node & {
  __typename?: "ReleaseAsset"
  /** The asset's content-type */
  contentType: Scalars["String"]
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  /** The number of times this asset was downloaded */
  downloadCount: Scalars["Int"]
  /** Identifies the URL where you can download the release asset via the browser. */
  downloadUrl: Scalars["URI"]
  id: Scalars["ID"]
  /** Identifies the title of the release asset. */
  name: Scalars["String"]
  /** Release that the asset is associated with */
  release?: Maybe<Release>
  /** The size (in bytes) of the asset */
  size: Scalars["Int"]
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"]
  /** The user that performed the upload */
  uploadedBy: User
  /** Identifies the URL of the release asset. */
  url: Scalars["URI"]
}

/** The connection type for ReleaseAsset. */
export type ReleaseAssetConnection = {
  __typename?: "ReleaseAssetConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ReleaseAssetEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<ReleaseAsset>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type ReleaseAssetEdge = {
  __typename?: "ReleaseAssetEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<ReleaseAsset>
}

/** The connection type for Release. */
export type ReleaseConnection = {
  __typename?: "ReleaseConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ReleaseEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Release>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type ReleaseEdge = {
  __typename?: "ReleaseEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<Release>
}

/** Ways in which lists of releases can be ordered upon return. */
export type ReleaseOrder = {
  /** The direction in which to order releases by the specified field. */
  direction: OrderDirection
  /** The field in which to order releases by. */
  field: ReleaseOrderField
}

/** Properties by which release connections can be ordered. */
export enum ReleaseOrderField {
  /** Order releases by creation time */
  CreatedAt = "CREATED_AT",
  /** Order releases alphabetically by name */
  Name = "NAME",
}

/** Autogenerated input type of RemoveAssigneesFromAssignable */
export type RemoveAssigneesFromAssignableInput = {
  /** The id of the assignable object to remove assignees from. */
  assignableId: Scalars["ID"]
  /** The id of users to remove as assignees. */
  assigneeIds: Array<Scalars["ID"]>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
}

/** Autogenerated return type of RemoveAssigneesFromAssignable */
export type RemoveAssigneesFromAssignablePayload = {
  __typename?: "RemoveAssigneesFromAssignablePayload"
  /** The item that was unassigned. */
  assignable?: Maybe<Assignable>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
}

/** Autogenerated input type of RemoveEnterpriseAdmin */
export type RemoveEnterpriseAdminInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The Enterprise ID from which to remove the administrator. */
  enterpriseId: Scalars["ID"]
  /** The login of the user to remove as an administrator. */
  login: Scalars["String"]
}

/** Autogenerated return type of RemoveEnterpriseAdmin */
export type RemoveEnterpriseAdminPayload = {
  __typename?: "RemoveEnterpriseAdminPayload"
  /** The user who was removed as an administrator. */
  admin?: Maybe<User>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The updated enterprise. */
  enterprise?: Maybe<Enterprise>
  /** A message confirming the result of removing an administrator. */
  message?: Maybe<Scalars["String"]>
  /** The viewer performing the mutation. */
  viewer?: Maybe<User>
}

/** Autogenerated input type of RemoveEnterpriseIdentityProvider */
export type RemoveEnterpriseIdentityProviderInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ID of the enterprise from which to remove the identity provider. */
  enterpriseId: Scalars["ID"]
}

/** Autogenerated return type of RemoveEnterpriseIdentityProvider */
export type RemoveEnterpriseIdentityProviderPayload = {
  __typename?: "RemoveEnterpriseIdentityProviderPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The identity provider that was removed from the enterprise. */
  identityProvider?: Maybe<EnterpriseIdentityProvider>
}

/** Autogenerated input type of RemoveEnterpriseOrganization */
export type RemoveEnterpriseOrganizationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ID of the enterprise from which the organization should be removed. */
  enterpriseId: Scalars["ID"]
  /** The ID of the organization to remove from the enterprise. */
  organizationId: Scalars["ID"]
}

/** Autogenerated return type of RemoveEnterpriseOrganization */
export type RemoveEnterpriseOrganizationPayload = {
  __typename?: "RemoveEnterpriseOrganizationPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The updated enterprise. */
  enterprise?: Maybe<Enterprise>
  /** The organization that was removed from the enterprise. */
  organization?: Maybe<Organization>
  /** The viewer performing the mutation. */
  viewer?: Maybe<User>
}

/** Autogenerated input type of RemoveLabelsFromLabelable */
export type RemoveLabelsFromLabelableInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ids of labels to remove. */
  labelIds: Array<Scalars["ID"]>
  /** The id of the Labelable to remove labels from. */
  labelableId: Scalars["ID"]
}

/** Autogenerated return type of RemoveLabelsFromLabelable */
export type RemoveLabelsFromLabelablePayload = {
  __typename?: "RemoveLabelsFromLabelablePayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The Labelable the labels were removed from. */
  labelable?: Maybe<Labelable>
}

/** Autogenerated input type of RemoveOutsideCollaborator */
export type RemoveOutsideCollaboratorInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ID of the organization to remove the outside collaborator from. */
  organizationId: Scalars["ID"]
  /** The ID of the outside collaborator to remove. */
  userId: Scalars["ID"]
}

/** Autogenerated return type of RemoveOutsideCollaborator */
export type RemoveOutsideCollaboratorPayload = {
  __typename?: "RemoveOutsideCollaboratorPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The user that was removed as an outside collaborator. */
  removedUser?: Maybe<User>
}

/** Autogenerated input type of RemoveReaction */
export type RemoveReactionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The name of the emoji reaction to remove. */
  content: ReactionContent
  /** The Node ID of the subject to modify. */
  subjectId: Scalars["ID"]
}

/** Autogenerated return type of RemoveReaction */
export type RemoveReactionPayload = {
  __typename?: "RemoveReactionPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The reaction object. */
  reaction?: Maybe<Reaction>
  /** The reactable subject. */
  subject?: Maybe<Reactable>
}

/** Autogenerated input type of RemoveStar */
export type RemoveStarInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The Starrable ID to unstar. */
  starrableId: Scalars["ID"]
}

/** Autogenerated return type of RemoveStar */
export type RemoveStarPayload = {
  __typename?: "RemoveStarPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The starrable. */
  starrable?: Maybe<Starrable>
}

/** Represents a 'removed_from_project' event on a given issue or pull request. */
export type RemovedFromProjectEvent = Node & {
  __typename?: "RemovedFromProjectEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>
  id: Scalars["ID"]
}

/** Represents a 'renamed' event on a given issue or pull request */
export type RenamedTitleEvent = Node & {
  __typename?: "RenamedTitleEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  /** Identifies the current title of the issue or pull request. */
  currentTitle: Scalars["String"]
  id: Scalars["ID"]
  /** Identifies the previous title of the issue or pull request. */
  previousTitle: Scalars["String"]
  /** Subject that was renamed. */
  subject: RenamedTitleSubject
}

/** An object which has a renamable title */
export type RenamedTitleSubject = Issue | PullRequest

/** Autogenerated input type of ReopenIssue */
export type ReopenIssueInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** ID of the issue to be opened. */
  issueId: Scalars["ID"]
}

/** Autogenerated return type of ReopenIssue */
export type ReopenIssuePayload = {
  __typename?: "ReopenIssuePayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The issue that was opened. */
  issue?: Maybe<Issue>
}

/** Autogenerated input type of ReopenPullRequest */
export type ReopenPullRequestInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** ID of the pull request to be reopened. */
  pullRequestId: Scalars["ID"]
}

/** Autogenerated return type of ReopenPullRequest */
export type ReopenPullRequestPayload = {
  __typename?: "ReopenPullRequestPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The pull request that was reopened. */
  pullRequest?: Maybe<PullRequest>
}

/** Represents a 'reopened' event on any `Closable`. */
export type ReopenedEvent = Node & {
  __typename?: "ReopenedEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** Object that was reopened. */
  closable: Closable
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  id: Scalars["ID"]
}

/** Audit log entry for a repo.access event. */
export type RepoAccessAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData & {
    __typename?: "RepoAccessAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The repository associated with the action */
    repository?: Maybe<Repository>
    /** The name of the repository */
    repositoryName?: Maybe<Scalars["String"]>
    /** The HTTP path for the repository */
    repositoryResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the repository */
    repositoryUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
    /** The visibility of the repository */
    visibility?: Maybe<RepoAccessAuditEntryVisibility>
  }

/** The privacy of a repository */
export enum RepoAccessAuditEntryVisibility {
  /** The repository is visible only to users in the same business. */
  Internal = "INTERNAL",
  /** The repository is visible only to those with explicit access. */
  Private = "PRIVATE",
  /** The repository is visible to everyone. */
  Public = "PUBLIC",
}

/** Audit log entry for a repo.add_member event. */
export type RepoAddMemberAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData & {
    __typename?: "RepoAddMemberAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The repository associated with the action */
    repository?: Maybe<Repository>
    /** The name of the repository */
    repositoryName?: Maybe<Scalars["String"]>
    /** The HTTP path for the repository */
    repositoryResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the repository */
    repositoryUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
    /** The visibility of the repository */
    visibility?: Maybe<RepoAddMemberAuditEntryVisibility>
  }

/** The privacy of a repository */
export enum RepoAddMemberAuditEntryVisibility {
  /** The repository is visible only to users in the same business. */
  Internal = "INTERNAL",
  /** The repository is visible only to those with explicit access. */
  Private = "PRIVATE",
  /** The repository is visible to everyone. */
  Public = "PUBLIC",
}

/** Audit log entry for a repo.add_topic event. */
export type RepoAddTopicAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData &
  TopicAuditEntryData & {
    __typename?: "RepoAddTopicAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The repository associated with the action */
    repository?: Maybe<Repository>
    /** The name of the repository */
    repositoryName?: Maybe<Scalars["String"]>
    /** The HTTP path for the repository */
    repositoryResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the repository */
    repositoryUrl?: Maybe<Scalars["URI"]>
    /** The name of the topic added to the repository */
    topic?: Maybe<Topic>
    /** The name of the topic added to the repository */
    topicName?: Maybe<Scalars["String"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** Audit log entry for a repo.archived event. */
export type RepoArchivedAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData & {
    __typename?: "RepoArchivedAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The repository associated with the action */
    repository?: Maybe<Repository>
    /** The name of the repository */
    repositoryName?: Maybe<Scalars["String"]>
    /** The HTTP path for the repository */
    repositoryResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the repository */
    repositoryUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
    /** The visibility of the repository */
    visibility?: Maybe<RepoArchivedAuditEntryVisibility>
  }

/** The privacy of a repository */
export enum RepoArchivedAuditEntryVisibility {
  /** The repository is visible only to users in the same business. */
  Internal = "INTERNAL",
  /** The repository is visible only to those with explicit access. */
  Private = "PRIVATE",
  /** The repository is visible to everyone. */
  Public = "PUBLIC",
}

/** Audit log entry for a repo.change_merge_setting event. */
export type RepoChangeMergeSettingAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData & {
    __typename?: "RepoChangeMergeSettingAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** Whether the change was to enable (true) or disable (false) the merge type */
    isEnabled?: Maybe<Scalars["Boolean"]>
    /** The merge method affected by the change */
    mergeType?: Maybe<RepoChangeMergeSettingAuditEntryMergeType>
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The repository associated with the action */
    repository?: Maybe<Repository>
    /** The name of the repository */
    repositoryName?: Maybe<Scalars["String"]>
    /** The HTTP path for the repository */
    repositoryResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the repository */
    repositoryUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** The merge options available for pull requests to this repository. */
export enum RepoChangeMergeSettingAuditEntryMergeType {
  /** The pull request is added to the base branch in a merge commit. */
  Merge = "MERGE",
  /** Commits from the pull request are added onto the base branch individually without a merge commit. */
  Rebase = "REBASE",
  /** The pull request's commits are squashed into a single commit before they are merged to the base branch. */
  Squash = "SQUASH",
}

/** Audit log entry for a repo.config.disable_anonymous_git_access event. */
export type RepoConfigDisableAnonymousGitAccessAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData & {
    __typename?: "RepoConfigDisableAnonymousGitAccessAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The repository associated with the action */
    repository?: Maybe<Repository>
    /** The name of the repository */
    repositoryName?: Maybe<Scalars["String"]>
    /** The HTTP path for the repository */
    repositoryResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the repository */
    repositoryUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** Audit log entry for a repo.config.disable_collaborators_only event. */
export type RepoConfigDisableCollaboratorsOnlyAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData & {
    __typename?: "RepoConfigDisableCollaboratorsOnlyAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The repository associated with the action */
    repository?: Maybe<Repository>
    /** The name of the repository */
    repositoryName?: Maybe<Scalars["String"]>
    /** The HTTP path for the repository */
    repositoryResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the repository */
    repositoryUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** Audit log entry for a repo.config.disable_contributors_only event. */
export type RepoConfigDisableContributorsOnlyAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData & {
    __typename?: "RepoConfigDisableContributorsOnlyAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The repository associated with the action */
    repository?: Maybe<Repository>
    /** The name of the repository */
    repositoryName?: Maybe<Scalars["String"]>
    /** The HTTP path for the repository */
    repositoryResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the repository */
    repositoryUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** Audit log entry for a repo.config.disable_sockpuppet_disallowed event. */
export type RepoConfigDisableSockpuppetDisallowedAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData & {
    __typename?: "RepoConfigDisableSockpuppetDisallowedAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The repository associated with the action */
    repository?: Maybe<Repository>
    /** The name of the repository */
    repositoryName?: Maybe<Scalars["String"]>
    /** The HTTP path for the repository */
    repositoryResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the repository */
    repositoryUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** Audit log entry for a repo.config.enable_anonymous_git_access event. */
export type RepoConfigEnableAnonymousGitAccessAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData & {
    __typename?: "RepoConfigEnableAnonymousGitAccessAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The repository associated with the action */
    repository?: Maybe<Repository>
    /** The name of the repository */
    repositoryName?: Maybe<Scalars["String"]>
    /** The HTTP path for the repository */
    repositoryResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the repository */
    repositoryUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** Audit log entry for a repo.config.enable_collaborators_only event. */
export type RepoConfigEnableCollaboratorsOnlyAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData & {
    __typename?: "RepoConfigEnableCollaboratorsOnlyAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The repository associated with the action */
    repository?: Maybe<Repository>
    /** The name of the repository */
    repositoryName?: Maybe<Scalars["String"]>
    /** The HTTP path for the repository */
    repositoryResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the repository */
    repositoryUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** Audit log entry for a repo.config.enable_contributors_only event. */
export type RepoConfigEnableContributorsOnlyAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData & {
    __typename?: "RepoConfigEnableContributorsOnlyAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The repository associated with the action */
    repository?: Maybe<Repository>
    /** The name of the repository */
    repositoryName?: Maybe<Scalars["String"]>
    /** The HTTP path for the repository */
    repositoryResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the repository */
    repositoryUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** Audit log entry for a repo.config.enable_sockpuppet_disallowed event. */
export type RepoConfigEnableSockpuppetDisallowedAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData & {
    __typename?: "RepoConfigEnableSockpuppetDisallowedAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The repository associated with the action */
    repository?: Maybe<Repository>
    /** The name of the repository */
    repositoryName?: Maybe<Scalars["String"]>
    /** The HTTP path for the repository */
    repositoryResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the repository */
    repositoryUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** Audit log entry for a repo.config.lock_anonymous_git_access event. */
export type RepoConfigLockAnonymousGitAccessAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData & {
    __typename?: "RepoConfigLockAnonymousGitAccessAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The repository associated with the action */
    repository?: Maybe<Repository>
    /** The name of the repository */
    repositoryName?: Maybe<Scalars["String"]>
    /** The HTTP path for the repository */
    repositoryResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the repository */
    repositoryUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** Audit log entry for a repo.config.unlock_anonymous_git_access event. */
export type RepoConfigUnlockAnonymousGitAccessAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData & {
    __typename?: "RepoConfigUnlockAnonymousGitAccessAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The repository associated with the action */
    repository?: Maybe<Repository>
    /** The name of the repository */
    repositoryName?: Maybe<Scalars["String"]>
    /** The HTTP path for the repository */
    repositoryResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the repository */
    repositoryUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** Audit log entry for a repo.create event. */
export type RepoCreateAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData & {
    __typename?: "RepoCreateAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    /** The name of the parent repository for this forked repository. */
    forkParentName?: Maybe<Scalars["String"]>
    /** The name of the root repository for this netork. */
    forkSourceName?: Maybe<Scalars["String"]>
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The repository associated with the action */
    repository?: Maybe<Repository>
    /** The name of the repository */
    repositoryName?: Maybe<Scalars["String"]>
    /** The HTTP path for the repository */
    repositoryResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the repository */
    repositoryUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
    /** The visibility of the repository */
    visibility?: Maybe<RepoCreateAuditEntryVisibility>
  }

/** The privacy of a repository */
export enum RepoCreateAuditEntryVisibility {
  /** The repository is visible only to users in the same business. */
  Internal = "INTERNAL",
  /** The repository is visible only to those with explicit access. */
  Private = "PRIVATE",
  /** The repository is visible to everyone. */
  Public = "PUBLIC",
}

/** Audit log entry for a repo.destroy event. */
export type RepoDestroyAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData & {
    __typename?: "RepoDestroyAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The repository associated with the action */
    repository?: Maybe<Repository>
    /** The name of the repository */
    repositoryName?: Maybe<Scalars["String"]>
    /** The HTTP path for the repository */
    repositoryResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the repository */
    repositoryUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
    /** The visibility of the repository */
    visibility?: Maybe<RepoDestroyAuditEntryVisibility>
  }

/** The privacy of a repository */
export enum RepoDestroyAuditEntryVisibility {
  /** The repository is visible only to users in the same business. */
  Internal = "INTERNAL",
  /** The repository is visible only to those with explicit access. */
  Private = "PRIVATE",
  /** The repository is visible to everyone. */
  Public = "PUBLIC",
}

/** Audit log entry for a repo.remove_member event. */
export type RepoRemoveMemberAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData & {
    __typename?: "RepoRemoveMemberAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The repository associated with the action */
    repository?: Maybe<Repository>
    /** The name of the repository */
    repositoryName?: Maybe<Scalars["String"]>
    /** The HTTP path for the repository */
    repositoryResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the repository */
    repositoryUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
    /** The visibility of the repository */
    visibility?: Maybe<RepoRemoveMemberAuditEntryVisibility>
  }

/** The privacy of a repository */
export enum RepoRemoveMemberAuditEntryVisibility {
  /** The repository is visible only to users in the same business. */
  Internal = "INTERNAL",
  /** The repository is visible only to those with explicit access. */
  Private = "PRIVATE",
  /** The repository is visible to everyone. */
  Public = "PUBLIC",
}

/** Audit log entry for a repo.remove_topic event. */
export type RepoRemoveTopicAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData &
  TopicAuditEntryData & {
    __typename?: "RepoRemoveTopicAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The repository associated with the action */
    repository?: Maybe<Repository>
    /** The name of the repository */
    repositoryName?: Maybe<Scalars["String"]>
    /** The HTTP path for the repository */
    repositoryResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the repository */
    repositoryUrl?: Maybe<Scalars["URI"]>
    /** The name of the topic added to the repository */
    topic?: Maybe<Topic>
    /** The name of the topic added to the repository */
    topicName?: Maybe<Scalars["String"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** The reasons a piece of content can be reported or minimized. */
export enum ReportedContentClassifiers {
  /** An abusive or harassing piece of content */
  Abuse = "ABUSE",
  /** A duplicated piece of content */
  Duplicate = "DUPLICATE",
  /** An irrelevant piece of content */
  OffTopic = "OFF_TOPIC",
  /** An outdated piece of content */
  Outdated = "OUTDATED",
  /** The content has been resolved */
  Resolved = "RESOLVED",
  /** A spammy piece of content */
  Spam = "SPAM",
}

/** A repository contains the content for a project. */
export type Repository = Node &
  PackageOwner &
  ProjectOwner &
  RepositoryInfo &
  Starrable &
  Subscribable &
  UniformResourceLocatable & {
    __typename?: "Repository"
    /** A list of users that can be assigned to issues in this repository. */
    assignableUsers: UserConnection
    /** A list of branch protection rules for this repository. */
    branchProtectionRules: BranchProtectionRuleConnection
    /** Returns the code of conduct for this repository */
    codeOfConduct?: Maybe<CodeOfConduct>
    /** A list of collaborators associated with the repository. */
    collaborators?: Maybe<RepositoryCollaboratorConnection>
    /** A list of commit comments associated with the repository. */
    commitComments: CommitCommentConnection
    /** Returns a list of contact links associated to the repository */
    contactLinks?: Maybe<Array<RepositoryContactLink>>
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["DateTime"]
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>
    /** The Ref associated with the repository's default branch. */
    defaultBranchRef?: Maybe<Ref>
    /** Whether or not branches are automatically deleted when merged in this repository. */
    deleteBranchOnMerge: Scalars["Boolean"]
    /** A list of deploy keys that are on this repository. */
    deployKeys: DeployKeyConnection
    /** Deployments associated with the repository */
    deployments: DeploymentConnection
    /** The description of the repository. */
    description?: Maybe<Scalars["String"]>
    /** The description of the repository rendered to HTML. */
    descriptionHTML: Scalars["HTML"]
    /** The number of kilobytes this repository occupies on disk. */
    diskUsage?: Maybe<Scalars["Int"]>
    /** Returns how many forks there are of this repository in the whole network. */
    forkCount: Scalars["Int"]
    /** A list of direct forked repositories. */
    forks: RepositoryConnection
    /** The funding links for this repository */
    fundingLinks: Array<FundingLink>
    /** Indicates if the repository has issues feature enabled. */
    hasIssuesEnabled: Scalars["Boolean"]
    /** Indicates if the repository has the Projects feature enabled. */
    hasProjectsEnabled: Scalars["Boolean"]
    /** Indicates if the repository has wiki feature enabled. */
    hasWikiEnabled: Scalars["Boolean"]
    /** The repository's URL. */
    homepageUrl?: Maybe<Scalars["URI"]>
    id: Scalars["ID"]
    /** Indicates if the repository is unmaintained. */
    isArchived: Scalars["Boolean"]
    /** Returns true if blank issue creation is allowed */
    isBlankIssuesEnabled: Scalars["Boolean"]
    /** Returns whether or not this repository disabled. */
    isDisabled: Scalars["Boolean"]
    /** Returns whether or not this repository is empty. */
    isEmpty: Scalars["Boolean"]
    /** Identifies if the repository is a fork. */
    isFork: Scalars["Boolean"]
    /** Indicates if a repository is either owned by an organization, or is a private fork of an organization repository. */
    isInOrganization: Scalars["Boolean"]
    /** Indicates if the repository has been locked or not. */
    isLocked: Scalars["Boolean"]
    /** Identifies if the repository is a mirror. */
    isMirror: Scalars["Boolean"]
    /** Identifies if the repository is private. */
    isPrivate: Scalars["Boolean"]
    /** Returns true if this repository has a security policy */
    isSecurityPolicyEnabled?: Maybe<Scalars["Boolean"]>
    /** Identifies if the repository is a template that can be used to generate new repositories. */
    isTemplate: Scalars["Boolean"]
    /** Is this repository a user configuration repository? */
    isUserConfigurationRepository: Scalars["Boolean"]
    /** Returns a single issue from the current repository by number. */
    issue?: Maybe<Issue>
    /** Returns a single issue-like object from the current repository by number. */
    issueOrPullRequest?: Maybe<IssueOrPullRequest>
    /** Returns a list of issue templates associated to the repository */
    issueTemplates?: Maybe<Array<IssueTemplate>>
    /** A list of issues that have been opened in the repository. */
    issues: IssueConnection
    /** Returns a single label by name */
    label?: Maybe<Label>
    /** A list of labels associated with the repository. */
    labels?: Maybe<LabelConnection>
    /** A list containing a breakdown of the language composition of the repository. */
    languages?: Maybe<LanguageConnection>
    /** The license associated with the repository */
    licenseInfo?: Maybe<License>
    /** The reason the repository has been locked. */
    lockReason?: Maybe<RepositoryLockReason>
    /** A list of Users that can be mentioned in the context of the repository. */
    mentionableUsers: UserConnection
    /** Whether or not PRs are merged with a merge commit on this repository. */
    mergeCommitAllowed: Scalars["Boolean"]
    /** Returns a single milestone from the current repository by number. */
    milestone?: Maybe<Milestone>
    /** A list of milestones associated with the repository. */
    milestones?: Maybe<MilestoneConnection>
    /** The repository's original mirror URL. */
    mirrorUrl?: Maybe<Scalars["URI"]>
    /** The name of the repository. */
    name: Scalars["String"]
    /** The repository's name with owner. */
    nameWithOwner: Scalars["String"]
    /** A Git object in the repository */
    object?: Maybe<GitObject>
    /** The image used to represent this repository in Open Graph data. */
    openGraphImageUrl: Scalars["URI"]
    /** The User owner of the repository. */
    owner: RepositoryOwner
    /** A list of packages under the owner. */
    packages: PackageConnection
    /** The repository parent, if this is a fork. */
    parent?: Maybe<Repository>
    /** The primary language of the repository's code. */
    primaryLanguage?: Maybe<Language>
    /** Find project by number. */
    project?: Maybe<Project>
    /** A list of projects under the owner. */
    projects: ProjectConnection
    /** The HTTP path listing the repository's projects */
    projectsResourcePath: Scalars["URI"]
    /** The HTTP URL listing the repository's projects */
    projectsUrl: Scalars["URI"]
    /** Returns a single pull request from the current repository by number. */
    pullRequest?: Maybe<PullRequest>
    /** A list of pull requests that have been opened in the repository. */
    pullRequests: PullRequestConnection
    /** Identifies when the repository was last pushed to. */
    pushedAt?: Maybe<Scalars["DateTime"]>
    /** Whether or not rebase-merging is enabled on this repository. */
    rebaseMergeAllowed: Scalars["Boolean"]
    /** Fetch a given ref from the repository */
    ref?: Maybe<Ref>
    /** Fetch a list of refs from the repository */
    refs?: Maybe<RefConnection>
    /** Lookup a single release given various criteria. */
    release?: Maybe<Release>
    /** List of releases which are dependent on this repository. */
    releases: ReleaseConnection
    /** A list of applied repository-topic associations for this repository. */
    repositoryTopics: RepositoryTopicConnection
    /** The HTTP path for this repository */
    resourcePath: Scalars["URI"]
    /** The security policy URL. */
    securityPolicyUrl?: Maybe<Scalars["URI"]>
    /** A description of the repository, rendered to HTML without any links in it. */
    shortDescriptionHTML: Scalars["HTML"]
    /** Whether or not squash-merging is enabled on this repository. */
    squashMergeAllowed: Scalars["Boolean"]
    /** The SSH URL to clone this repository */
    sshUrl: Scalars["GitSSHRemote"]
    /** Returns a count of how many stargazers there are on this object */
    stargazerCount: Scalars["Int"]
    /** A list of users who have starred this starrable. */
    stargazers: StargazerConnection
    /**
     * Returns a list of all submodules in this repository parsed from the
     * .gitmodules file as of the default branch's HEAD commit.
     */
    submodules: SubmoduleConnection
    /** Temporary authentication token for cloning this repository. */
    tempCloneToken?: Maybe<Scalars["String"]>
    /** The repository from which this repository was generated, if any. */
    templateRepository?: Maybe<Repository>
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["DateTime"]
    /** The HTTP URL for this repository */
    url: Scalars["URI"]
    /** Whether this repository has a custom image to use with Open Graph as opposed to being represented by the owner's avatar. */
    usesCustomOpenGraphImage: Scalars["Boolean"]
    /** Indicates whether the viewer has admin permissions on this repository. */
    viewerCanAdminister: Scalars["Boolean"]
    /** Can the current viewer create new projects on this owner. */
    viewerCanCreateProjects: Scalars["Boolean"]
    /** Check if the viewer is able to change their subscription status for the repository. */
    viewerCanSubscribe: Scalars["Boolean"]
    /** Indicates whether the viewer can update the topics of this repository. */
    viewerCanUpdateTopics: Scalars["Boolean"]
    /** The last commit email for the viewer. */
    viewerDefaultCommitEmail?: Maybe<Scalars["String"]>
    /** The last used merge method by the viewer or the default for the repository. */
    viewerDefaultMergeMethod: PullRequestMergeMethod
    /** Returns a boolean indicating whether the viewing user has starred this starrable. */
    viewerHasStarred: Scalars["Boolean"]
    /** The users permission level on the repository. Will return null if authenticated as an GitHub App. */
    viewerPermission?: Maybe<RepositoryPermission>
    /** A list of emails this viewer can commit with. */
    viewerPossibleCommitEmails?: Maybe<Array<Scalars["String"]>>
    /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
    viewerSubscription?: Maybe<SubscriptionState>
    /** A list of vulnerability alerts that are on this repository. */
    vulnerabilityAlerts?: Maybe<RepositoryVulnerabilityAlertConnection>
    /** A list of users watching the repository. */
    watchers: UserConnection
  }

/** A repository contains the content for a project. */
export type RepositoryAssignableUsersArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  query?: Maybe<Scalars["String"]>
}

/** A repository contains the content for a project. */
export type RepositoryBranchProtectionRulesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** A repository contains the content for a project. */
export type RepositoryCollaboratorsArgs = {
  affiliation?: Maybe<CollaboratorAffiliation>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  query?: Maybe<Scalars["String"]>
}

/** A repository contains the content for a project. */
export type RepositoryCommitCommentsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** A repository contains the content for a project. */
export type RepositoryDeployKeysArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** A repository contains the content for a project. */
export type RepositoryDeploymentsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  environments?: Maybe<Array<Scalars["String"]>>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<DeploymentOrder>
}

/** A repository contains the content for a project. */
export type RepositoryForksArgs = {
  affiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  isLocked?: Maybe<Scalars["Boolean"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<RepositoryOrder>
  ownerAffiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>
  privacy?: Maybe<RepositoryPrivacy>
}

/** A repository contains the content for a project. */
export type RepositoryIssueArgs = {
  number: Scalars["Int"]
}

/** A repository contains the content for a project. */
export type RepositoryIssueOrPullRequestArgs = {
  number: Scalars["Int"]
}

/** A repository contains the content for a project. */
export type RepositoryIssuesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  filterBy?: Maybe<IssueFilters>
  first?: Maybe<Scalars["Int"]>
  labels?: Maybe<Array<Scalars["String"]>>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<IssueOrder>
  states?: Maybe<Array<IssueState>>
}

/** A repository contains the content for a project. */
export type RepositoryLabelArgs = {
  name: Scalars["String"]
}

/** A repository contains the content for a project. */
export type RepositoryLabelsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<LabelOrder>
  query?: Maybe<Scalars["String"]>
}

/** A repository contains the content for a project. */
export type RepositoryLanguagesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<LanguageOrder>
}

/** A repository contains the content for a project. */
export type RepositoryMentionableUsersArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  query?: Maybe<Scalars["String"]>
}

/** A repository contains the content for a project. */
export type RepositoryMilestoneArgs = {
  number: Scalars["Int"]
}

/** A repository contains the content for a project. */
export type RepositoryMilestonesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<MilestoneOrder>
  query?: Maybe<Scalars["String"]>
  states?: Maybe<Array<MilestoneState>>
}

/** A repository contains the content for a project. */
export type RepositoryObjectArgs = {
  expression?: Maybe<Scalars["String"]>
  oid?: Maybe<Scalars["GitObjectID"]>
}

/** A repository contains the content for a project. */
export type RepositoryPackagesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  names?: Maybe<Array<Maybe<Scalars["String"]>>>
  orderBy?: Maybe<PackageOrder>
  packageType?: Maybe<PackageType>
  repositoryId?: Maybe<Scalars["ID"]>
}

/** A repository contains the content for a project. */
export type RepositoryProjectArgs = {
  number: Scalars["Int"]
}

/** A repository contains the content for a project. */
export type RepositoryProjectsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<ProjectOrder>
  search?: Maybe<Scalars["String"]>
  states?: Maybe<Array<ProjectState>>
}

/** A repository contains the content for a project. */
export type RepositoryPullRequestArgs = {
  number: Scalars["Int"]
}

/** A repository contains the content for a project. */
export type RepositoryPullRequestsArgs = {
  after?: Maybe<Scalars["String"]>
  baseRefName?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  headRefName?: Maybe<Scalars["String"]>
  labels?: Maybe<Array<Scalars["String"]>>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<IssueOrder>
  states?: Maybe<Array<PullRequestState>>
}

/** A repository contains the content for a project. */
export type RepositoryRefArgs = {
  qualifiedName: Scalars["String"]
}

/** A repository contains the content for a project. */
export type RepositoryRefsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  direction?: Maybe<OrderDirection>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<RefOrder>
  query?: Maybe<Scalars["String"]>
  refPrefix: Scalars["String"]
}

/** A repository contains the content for a project. */
export type RepositoryReleaseArgs = {
  tagName: Scalars["String"]
}

/** A repository contains the content for a project. */
export type RepositoryReleasesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<ReleaseOrder>
}

/** A repository contains the content for a project. */
export type RepositoryRepositoryTopicsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** A repository contains the content for a project. */
export type RepositoryShortDescriptionHtmlArgs = {
  limit?: Maybe<Scalars["Int"]>
}

/** A repository contains the content for a project. */
export type RepositoryStargazersArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<StarOrder>
}

/** A repository contains the content for a project. */
export type RepositorySubmodulesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** A repository contains the content for a project. */
export type RepositoryVulnerabilityAlertsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** A repository contains the content for a project. */
export type RepositoryWatchersArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** The affiliation of a user to a repository */
export enum RepositoryAffiliation {
  /** Repositories that the user has been added to as a collaborator. */
  Collaborator = "COLLABORATOR",
  /**
   * Repositories that the user has access to through being a member of an
   * organization. This includes every repository on every team that the user is on.
   */
  OrganizationMember = "ORGANIZATION_MEMBER",
  /** Repositories that are owned by the authenticated user. */
  Owner = "OWNER",
}

/** Metadata for an audit entry with action repo.* */
export type RepositoryAuditEntryData = {
  /** The repository associated with the action */
  repository?: Maybe<Repository>
  /** The name of the repository */
  repositoryName?: Maybe<Scalars["String"]>
  /** The HTTP path for the repository */
  repositoryResourcePath?: Maybe<Scalars["URI"]>
  /** The HTTP URL for the repository */
  repositoryUrl?: Maybe<Scalars["URI"]>
}

/** The connection type for User. */
export type RepositoryCollaboratorConnection = {
  __typename?: "RepositoryCollaboratorConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<RepositoryCollaboratorEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<User>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** Represents a user who is a collaborator of a repository. */
export type RepositoryCollaboratorEdge = {
  __typename?: "RepositoryCollaboratorEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  node: User
  /** The permission the user has on the repository. */
  permission: RepositoryPermission
  /** A list of sources for the user's access to the repository. */
  permissionSources?: Maybe<Array<PermissionSource>>
}

/** A list of repositories owned by the subject. */
export type RepositoryConnection = {
  __typename?: "RepositoryConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<RepositoryEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Repository>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
  /** The total size in kilobytes of all repositories in the connection. */
  totalDiskUsage: Scalars["Int"]
}

/** A repository contact link. */
export type RepositoryContactLink = {
  __typename?: "RepositoryContactLink"
  /** The contact link purpose. */
  about: Scalars["String"]
  /** The contact link name. */
  name: Scalars["String"]
  /** The contact link URL. */
  url: Scalars["URI"]
}

/** The reason a repository is listed as 'contributed'. */
export enum RepositoryContributionType {
  /** Created a commit */
  Commit = "COMMIT",
  /** Created an issue */
  Issue = "ISSUE",
  /** Created a pull request */
  PullRequest = "PULL_REQUEST",
  /** Reviewed a pull request */
  PullRequestReview = "PULL_REQUEST_REVIEW",
  /** Created the repository */
  Repository = "REPOSITORY",
}

/** An edge in a connection. */
export type RepositoryEdge = {
  __typename?: "RepositoryEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<Repository>
}

/** A subset of repository info. */
export type RepositoryInfo = {
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  /** The description of the repository. */
  description?: Maybe<Scalars["String"]>
  /** The description of the repository rendered to HTML. */
  descriptionHTML: Scalars["HTML"]
  /** Returns how many forks there are of this repository in the whole network. */
  forkCount: Scalars["Int"]
  /** Indicates if the repository has issues feature enabled. */
  hasIssuesEnabled: Scalars["Boolean"]
  /** Indicates if the repository has the Projects feature enabled. */
  hasProjectsEnabled: Scalars["Boolean"]
  /** Indicates if the repository has wiki feature enabled. */
  hasWikiEnabled: Scalars["Boolean"]
  /** The repository's URL. */
  homepageUrl?: Maybe<Scalars["URI"]>
  /** Indicates if the repository is unmaintained. */
  isArchived: Scalars["Boolean"]
  /** Identifies if the repository is a fork. */
  isFork: Scalars["Boolean"]
  /** Indicates if a repository is either owned by an organization, or is a private fork of an organization repository. */
  isInOrganization: Scalars["Boolean"]
  /** Indicates if the repository has been locked or not. */
  isLocked: Scalars["Boolean"]
  /** Identifies if the repository is a mirror. */
  isMirror: Scalars["Boolean"]
  /** Identifies if the repository is private. */
  isPrivate: Scalars["Boolean"]
  /** Identifies if the repository is a template that can be used to generate new repositories. */
  isTemplate: Scalars["Boolean"]
  /** The license associated with the repository */
  licenseInfo?: Maybe<License>
  /** The reason the repository has been locked. */
  lockReason?: Maybe<RepositoryLockReason>
  /** The repository's original mirror URL. */
  mirrorUrl?: Maybe<Scalars["URI"]>
  /** The name of the repository. */
  name: Scalars["String"]
  /** The repository's name with owner. */
  nameWithOwner: Scalars["String"]
  /** The image used to represent this repository in Open Graph data. */
  openGraphImageUrl: Scalars["URI"]
  /** The User owner of the repository. */
  owner: RepositoryOwner
  /** Identifies when the repository was last pushed to. */
  pushedAt?: Maybe<Scalars["DateTime"]>
  /** The HTTP path for this repository */
  resourcePath: Scalars["URI"]
  /** A description of the repository, rendered to HTML without any links in it. */
  shortDescriptionHTML: Scalars["HTML"]
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"]
  /** The HTTP URL for this repository */
  url: Scalars["URI"]
  /** Whether this repository has a custom image to use with Open Graph as opposed to being represented by the owner's avatar. */
  usesCustomOpenGraphImage: Scalars["Boolean"]
}

/** A subset of repository info. */
export type RepositoryInfoShortDescriptionHtmlArgs = {
  limit?: Maybe<Scalars["Int"]>
}

/** An invitation for a user to be added to a repository. */
export type RepositoryInvitation = Node & {
  __typename?: "RepositoryInvitation"
  /** The email address that received the invitation. */
  email?: Maybe<Scalars["String"]>
  id: Scalars["ID"]
  /** The user who received the invitation. */
  invitee?: Maybe<User>
  /** The user who created the invitation. */
  inviter: User
  /** The permalink for this repository invitation. */
  permalink: Scalars["URI"]
  /** The permission granted on this repository by this invitation. */
  permission: RepositoryPermission
  /** The Repository the user is invited to. */
  repository?: Maybe<RepositoryInfo>
}

/** The connection type for RepositoryInvitation. */
export type RepositoryInvitationConnection = {
  __typename?: "RepositoryInvitationConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<RepositoryInvitationEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<RepositoryInvitation>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type RepositoryInvitationEdge = {
  __typename?: "RepositoryInvitationEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<RepositoryInvitation>
}

/** Ordering options for repository invitation connections. */
export type RepositoryInvitationOrder = {
  /** The ordering direction. */
  direction: OrderDirection
  /** The field to order repository invitations by. */
  field: RepositoryInvitationOrderField
}

/** Properties by which repository invitation connections can be ordered. */
export enum RepositoryInvitationOrderField {
  /** Order repository invitations by creation time */
  CreatedAt = "CREATED_AT",
  /** Order repository invitations by invitee login */
  InviteeLogin = "INVITEE_LOGIN",
}

/** The possible reasons a given repository could be in a locked state. */
export enum RepositoryLockReason {
  /** The repository is locked due to a billing related reason. */
  Billing = "BILLING",
  /** The repository is locked due to a migration. */
  Migrating = "MIGRATING",
  /** The repository is locked due to a move. */
  Moving = "MOVING",
  /** The repository is locked due to a rename. */
  Rename = "RENAME",
}

/** Represents a object that belongs to a repository. */
export type RepositoryNode = {
  /** The repository associated with this node. */
  repository: Repository
}

/** Ordering options for repository connections */
export type RepositoryOrder = {
  /** The ordering direction. */
  direction: OrderDirection
  /** The field to order repositories by. */
  field: RepositoryOrderField
}

/** Properties by which repository connections can be ordered. */
export enum RepositoryOrderField {
  /** Order repositories by creation time */
  CreatedAt = "CREATED_AT",
  /** Order repositories by name */
  Name = "NAME",
  /** Order repositories by push time */
  PushedAt = "PUSHED_AT",
  /** Order repositories by number of stargazers */
  Stargazers = "STARGAZERS",
  /** Order repositories by update time */
  UpdatedAt = "UPDATED_AT",
}

/** Represents an owner of a Repository. */
export type RepositoryOwner = {
  /** A URL pointing to the owner's public avatar. */
  avatarUrl: Scalars["URI"]
  id: Scalars["ID"]
  /** The username used to login. */
  login: Scalars["String"]
  /** A list of repositories that the user owns. */
  repositories: RepositoryConnection
  /** Find Repository. */
  repository?: Maybe<Repository>
  /** The HTTP URL for the owner. */
  resourcePath: Scalars["URI"]
  /** The HTTP URL for the owner. */
  url: Scalars["URI"]
}

/** Represents an owner of a Repository. */
export type RepositoryOwnerAvatarUrlArgs = {
  size?: Maybe<Scalars["Int"]>
}

/** Represents an owner of a Repository. */
export type RepositoryOwnerRepositoriesArgs = {
  affiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  isFork?: Maybe<Scalars["Boolean"]>
  isLocked?: Maybe<Scalars["Boolean"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<RepositoryOrder>
  ownerAffiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>
  privacy?: Maybe<RepositoryPrivacy>
}

/** Represents an owner of a Repository. */
export type RepositoryOwnerRepositoryArgs = {
  name: Scalars["String"]
}

/** The access level to a repository */
export enum RepositoryPermission {
  /**
   * Can read, clone, and push to this repository. Can also manage issues, pull
   * requests, and repository settings, including adding collaborators
   */
  Admin = "ADMIN",
  /** Can read, clone, and push to this repository. They can also manage issues, pull requests, and some repository settings */
  Maintain = "MAINTAIN",
  /** Can read and clone this repository. Can also open and comment on issues and pull requests */
  Read = "READ",
  /** Can read and clone this repository. Can also manage issues and pull requests */
  Triage = "TRIAGE",
  /** Can read, clone, and push to this repository. Can also manage issues and pull requests */
  Write = "WRITE",
}

/** The privacy of a repository */
export enum RepositoryPrivacy {
  /** Private */
  Private = "PRIVATE",
  /** Public */
  Public = "PUBLIC",
}

/** A repository-topic connects a repository to a topic. */
export type RepositoryTopic = Node &
  UniformResourceLocatable & {
    __typename?: "RepositoryTopic"
    id: Scalars["ID"]
    /** The HTTP path for this repository-topic. */
    resourcePath: Scalars["URI"]
    /** The topic. */
    topic: Topic
    /** The HTTP URL for this repository-topic. */
    url: Scalars["URI"]
  }

/** The connection type for RepositoryTopic. */
export type RepositoryTopicConnection = {
  __typename?: "RepositoryTopicConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<RepositoryTopicEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<RepositoryTopic>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type RepositoryTopicEdge = {
  __typename?: "RepositoryTopicEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<RepositoryTopic>
}

/** The repository's visibility level. */
export enum RepositoryVisibility {
  /** The repository is visible only to users in the same business. */
  Internal = "INTERNAL",
  /** The repository is visible only to those with explicit access. */
  Private = "PRIVATE",
  /** The repository is visible to everyone. */
  Public = "PUBLIC",
}

/** Audit log entry for a repository_visibility_change.disable event. */
export type RepositoryVisibilityChangeDisableAuditEntry = AuditEntry &
  EnterpriseAuditEntryData &
  Node &
  OrganizationAuditEntryData & {
    __typename?: "RepositoryVisibilityChangeDisableAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    /** The HTTP path for this enterprise. */
    enterpriseResourcePath?: Maybe<Scalars["URI"]>
    /** The slug of the enterprise. */
    enterpriseSlug?: Maybe<Scalars["String"]>
    /** The HTTP URL for this enterprise. */
    enterpriseUrl?: Maybe<Scalars["URI"]>
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** Audit log entry for a repository_visibility_change.enable event. */
export type RepositoryVisibilityChangeEnableAuditEntry = AuditEntry &
  EnterpriseAuditEntryData &
  Node &
  OrganizationAuditEntryData & {
    __typename?: "RepositoryVisibilityChangeEnableAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    /** The HTTP path for this enterprise. */
    enterpriseResourcePath?: Maybe<Scalars["URI"]>
    /** The slug of the enterprise. */
    enterpriseSlug?: Maybe<Scalars["String"]>
    /** The HTTP URL for this enterprise. */
    enterpriseUrl?: Maybe<Scalars["URI"]>
    id: Scalars["ID"]
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** A alert for a repository with an affected vulnerability. */
export type RepositoryVulnerabilityAlert = Node &
  RepositoryNode & {
    __typename?: "RepositoryVulnerabilityAlert"
    /** When was the alert created? */
    createdAt: Scalars["DateTime"]
    /** The reason the alert was dismissed */
    dismissReason?: Maybe<Scalars["String"]>
    /** When was the alert dimissed? */
    dismissedAt?: Maybe<Scalars["DateTime"]>
    /** The user who dismissed the alert */
    dismisser?: Maybe<User>
    id: Scalars["ID"]
    /** The associated repository */
    repository: Repository
    /** The associated security advisory */
    securityAdvisory?: Maybe<SecurityAdvisory>
    /** The associated security vulnerablity */
    securityVulnerability?: Maybe<SecurityVulnerability>
    /** The vulnerable manifest filename */
    vulnerableManifestFilename: Scalars["String"]
    /** The vulnerable manifest path */
    vulnerableManifestPath: Scalars["String"]
    /** The vulnerable requirements */
    vulnerableRequirements?: Maybe<Scalars["String"]>
  }

/** The connection type for RepositoryVulnerabilityAlert. */
export type RepositoryVulnerabilityAlertConnection = {
  __typename?: "RepositoryVulnerabilityAlertConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<RepositoryVulnerabilityAlertEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<RepositoryVulnerabilityAlert>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type RepositoryVulnerabilityAlertEdge = {
  __typename?: "RepositoryVulnerabilityAlertEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<RepositoryVulnerabilityAlert>
}

/** Autogenerated input type of RequestReviews */
export type RequestReviewsInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The Node ID of the pull request to modify. */
  pullRequestId: Scalars["ID"]
  /** The Node IDs of the team to request. */
  teamIds?: Maybe<Array<Scalars["ID"]>>
  /** Add users to the set rather than replace. */
  union?: Maybe<Scalars["Boolean"]>
  /** The Node IDs of the user to request. */
  userIds?: Maybe<Array<Scalars["ID"]>>
}

/** Autogenerated return type of RequestReviews */
export type RequestReviewsPayload = {
  __typename?: "RequestReviewsPayload"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The pull request that is getting requests. */
  pullRequest?: Maybe<PullRequest>
  /** The edge from the pull request to the requested reviewers. */
  requestedReviewersEdge?: Maybe<UserEdge>
}

/** The possible states that can be requested when creating a check run. */
export enum RequestableCheckStatusState {
  /** The check suite or run has been completed. */
  Completed = "COMPLETED",
  /** The check suite or run is in progress. */
  InProgress = "IN_PROGRESS",
  /** The check suite or run has been queued. */
  Queued = "QUEUED",
}

/** Types that can be requested reviewers. */
export type RequestedReviewer = Mannequin | Team | User

/** Autogenerated input type of RerequestCheckSuite */
export type RerequestCheckSuiteInput = {
  /** The Node ID of the check suite. */
  checkSuiteId: Scalars["ID"]
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The Node ID of the repository. */
  repositoryId: Scalars["ID"]
}

/** Autogenerated return type of RerequestCheckSuite */
export type RerequestCheckSuitePayload = {
  __typename?: "RerequestCheckSuitePayload"
  /** The requested check suite. */
  checkSuite?: Maybe<CheckSuite>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
}

/** Autogenerated input type of ResolveReviewThread */
export type ResolveReviewThreadInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ID of the thread to resolve */
  threadId: Scalars["ID"]
}

/** Autogenerated return type of ResolveReviewThread */
export type ResolveReviewThreadPayload = {
  __typename?: "ResolveReviewThreadPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The thread to resolve. */
  thread?: Maybe<PullRequestReviewThread>
}

/** Represents a private contribution a user made on GitHub. */
export type RestrictedContribution = Contribution & {
  __typename?: "RestrictedContribution"
  /**
   * Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  isRestricted: Scalars["Boolean"]
  /** When this contribution was made. */
  occurredAt: Scalars["DateTime"]
  /** The HTTP path for this contribution. */
  resourcePath: Scalars["URI"]
  /** The HTTP URL for this contribution. */
  url: Scalars["URI"]
  /** The user who made this contribution. */
  user: User
}

/** A team or user who has the ability to dismiss a review on a protected branch. */
export type ReviewDismissalAllowance = Node & {
  __typename?: "ReviewDismissalAllowance"
  /** The actor that can dismiss. */
  actor?: Maybe<ReviewDismissalAllowanceActor>
  /** Identifies the branch protection rule associated with the allowed user or team. */
  branchProtectionRule?: Maybe<BranchProtectionRule>
  id: Scalars["ID"]
}

/** Types that can be an actor. */
export type ReviewDismissalAllowanceActor = Team | User

/** The connection type for ReviewDismissalAllowance. */
export type ReviewDismissalAllowanceConnection = {
  __typename?: "ReviewDismissalAllowanceConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ReviewDismissalAllowanceEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<ReviewDismissalAllowance>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type ReviewDismissalAllowanceEdge = {
  __typename?: "ReviewDismissalAllowanceEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<ReviewDismissalAllowance>
}

/** Represents a 'review_dismissed' event on a given issue or pull request. */
export type ReviewDismissedEvent = Node &
  UniformResourceLocatable & {
    __typename?: "ReviewDismissedEvent"
    /** Identifies the actor who performed the event. */
    actor?: Maybe<Actor>
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["DateTime"]
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>
    /** Identifies the optional message associated with the 'review_dismissed' event. */
    dismissalMessage?: Maybe<Scalars["String"]>
    /** Identifies the optional message associated with the event, rendered to HTML. */
    dismissalMessageHTML?: Maybe<Scalars["String"]>
    id: Scalars["ID"]
    /** Identifies the previous state of the review with the 'review_dismissed' event. */
    previousReviewState: PullRequestReviewState
    /** PullRequest referenced by event. */
    pullRequest: PullRequest
    /** Identifies the commit which caused the review to become stale. */
    pullRequestCommit?: Maybe<PullRequestCommit>
    /** The HTTP path for this review dismissed event. */
    resourcePath: Scalars["URI"]
    /** Identifies the review associated with the 'review_dismissed' event. */
    review?: Maybe<PullRequestReview>
    /** The HTTP URL for this review dismissed event. */
    url: Scalars["URI"]
  }

/** A request for a user to review a pull request. */
export type ReviewRequest = Node & {
  __typename?: "ReviewRequest"
  /** Whether this request was created for a code owner */
  asCodeOwner: Scalars["Boolean"]
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>
  id: Scalars["ID"]
  /** Identifies the pull request associated with this review request. */
  pullRequest: PullRequest
  /** The reviewer that is requested. */
  requestedReviewer?: Maybe<RequestedReviewer>
}

/** The connection type for ReviewRequest. */
export type ReviewRequestConnection = {
  __typename?: "ReviewRequestConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ReviewRequestEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<ReviewRequest>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type ReviewRequestEdge = {
  __typename?: "ReviewRequestEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<ReviewRequest>
}

/** Represents an 'review_request_removed' event on a given pull request. */
export type ReviewRequestRemovedEvent = Node & {
  __typename?: "ReviewRequestRemovedEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  id: Scalars["ID"]
  /** PullRequest referenced by event. */
  pullRequest: PullRequest
  /** Identifies the reviewer whose review request was removed. */
  requestedReviewer?: Maybe<RequestedReviewer>
}

/** Represents an 'review_requested' event on a given pull request. */
export type ReviewRequestedEvent = Node & {
  __typename?: "ReviewRequestedEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  id: Scalars["ID"]
  /** PullRequest referenced by event. */
  pullRequest: PullRequest
  /** Identifies the reviewer whose review was requested. */
  requestedReviewer?: Maybe<RequestedReviewer>
}

/**
 * A hovercard context with a message describing the current code review state of the pull
 * request.
 */
export type ReviewStatusHovercardContext = HovercardContext & {
  __typename?: "ReviewStatusHovercardContext"
  /** A string describing this context */
  message: Scalars["String"]
  /** An octicon to accompany this context */
  octicon: Scalars["String"]
  /** The current status of the pull request with respect to code review. */
  reviewDecision?: Maybe<PullRequestReviewDecision>
}

/** The possible digest algorithms used to sign SAML requests for an identity provider. */
export enum SamlDigestAlgorithm {
  /** SHA1 */
  Sha1 = "SHA1",
  /** SHA256 */
  Sha256 = "SHA256",
  /** SHA384 */
  Sha384 = "SHA384",
  /** SHA512 */
  Sha512 = "SHA512",
}

/** The possible signature algorithms used to sign SAML requests for a Identity Provider. */
export enum SamlSignatureAlgorithm {
  /** RSA-SHA1 */
  RsaSha1 = "RSA_SHA1",
  /** RSA-SHA256 */
  RsaSha256 = "RSA_SHA256",
  /** RSA-SHA384 */
  RsaSha384 = "RSA_SHA384",
  /** RSA-SHA512 */
  RsaSha512 = "RSA_SHA512",
}

/** A Saved Reply is text a user can use to reply quickly. */
export type SavedReply = Node & {
  __typename?: "SavedReply"
  /** The body of the saved reply. */
  body: Scalars["String"]
  /** The saved reply body rendered to HTML. */
  bodyHTML: Scalars["HTML"]
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>
  id: Scalars["ID"]
  /** The title of the saved reply. */
  title: Scalars["String"]
  /** The user that saved this reply. */
  user?: Maybe<Actor>
}

/** The connection type for SavedReply. */
export type SavedReplyConnection = {
  __typename?: "SavedReplyConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SavedReplyEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<SavedReply>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type SavedReplyEdge = {
  __typename?: "SavedReplyEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<SavedReply>
}

/** Ordering options for saved reply connections. */
export type SavedReplyOrder = {
  /** The ordering direction. */
  direction: OrderDirection
  /** The field to order saved replies by. */
  field: SavedReplyOrderField
}

/** Properties by which saved reply connections can be ordered. */
export enum SavedReplyOrderField {
  /** Order saved reply by when they were updated. */
  UpdatedAt = "UPDATED_AT",
}

/** The results of a search. */
export type SearchResultItem = App | Issue | MarketplaceListing | Organization | PullRequest | Repository | User

/** A list of results that matched against a search query. */
export type SearchResultItemConnection = {
  __typename?: "SearchResultItemConnection"
  /** The number of pieces of code that matched the search query. */
  codeCount: Scalars["Int"]
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SearchResultItemEdge>>>
  /** The number of issues that matched the search query. */
  issueCount: Scalars["Int"]
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<SearchResultItem>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The number of repositories that matched the search query. */
  repositoryCount: Scalars["Int"]
  /** The number of users that matched the search query. */
  userCount: Scalars["Int"]
  /** The number of wiki pages that matched the search query. */
  wikiCount: Scalars["Int"]
}

/** An edge in a connection. */
export type SearchResultItemEdge = {
  __typename?: "SearchResultItemEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<SearchResultItem>
  /** Text matches on the result found. */
  textMatches?: Maybe<Array<Maybe<TextMatch>>>
}

/** Represents the individual results of a search. */
export enum SearchType {
  /** Returns results matching issues in repositories. */
  Issue = "ISSUE",
  /** Returns results matching repositories. */
  Repository = "REPOSITORY",
  /** Returns results matching users and organizations on GitHub. */
  User = "USER",
}

/** A GitHub Security Advisory */
export type SecurityAdvisory = Node & {
  __typename?: "SecurityAdvisory"
  /** Identifies the primary key from the database. */
  databaseId?: Maybe<Scalars["Int"]>
  /** This is a long plaintext description of the advisory */
  description: Scalars["String"]
  /** The GitHub Security Advisory ID */
  ghsaId: Scalars["String"]
  id: Scalars["ID"]
  /** A list of identifiers for this advisory */
  identifiers: Array<SecurityAdvisoryIdentifier>
  /** The organization that originated the advisory */
  origin: Scalars["String"]
  /** The permalink for the advisory */
  permalink?: Maybe<Scalars["URI"]>
  /** When the advisory was published */
  publishedAt: Scalars["DateTime"]
  /** A list of references for this advisory */
  references: Array<SecurityAdvisoryReference>
  /** The severity of the advisory */
  severity: SecurityAdvisorySeverity
  /** A short plaintext summary of the advisory */
  summary: Scalars["String"]
  /** When the advisory was last updated */
  updatedAt: Scalars["DateTime"]
  /** Vulnerabilities associated with this Advisory */
  vulnerabilities: SecurityVulnerabilityConnection
  /** When the advisory was withdrawn, if it has been withdrawn */
  withdrawnAt?: Maybe<Scalars["DateTime"]>
}

/** A GitHub Security Advisory */
export type SecurityAdvisoryVulnerabilitiesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  ecosystem?: Maybe<SecurityAdvisoryEcosystem>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<SecurityVulnerabilityOrder>
  package?: Maybe<Scalars["String"]>
  severities?: Maybe<Array<SecurityAdvisorySeverity>>
}

/** The connection type for SecurityAdvisory. */
export type SecurityAdvisoryConnection = {
  __typename?: "SecurityAdvisoryConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SecurityAdvisoryEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<SecurityAdvisory>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** The possible ecosystems of a security vulnerability's package. */
export enum SecurityAdvisoryEcosystem {
  /** PHP packages hosted at packagist.org */
  Composer = "COMPOSER",
  /** Java artifacts hosted at the Maven central repository */
  Maven = "MAVEN",
  /** JavaScript packages hosted at npmjs.com */
  Npm = "NPM",
  /** .NET packages hosted at the NuGet Gallery */
  Nuget = "NUGET",
  /** Python packages hosted at PyPI.org */
  Pip = "PIP",
  /** Ruby gems hosted at RubyGems.org */
  Rubygems = "RUBYGEMS",
}

/** An edge in a connection. */
export type SecurityAdvisoryEdge = {
  __typename?: "SecurityAdvisoryEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<SecurityAdvisory>
}

/** A GitHub Security Advisory Identifier */
export type SecurityAdvisoryIdentifier = {
  __typename?: "SecurityAdvisoryIdentifier"
  /** The identifier type, e.g. GHSA, CVE */
  type: Scalars["String"]
  /** The identifier */
  value: Scalars["String"]
}

/** An advisory identifier to filter results on. */
export type SecurityAdvisoryIdentifierFilter = {
  /** The identifier type. */
  type: SecurityAdvisoryIdentifierType
  /** The identifier string. Supports exact or partial matching. */
  value: Scalars["String"]
}

/** Identifier formats available for advisories. */
export enum SecurityAdvisoryIdentifierType {
  /** Common Vulnerabilities and Exposures Identifier. */
  Cve = "CVE",
  /** GitHub Security Advisory ID. */
  Ghsa = "GHSA",
}

/** Ordering options for security advisory connections */
export type SecurityAdvisoryOrder = {
  /** The ordering direction. */
  direction: OrderDirection
  /** The field to order security advisories by. */
  field: SecurityAdvisoryOrderField
}

/** Properties by which security advisory connections can be ordered. */
export enum SecurityAdvisoryOrderField {
  /** Order advisories by publication time */
  PublishedAt = "PUBLISHED_AT",
  /** Order advisories by update time */
  UpdatedAt = "UPDATED_AT",
}

/** An individual package */
export type SecurityAdvisoryPackage = {
  __typename?: "SecurityAdvisoryPackage"
  /** The ecosystem the package belongs to, e.g. RUBYGEMS, NPM */
  ecosystem: SecurityAdvisoryEcosystem
  /** The package name */
  name: Scalars["String"]
}

/** An individual package version */
export type SecurityAdvisoryPackageVersion = {
  __typename?: "SecurityAdvisoryPackageVersion"
  /** The package name or version */
  identifier: Scalars["String"]
}

/** A GitHub Security Advisory Reference */
export type SecurityAdvisoryReference = {
  __typename?: "SecurityAdvisoryReference"
  /** A publicly accessible reference */
  url: Scalars["URI"]
}

/** Severity of the vulnerability. */
export enum SecurityAdvisorySeverity {
  /** Critical. */
  Critical = "CRITICAL",
  /** High. */
  High = "HIGH",
  /** Low. */
  Low = "LOW",
  /** Moderate. */
  Moderate = "MODERATE",
}

/** An individual vulnerability within an Advisory */
export type SecurityVulnerability = {
  __typename?: "SecurityVulnerability"
  /** The Advisory associated with this Vulnerability */
  advisory: SecurityAdvisory
  /** The first version containing a fix for the vulnerability */
  firstPatchedVersion?: Maybe<SecurityAdvisoryPackageVersion>
  /** A description of the vulnerable package */
  package: SecurityAdvisoryPackage
  /** The severity of the vulnerability within this package */
  severity: SecurityAdvisorySeverity
  /** When the vulnerability was last updated */
  updatedAt: Scalars["DateTime"]
  /**
   * A string that describes the vulnerable package versions.
   * This string follows a basic syntax with a few forms.
   * + `= 0.2.0` denotes a single vulnerable version.
   * + `<= 1.0.8` denotes a version range up to and including the specified version
   * + `< 0.1.11` denotes a version range up to, but excluding, the specified version
   * + `>= 4.3.0, < 4.3.5` denotes a version range with a known minimum and maximum version.
   * + `>= 0.0.1` denotes a version range with a known minimum, but no known maximum
   */
  vulnerableVersionRange: Scalars["String"]
}

/** The connection type for SecurityVulnerability. */
export type SecurityVulnerabilityConnection = {
  __typename?: "SecurityVulnerabilityConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SecurityVulnerabilityEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<SecurityVulnerability>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type SecurityVulnerabilityEdge = {
  __typename?: "SecurityVulnerabilityEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<SecurityVulnerability>
}

/** Ordering options for security vulnerability connections */
export type SecurityVulnerabilityOrder = {
  /** The ordering direction. */
  direction: OrderDirection
  /** The field to order security vulnerabilities by. */
  field: SecurityVulnerabilityOrderField
}

/** Properties by which security vulnerability connections can be ordered. */
export enum SecurityVulnerabilityOrderField {
  /** Order vulnerability by update time */
  UpdatedAt = "UPDATED_AT",
}

/** Autogenerated input type of SetEnterpriseIdentityProvider */
export type SetEnterpriseIdentityProviderInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The digest algorithm used to sign SAML requests for the identity provider. */
  digestMethod: SamlDigestAlgorithm
  /** The ID of the enterprise on which to set an identity provider. */
  enterpriseId: Scalars["ID"]
  /** The x509 certificate used by the identity provider to sign assertions and responses. */
  idpCertificate: Scalars["String"]
  /** The Issuer Entity ID for the SAML identity provider */
  issuer?: Maybe<Scalars["String"]>
  /** The signature algorithm used to sign SAML requests for the identity provider. */
  signatureMethod: SamlSignatureAlgorithm
  /** The URL endpoint for the identity provider's SAML SSO. */
  ssoUrl: Scalars["URI"]
}

/** Autogenerated return type of SetEnterpriseIdentityProvider */
export type SetEnterpriseIdentityProviderPayload = {
  __typename?: "SetEnterpriseIdentityProviderPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The identity provider for the enterprise. */
  identityProvider?: Maybe<EnterpriseIdentityProvider>
}

/** Represents an S/MIME signature on a Commit or Tag. */
export type SmimeSignature = GitSignature & {
  __typename?: "SmimeSignature"
  /** Email used to sign this object. */
  email: Scalars["String"]
  /** True if the signature is valid and verified by GitHub. */
  isValid: Scalars["Boolean"]
  /** Payload for GPG signing object. Raw ODB object without the signature header. */
  payload: Scalars["String"]
  /** ASCII-armored signature header from object. */
  signature: Scalars["String"]
  /** GitHub user corresponding to the email signing this commit. */
  signer?: Maybe<User>
  /**
   * The state of this signature. `VALID` if signature is valid and verified by
   * GitHub, otherwise represents reason why signature is considered invalid.
   */
  state: GitSignatureState
  /** True if the signature was made with GitHub's signing key. */
  wasSignedByGitHub: Scalars["Boolean"]
}

/** Entites that can sponsor others via GitHub Sponsors */
export type Sponsor = Organization | User

/** Entities that can be sponsored through GitHub Sponsors */
export type Sponsorable = {
  /** The GitHub Sponsors listing for this user. */
  sponsorsListing?: Maybe<SponsorsListing>
  /** This object's sponsorships as the maintainer. */
  sponsorshipsAsMaintainer: SponsorshipConnection
  /** This object's sponsorships as the sponsor. */
  sponsorshipsAsSponsor: SponsorshipConnection
}

/** Entities that can be sponsored through GitHub Sponsors */
export type SponsorableSponsorshipsAsMaintainerArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  includePrivate?: Maybe<Scalars["Boolean"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<SponsorshipOrder>
}

/** Entities that can be sponsored through GitHub Sponsors */
export type SponsorableSponsorshipsAsSponsorArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<SponsorshipOrder>
}

/** A GitHub Sponsors listing. */
export type SponsorsListing = Node & {
  __typename?: "SponsorsListing"
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  /** The full description of the listing. */
  fullDescription: Scalars["String"]
  /** The full description of the listing rendered to HTML. */
  fullDescriptionHTML: Scalars["HTML"]
  id: Scalars["ID"]
  /** The listing's full name. */
  name: Scalars["String"]
  /** The short description of the listing. */
  shortDescription: Scalars["String"]
  /** The short name of the listing. */
  slug: Scalars["String"]
  /** The published tiers for this GitHub Sponsors listing. */
  tiers?: Maybe<SponsorsTierConnection>
}

/** A GitHub Sponsors listing. */
export type SponsorsListingTiersArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<SponsorsTierOrder>
}

/** A GitHub Sponsors tier associated with a GitHub Sponsors listing. */
export type SponsorsTier = Node & {
  __typename?: "SponsorsTier"
  /** SponsorsTier information only visible to users that can administer the associated Sponsors listing. */
  adminInfo?: Maybe<SponsorsTierAdminInfo>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  /** The description of the tier. */
  description: Scalars["String"]
  /** The tier description rendered to HTML */
  descriptionHTML: Scalars["HTML"]
  id: Scalars["ID"]
  /** How much this tier costs per month in cents. */
  monthlyPriceInCents: Scalars["Int"]
  /** How much this tier costs per month in dollars. */
  monthlyPriceInDollars: Scalars["Int"]
  /** The name of the tier. */
  name: Scalars["String"]
  /** The sponsors listing that this tier belongs to. */
  sponsorsListing: SponsorsListing
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"]
}

/** SponsorsTier information only visible to users that can administer the associated Sponsors listing. */
export type SponsorsTierAdminInfo = {
  __typename?: "SponsorsTierAdminInfo"
  /** The sponsorships associated with this tier. */
  sponsorships: SponsorshipConnection
}

/** SponsorsTier information only visible to users that can administer the associated Sponsors listing. */
export type SponsorsTierAdminInfoSponsorshipsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  includePrivate?: Maybe<Scalars["Boolean"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<SponsorshipOrder>
}

/** The connection type for SponsorsTier. */
export type SponsorsTierConnection = {
  __typename?: "SponsorsTierConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SponsorsTierEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<SponsorsTier>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type SponsorsTierEdge = {
  __typename?: "SponsorsTierEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<SponsorsTier>
}

/** Ordering options for Sponsors tiers connections. */
export type SponsorsTierOrder = {
  /** The ordering direction. */
  direction: OrderDirection
  /** The field to order tiers by. */
  field: SponsorsTierOrderField
}

/** Properties by which Sponsors tiers connections can be ordered. */
export enum SponsorsTierOrderField {
  /** Order tiers by creation time. */
  CreatedAt = "CREATED_AT",
  /** Order tiers by their monthly price in cents */
  MonthlyPriceInCents = "MONTHLY_PRICE_IN_CENTS",
}

/** A sponsorship relationship between a sponsor and a maintainer */
export type Sponsorship = Node & {
  __typename?: "Sponsorship"
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  id: Scalars["ID"]
  /**
   * The entity that is being sponsored
   * @deprecated `Sponsorship.maintainer` will be removed. Use `Sponsorship.sponsorable` instead. Removal on 2020-04-01 UTC.
   */
  maintainer: User
  /** The privacy level for this sponsorship. */
  privacyLevel: SponsorshipPrivacy
  /**
   * The user that is sponsoring. Returns null if the sponsorship is private or if sponsor is not a user.
   * @deprecated `Sponsorship.sponsor` will be removed. Use `Sponsorship.sponsorEntity` instead. Removal on 2020-10-01 UTC.
   */
  sponsor?: Maybe<User>
  /** The user or organization that is sponsoring. Returns null if the sponsorship is private. */
  sponsorEntity?: Maybe<Sponsor>
  /** The entity that is being sponsored */
  sponsorable: Sponsorable
  /** The associated sponsorship tier */
  tier?: Maybe<SponsorsTier>
}

/** The connection type for Sponsorship. */
export type SponsorshipConnection = {
  __typename?: "SponsorshipConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SponsorshipEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Sponsorship>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type SponsorshipEdge = {
  __typename?: "SponsorshipEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<Sponsorship>
}

/** Ordering options for sponsorship connections. */
export type SponsorshipOrder = {
  /** The ordering direction. */
  direction: OrderDirection
  /** The field to order sponsorship by. */
  field: SponsorshipOrderField
}

/** Properties by which sponsorship connections can be ordered. */
export enum SponsorshipOrderField {
  /** Order sponsorship by creation time. */
  CreatedAt = "CREATED_AT",
}

/** The privacy of a sponsorship */
export enum SponsorshipPrivacy {
  /** Private */
  Private = "PRIVATE",
  /** Public */
  Public = "PUBLIC",
}

/** Ways in which star connections can be ordered. */
export type StarOrder = {
  /** The direction in which to order nodes. */
  direction: OrderDirection
  /** The field in which to order nodes by. */
  field: StarOrderField
}

/** Properties by which star connections can be ordered. */
export enum StarOrderField {
  /** Allows ordering a list of stars by when they were created. */
  StarredAt = "STARRED_AT",
}

/** The connection type for User. */
export type StargazerConnection = {
  __typename?: "StargazerConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<StargazerEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<User>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** Represents a user that's starred a repository. */
export type StargazerEdge = {
  __typename?: "StargazerEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  node: User
  /** Identifies when the item was starred. */
  starredAt: Scalars["DateTime"]
}

/** Things that can be starred. */
export type Starrable = {
  id: Scalars["ID"]
  /** Returns a count of how many stargazers there are on this object */
  stargazerCount: Scalars["Int"]
  /** A list of users who have starred this starrable. */
  stargazers: StargazerConnection
  /** Returns a boolean indicating whether the viewing user has starred this starrable. */
  viewerHasStarred: Scalars["Boolean"]
}

/** Things that can be starred. */
export type StarrableStargazersArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<StarOrder>
}

/** The connection type for Repository. */
export type StarredRepositoryConnection = {
  __typename?: "StarredRepositoryConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<StarredRepositoryEdge>>>
  /** Is the list of stars for this user truncated? This is true for users that have many stars. */
  isOverLimit: Scalars["Boolean"]
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Repository>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** Represents a starred repository. */
export type StarredRepositoryEdge = {
  __typename?: "StarredRepositoryEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  node: Repository
  /** Identifies when the item was starred. */
  starredAt: Scalars["DateTime"]
}

/** Represents a commit status. */
export type Status = Node & {
  __typename?: "Status"
  /** A list of status contexts and check runs for this commit. */
  combinedContexts: StatusCheckRollupContextConnection
  /** The commit this status is attached to. */
  commit?: Maybe<Commit>
  /** Looks up an individual status context by context name. */
  context?: Maybe<StatusContext>
  /** The individual status contexts for this commit. */
  contexts: Array<StatusContext>
  id: Scalars["ID"]
  /** The combined commit status. */
  state: StatusState
}

/** Represents a commit status. */
export type StatusCombinedContextsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** Represents a commit status. */
export type StatusContextArgs = {
  name: Scalars["String"]
}

/** Represents the rollup for both the check runs and status for a commit. */
export type StatusCheckRollup = Node & {
  __typename?: "StatusCheckRollup"
  /** The commit the status and check runs are attached to. */
  commit?: Maybe<Commit>
  /** A list of status contexts and check runs for this commit. */
  contexts: StatusCheckRollupContextConnection
  id: Scalars["ID"]
  /** The combined status for the commit. */
  state: StatusState
}

/** Represents the rollup for both the check runs and status for a commit. */
export type StatusCheckRollupContextsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** Types that can be inside a StatusCheckRollup context. */
export type StatusCheckRollupContext = CheckRun | StatusContext

/** The connection type for StatusCheckRollupContext. */
export type StatusCheckRollupContextConnection = {
  __typename?: "StatusCheckRollupContextConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<StatusCheckRollupContextEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<StatusCheckRollupContext>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type StatusCheckRollupContextEdge = {
  __typename?: "StatusCheckRollupContextEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<StatusCheckRollupContext>
}

/** Represents an individual commit status context */
export type StatusContext = Node & {
  __typename?: "StatusContext"
  /** The avatar of the OAuth application or the user that created the status */
  avatarUrl?: Maybe<Scalars["URI"]>
  /** This commit this status context is attached to. */
  commit?: Maybe<Commit>
  /** The name of this status context. */
  context: Scalars["String"]
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  /** The actor who created this status context. */
  creator?: Maybe<Actor>
  /** The description for this status context. */
  description?: Maybe<Scalars["String"]>
  id: Scalars["ID"]
  /** The state of this status context. */
  state: StatusState
  /** The URL for this status context. */
  targetUrl?: Maybe<Scalars["URI"]>
}

/** Represents an individual commit status context */
export type StatusContextAvatarUrlArgs = {
  size?: Maybe<Scalars["Int"]>
}

/** The possible commit status states. */
export enum StatusState {
  /** Status is errored. */
  Error = "ERROR",
  /** Status is expected. */
  Expected = "EXPECTED",
  /** Status is failing. */
  Failure = "FAILURE",
  /** Status is pending. */
  Pending = "PENDING",
  /** Status is successful. */
  Success = "SUCCESS",
}

/** Autogenerated input type of SubmitPullRequestReview */
export type SubmitPullRequestReviewInput = {
  /** The text field to set on the Pull Request Review. */
  body?: Maybe<Scalars["String"]>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The event to send to the Pull Request Review. */
  event: PullRequestReviewEvent
  /** The Pull Request ID to submit any pending reviews. */
  pullRequestId?: Maybe<Scalars["ID"]>
  /** The Pull Request Review ID to submit. */
  pullRequestReviewId?: Maybe<Scalars["ID"]>
}

/** Autogenerated return type of SubmitPullRequestReview */
export type SubmitPullRequestReviewPayload = {
  __typename?: "SubmitPullRequestReviewPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The submitted pull request review. */
  pullRequestReview?: Maybe<PullRequestReview>
}

/** A pointer to a repository at a specific revision embedded inside another repository. */
export type Submodule = {
  __typename?: "Submodule"
  /** The branch of the upstream submodule for tracking updates */
  branch?: Maybe<Scalars["String"]>
  /** The git URL of the submodule repository */
  gitUrl: Scalars["URI"]
  /** The name of the submodule in .gitmodules */
  name: Scalars["String"]
  /** The path in the superproject that this submodule is located in */
  path: Scalars["String"]
  /** The commit revision of the subproject repository being tracked by the submodule */
  subprojectCommitOid?: Maybe<Scalars["GitObjectID"]>
}

/** The connection type for Submodule. */
export type SubmoduleConnection = {
  __typename?: "SubmoduleConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SubmoduleEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Submodule>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type SubmoduleEdge = {
  __typename?: "SubmoduleEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<Submodule>
}

/** Entities that can be subscribed to for web and email notifications. */
export type Subscribable = {
  id: Scalars["ID"]
  /** Check if the viewer is able to change their subscription status for the repository. */
  viewerCanSubscribe: Scalars["Boolean"]
  /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
  viewerSubscription?: Maybe<SubscriptionState>
}

/** Represents a 'subscribed' event on a given `Subscribable`. */
export type SubscribedEvent = Node & {
  __typename?: "SubscribedEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  id: Scalars["ID"]
  /** Object referenced by event. */
  subscribable: Subscribable
}

/** The possible states of a subscription. */
export enum SubscriptionState {
  /** The User is never notified. */
  Ignored = "IGNORED",
  /** The User is notified of all conversations. */
  Subscribed = "SUBSCRIBED",
  /** The User is only notified when participating or @mentioned. */
  Unsubscribed = "UNSUBSCRIBED",
}

/** A suggestion to review a pull request based on a user's commit history and review comments. */
export type SuggestedReviewer = {
  __typename?: "SuggestedReviewer"
  /** Is this suggestion based on past commits? */
  isAuthor: Scalars["Boolean"]
  /** Is this suggestion based on past review comments? */
  isCommenter: Scalars["Boolean"]
  /** Identifies the user suggested to review the pull request. */
  reviewer: User
}

/** Represents a Git tag. */
export type Tag = GitObject &
  Node & {
    __typename?: "Tag"
    /** An abbreviated version of the Git object ID */
    abbreviatedOid: Scalars["String"]
    /** The HTTP path for this Git object */
    commitResourcePath: Scalars["URI"]
    /** The HTTP URL for this Git object */
    commitUrl: Scalars["URI"]
    id: Scalars["ID"]
    /** The Git tag message. */
    message?: Maybe<Scalars["String"]>
    /** The Git tag name. */
    name: Scalars["String"]
    /** The Git object ID */
    oid: Scalars["GitObjectID"]
    /** The Repository the Git object belongs to */
    repository: Repository
    /** Details about the tag author. */
    tagger?: Maybe<GitActor>
    /** The Git object the tag points to. */
    target: GitObject
  }

/** A team of users in an organization. */
export type Team = MemberStatusable &
  Node &
  Subscribable & {
    __typename?: "Team"
    /** A list of teams that are ancestors of this team. */
    ancestors: TeamConnection
    /** A URL pointing to the team's avatar. */
    avatarUrl?: Maybe<Scalars["URI"]>
    /** List of child teams belonging to this team */
    childTeams: TeamConnection
    /** The slug corresponding to the organization and team. */
    combinedSlug: Scalars["String"]
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["DateTime"]
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>
    /** The description of the team. */
    description?: Maybe<Scalars["String"]>
    /** Find a team discussion by its number. */
    discussion?: Maybe<TeamDiscussion>
    /** A list of team discussions. */
    discussions: TeamDiscussionConnection
    /** The HTTP path for team discussions */
    discussionsResourcePath: Scalars["URI"]
    /** The HTTP URL for team discussions */
    discussionsUrl: Scalars["URI"]
    /** The HTTP path for editing this team */
    editTeamResourcePath: Scalars["URI"]
    /** The HTTP URL for editing this team */
    editTeamUrl: Scalars["URI"]
    id: Scalars["ID"]
    /** A list of pending invitations for users to this team */
    invitations?: Maybe<OrganizationInvitationConnection>
    /** Get the status messages members of this entity have set that are either public or visible only to the organization. */
    memberStatuses: UserStatusConnection
    /** A list of users who are members of this team. */
    members: TeamMemberConnection
    /** The HTTP path for the team' members */
    membersResourcePath: Scalars["URI"]
    /** The HTTP URL for the team' members */
    membersUrl: Scalars["URI"]
    /** The name of the team. */
    name: Scalars["String"]
    /** The HTTP path creating a new team */
    newTeamResourcePath: Scalars["URI"]
    /** The HTTP URL creating a new team */
    newTeamUrl: Scalars["URI"]
    /** The organization that owns this team. */
    organization: Organization
    /** The parent team of the team. */
    parentTeam?: Maybe<Team>
    /** The level of privacy the team has. */
    privacy: TeamPrivacy
    /** A list of repositories this team has access to. */
    repositories: TeamRepositoryConnection
    /** The HTTP path for this team's repositories */
    repositoriesResourcePath: Scalars["URI"]
    /** The HTTP URL for this team's repositories */
    repositoriesUrl: Scalars["URI"]
    /** The HTTP path for this team */
    resourcePath: Scalars["URI"]
    /** The slug corresponding to the team. */
    slug: Scalars["String"]
    /** The HTTP path for this team's teams */
    teamsResourcePath: Scalars["URI"]
    /** The HTTP URL for this team's teams */
    teamsUrl: Scalars["URI"]
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["DateTime"]
    /** The HTTP URL for this team */
    url: Scalars["URI"]
    /** Team is adminable by the viewer. */
    viewerCanAdminister: Scalars["Boolean"]
    /** Check if the viewer is able to change their subscription status for the repository. */
    viewerCanSubscribe: Scalars["Boolean"]
    /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
    viewerSubscription?: Maybe<SubscriptionState>
  }

/** A team of users in an organization. */
export type TeamAncestorsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** A team of users in an organization. */
export type TeamAvatarUrlArgs = {
  size?: Maybe<Scalars["Int"]>
}

/** A team of users in an organization. */
export type TeamChildTeamsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  immediateOnly?: Maybe<Scalars["Boolean"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<TeamOrder>
  userLogins?: Maybe<Array<Scalars["String"]>>
}

/** A team of users in an organization. */
export type TeamDiscussionArgs = {
  number: Scalars["Int"]
}

/** A team of users in an organization. */
export type TeamDiscussionsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  isPinned?: Maybe<Scalars["Boolean"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<TeamDiscussionOrder>
}

/** A team of users in an organization. */
export type TeamInvitationsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** A team of users in an organization. */
export type TeamMemberStatusesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<UserStatusOrder>
}

/** A team of users in an organization. */
export type TeamMembersArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  membership?: Maybe<TeamMembershipType>
  orderBy?: Maybe<TeamMemberOrder>
  query?: Maybe<Scalars["String"]>
  role?: Maybe<TeamMemberRole>
}

/** A team of users in an organization. */
export type TeamRepositoriesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<TeamRepositoryOrder>
  query?: Maybe<Scalars["String"]>
}

/** Audit log entry for a team.add_member event. */
export type TeamAddMemberAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData &
  TeamAuditEntryData & {
    __typename?: "TeamAddMemberAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** Whether the team was mapped to an LDAP Group. */
    isLdapMapped?: Maybe<Scalars["Boolean"]>
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The team associated with the action */
    team?: Maybe<Team>
    /** The name of the team */
    teamName?: Maybe<Scalars["String"]>
    /** The HTTP path for this team */
    teamResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for this team */
    teamUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** Audit log entry for a team.add_repository event. */
export type TeamAddRepositoryAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData &
  TeamAuditEntryData & {
    __typename?: "TeamAddRepositoryAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** Whether the team was mapped to an LDAP Group. */
    isLdapMapped?: Maybe<Scalars["Boolean"]>
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The repository associated with the action */
    repository?: Maybe<Repository>
    /** The name of the repository */
    repositoryName?: Maybe<Scalars["String"]>
    /** The HTTP path for the repository */
    repositoryResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the repository */
    repositoryUrl?: Maybe<Scalars["URI"]>
    /** The team associated with the action */
    team?: Maybe<Team>
    /** The name of the team */
    teamName?: Maybe<Scalars["String"]>
    /** The HTTP path for this team */
    teamResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for this team */
    teamUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** Metadata for an audit entry with action team.* */
export type TeamAuditEntryData = {
  /** The team associated with the action */
  team?: Maybe<Team>
  /** The name of the team */
  teamName?: Maybe<Scalars["String"]>
  /** The HTTP path for this team */
  teamResourcePath?: Maybe<Scalars["URI"]>
  /** The HTTP URL for this team */
  teamUrl?: Maybe<Scalars["URI"]>
}

/** Audit log entry for a team.change_parent_team event. */
export type TeamChangeParentTeamAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData &
  TeamAuditEntryData & {
    __typename?: "TeamChangeParentTeamAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** Whether the team was mapped to an LDAP Group. */
    isLdapMapped?: Maybe<Scalars["Boolean"]>
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The new parent team. */
    parentTeam?: Maybe<Team>
    /** The name of the new parent team */
    parentTeamName?: Maybe<Scalars["String"]>
    /** The name of the former parent team */
    parentTeamNameWas?: Maybe<Scalars["String"]>
    /** The HTTP path for the parent team */
    parentTeamResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the parent team */
    parentTeamUrl?: Maybe<Scalars["URI"]>
    /** The former parent team. */
    parentTeamWas?: Maybe<Team>
    /** The HTTP path for the previous parent team */
    parentTeamWasResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the previous parent team */
    parentTeamWasUrl?: Maybe<Scalars["URI"]>
    /** The team associated with the action */
    team?: Maybe<Team>
    /** The name of the team */
    teamName?: Maybe<Scalars["String"]>
    /** The HTTP path for this team */
    teamResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for this team */
    teamUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** The connection type for Team. */
export type TeamConnection = {
  __typename?: "TeamConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TeamEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Team>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** A team discussion. */
export type TeamDiscussion = Comment &
  Deletable &
  Node &
  Reactable &
  Subscribable &
  UniformResourceLocatable &
  Updatable &
  UpdatableComment & {
    __typename?: "TeamDiscussion"
    /** The actor who authored the comment. */
    author?: Maybe<Actor>
    /** Author's association with the discussion's team. */
    authorAssociation: CommentAuthorAssociation
    /** The body as Markdown. */
    body: Scalars["String"]
    /** The body rendered to HTML. */
    bodyHTML: Scalars["HTML"]
    /** The body rendered to text. */
    bodyText: Scalars["String"]
    /** Identifies the discussion body hash. */
    bodyVersion: Scalars["String"]
    /** A list of comments on this discussion. */
    comments: TeamDiscussionCommentConnection
    /** The HTTP path for discussion comments */
    commentsResourcePath: Scalars["URI"]
    /** The HTTP URL for discussion comments */
    commentsUrl: Scalars["URI"]
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["DateTime"]
    /** Check if this comment was created via an email reply. */
    createdViaEmail: Scalars["Boolean"]
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>
    /** The actor who edited the comment. */
    editor?: Maybe<Actor>
    id: Scalars["ID"]
    /** Check if this comment was edited and includes an edit with the creation data */
    includesCreatedEdit: Scalars["Boolean"]
    /** Whether or not the discussion is pinned. */
    isPinned: Scalars["Boolean"]
    /** Whether or not the discussion is only visible to team members and org admins. */
    isPrivate: Scalars["Boolean"]
    /** The moment the editor made the last edit */
    lastEditedAt?: Maybe<Scalars["DateTime"]>
    /** Identifies the discussion within its team. */
    number: Scalars["Int"]
    /** Identifies when the comment was published at. */
    publishedAt?: Maybe<Scalars["DateTime"]>
    /** A list of reactions grouped by content left on the subject. */
    reactionGroups?: Maybe<Array<ReactionGroup>>
    /** A list of Reactions left on the Issue. */
    reactions: ReactionConnection
    /** The HTTP path for this discussion */
    resourcePath: Scalars["URI"]
    /** The team that defines the context of this discussion. */
    team: Team
    /** The title of the discussion */
    title: Scalars["String"]
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["DateTime"]
    /** The HTTP URL for this discussion */
    url: Scalars["URI"]
    /** A list of edits to this content. */
    userContentEdits?: Maybe<UserContentEditConnection>
    /** Check if the current viewer can delete this object. */
    viewerCanDelete: Scalars["Boolean"]
    /** Whether or not the current viewer can pin this discussion. */
    viewerCanPin: Scalars["Boolean"]
    /** Can user react to this subject */
    viewerCanReact: Scalars["Boolean"]
    /** Check if the viewer is able to change their subscription status for the repository. */
    viewerCanSubscribe: Scalars["Boolean"]
    /** Check if the current viewer can update this object. */
    viewerCanUpdate: Scalars["Boolean"]
    /** Reasons why the current viewer can not update this comment. */
    viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>
    /** Did the viewer author this comment. */
    viewerDidAuthor: Scalars["Boolean"]
    /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
    viewerSubscription?: Maybe<SubscriptionState>
  }

/** A team discussion. */
export type TeamDiscussionCommentsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  fromComment?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<TeamDiscussionCommentOrder>
}

/** A team discussion. */
export type TeamDiscussionReactionsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  content?: Maybe<ReactionContent>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<ReactionOrder>
}

/** A team discussion. */
export type TeamDiscussionUserContentEditsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** A comment on a team discussion. */
export type TeamDiscussionComment = Comment &
  Deletable &
  Node &
  Reactable &
  UniformResourceLocatable &
  Updatable &
  UpdatableComment & {
    __typename?: "TeamDiscussionComment"
    /** The actor who authored the comment. */
    author?: Maybe<Actor>
    /** Author's association with the comment's team. */
    authorAssociation: CommentAuthorAssociation
    /** The body as Markdown. */
    body: Scalars["String"]
    /** The body rendered to HTML. */
    bodyHTML: Scalars["HTML"]
    /** The body rendered to text. */
    bodyText: Scalars["String"]
    /** The current version of the body content. */
    bodyVersion: Scalars["String"]
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["DateTime"]
    /** Check if this comment was created via an email reply. */
    createdViaEmail: Scalars["Boolean"]
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>
    /** The discussion this comment is about. */
    discussion: TeamDiscussion
    /** The actor who edited the comment. */
    editor?: Maybe<Actor>
    id: Scalars["ID"]
    /** Check if this comment was edited and includes an edit with the creation data */
    includesCreatedEdit: Scalars["Boolean"]
    /** The moment the editor made the last edit */
    lastEditedAt?: Maybe<Scalars["DateTime"]>
    /** Identifies the comment number. */
    number: Scalars["Int"]
    /** Identifies when the comment was published at. */
    publishedAt?: Maybe<Scalars["DateTime"]>
    /** A list of reactions grouped by content left on the subject. */
    reactionGroups?: Maybe<Array<ReactionGroup>>
    /** A list of Reactions left on the Issue. */
    reactions: ReactionConnection
    /** The HTTP path for this comment */
    resourcePath: Scalars["URI"]
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["DateTime"]
    /** The HTTP URL for this comment */
    url: Scalars["URI"]
    /** A list of edits to this content. */
    userContentEdits?: Maybe<UserContentEditConnection>
    /** Check if the current viewer can delete this object. */
    viewerCanDelete: Scalars["Boolean"]
    /** Can user react to this subject */
    viewerCanReact: Scalars["Boolean"]
    /** Check if the current viewer can update this object. */
    viewerCanUpdate: Scalars["Boolean"]
    /** Reasons why the current viewer can not update this comment. */
    viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>
    /** Did the viewer author this comment. */
    viewerDidAuthor: Scalars["Boolean"]
  }

/** A comment on a team discussion. */
export type TeamDiscussionCommentReactionsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  content?: Maybe<ReactionContent>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<ReactionOrder>
}

/** A comment on a team discussion. */
export type TeamDiscussionCommentUserContentEditsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** The connection type for TeamDiscussionComment. */
export type TeamDiscussionCommentConnection = {
  __typename?: "TeamDiscussionCommentConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TeamDiscussionCommentEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<TeamDiscussionComment>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type TeamDiscussionCommentEdge = {
  __typename?: "TeamDiscussionCommentEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<TeamDiscussionComment>
}

/** Ways in which team discussion comment connections can be ordered. */
export type TeamDiscussionCommentOrder = {
  /** The direction in which to order nodes. */
  direction: OrderDirection
  /** The field by which to order nodes. */
  field: TeamDiscussionCommentOrderField
}

/** Properties by which team discussion comment connections can be ordered. */
export enum TeamDiscussionCommentOrderField {
  /** Allows sequential ordering of team discussion comments (which is equivalent to chronological ordering). */
  Number = "NUMBER",
}

/** The connection type for TeamDiscussion. */
export type TeamDiscussionConnection = {
  __typename?: "TeamDiscussionConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TeamDiscussionEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<TeamDiscussion>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type TeamDiscussionEdge = {
  __typename?: "TeamDiscussionEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<TeamDiscussion>
}

/** Ways in which team discussion connections can be ordered. */
export type TeamDiscussionOrder = {
  /** The direction in which to order nodes. */
  direction: OrderDirection
  /** The field by which to order nodes. */
  field: TeamDiscussionOrderField
}

/** Properties by which team discussion connections can be ordered. */
export enum TeamDiscussionOrderField {
  /** Allows chronological ordering of team discussions. */
  CreatedAt = "CREATED_AT",
}

/** An edge in a connection. */
export type TeamEdge = {
  __typename?: "TeamEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<Team>
}

/** The connection type for User. */
export type TeamMemberConnection = {
  __typename?: "TeamMemberConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TeamMemberEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<User>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** Represents a user who is a member of a team. */
export type TeamMemberEdge = {
  __typename?: "TeamMemberEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The HTTP path to the organization's member access page. */
  memberAccessResourcePath: Scalars["URI"]
  /** The HTTP URL to the organization's member access page. */
  memberAccessUrl: Scalars["URI"]
  node: User
  /** The role the member has on the team. */
  role: TeamMemberRole
}

/** Ordering options for team member connections */
export type TeamMemberOrder = {
  /** The ordering direction. */
  direction: OrderDirection
  /** The field to order team members by. */
  field: TeamMemberOrderField
}

/** Properties by which team member connections can be ordered. */
export enum TeamMemberOrderField {
  /** Order team members by creation time */
  CreatedAt = "CREATED_AT",
  /** Order team members by login */
  Login = "LOGIN",
}

/** The possible team member roles; either 'maintainer' or 'member'. */
export enum TeamMemberRole {
  /** A team maintainer has permission to add and remove team members. */
  Maintainer = "MAINTAINER",
  /** A team member has no administrative permissions on the team. */
  Member = "MEMBER",
}

/** Defines which types of team members are included in the returned list. Can be one of IMMEDIATE, CHILD_TEAM or ALL. */
export enum TeamMembershipType {
  /** Includes immediate and child team members for the team. */
  All = "ALL",
  /** Includes only child team members for the team. */
  ChildTeam = "CHILD_TEAM",
  /** Includes only immediate members of the team. */
  Immediate = "IMMEDIATE",
}

/** Ways in which team connections can be ordered. */
export type TeamOrder = {
  /** The direction in which to order nodes. */
  direction: OrderDirection
  /** The field in which to order nodes by. */
  field: TeamOrderField
}

/** Properties by which team connections can be ordered. */
export enum TeamOrderField {
  /** Allows ordering a list of teams by name. */
  Name = "NAME",
}

/** The possible team privacy values. */
export enum TeamPrivacy {
  /** A secret team can only be seen by its members. */
  Secret = "SECRET",
  /** A visible team can be seen and @mentioned by every member of the organization. */
  Visible = "VISIBLE",
}

/** Audit log entry for a team.remove_member event. */
export type TeamRemoveMemberAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData &
  TeamAuditEntryData & {
    __typename?: "TeamRemoveMemberAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** Whether the team was mapped to an LDAP Group. */
    isLdapMapped?: Maybe<Scalars["Boolean"]>
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The team associated with the action */
    team?: Maybe<Team>
    /** The name of the team */
    teamName?: Maybe<Scalars["String"]>
    /** The HTTP path for this team */
    teamResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for this team */
    teamUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** Audit log entry for a team.remove_repository event. */
export type TeamRemoveRepositoryAuditEntry = AuditEntry &
  Node &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData &
  TeamAuditEntryData & {
    __typename?: "TeamRemoveRepositoryAuditEntry"
    /** The action name */
    action: Scalars["String"]
    /** The user who initiated the action */
    actor?: Maybe<AuditEntryActor>
    /** The IP address of the actor */
    actorIp?: Maybe<Scalars["String"]>
    /** A readable representation of the actor's location */
    actorLocation?: Maybe<ActorLocation>
    /** The username of the user who initiated the action */
    actorLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the actor. */
    actorResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the actor. */
    actorUrl?: Maybe<Scalars["URI"]>
    /** The time the action was initiated */
    createdAt: Scalars["PreciseDateTime"]
    id: Scalars["ID"]
    /** Whether the team was mapped to an LDAP Group. */
    isLdapMapped?: Maybe<Scalars["Boolean"]>
    /** The corresponding operation type for the action */
    operationType?: Maybe<OperationType>
    /** The Organization associated with the Audit Entry. */
    organization?: Maybe<Organization>
    /** The name of the Organization. */
    organizationName?: Maybe<Scalars["String"]>
    /** The HTTP path for the organization */
    organizationResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the organization */
    organizationUrl?: Maybe<Scalars["URI"]>
    /** The repository associated with the action */
    repository?: Maybe<Repository>
    /** The name of the repository */
    repositoryName?: Maybe<Scalars["String"]>
    /** The HTTP path for the repository */
    repositoryResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the repository */
    repositoryUrl?: Maybe<Scalars["URI"]>
    /** The team associated with the action */
    team?: Maybe<Team>
    /** The name of the team */
    teamName?: Maybe<Scalars["String"]>
    /** The HTTP path for this team */
    teamResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for this team */
    teamUrl?: Maybe<Scalars["URI"]>
    /** The user affected by the action */
    user?: Maybe<User>
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin?: Maybe<Scalars["String"]>
    /** The HTTP path for the user. */
    userResourcePath?: Maybe<Scalars["URI"]>
    /** The HTTP URL for the user. */
    userUrl?: Maybe<Scalars["URI"]>
  }

/** The connection type for Repository. */
export type TeamRepositoryConnection = {
  __typename?: "TeamRepositoryConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TeamRepositoryEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Repository>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** Represents a team repository. */
export type TeamRepositoryEdge = {
  __typename?: "TeamRepositoryEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  node: Repository
  /** The permission level the team has on the repository */
  permission: RepositoryPermission
}

/** Ordering options for team repository connections */
export type TeamRepositoryOrder = {
  /** The ordering direction. */
  direction: OrderDirection
  /** The field to order repositories by. */
  field: TeamRepositoryOrderField
}

/** Properties by which team repository connections can be ordered. */
export enum TeamRepositoryOrderField {
  /** Order repositories by creation time */
  CreatedAt = "CREATED_AT",
  /** Order repositories by name */
  Name = "NAME",
  /** Order repositories by permission */
  Permission = "PERMISSION",
  /** Order repositories by push time */
  PushedAt = "PUSHED_AT",
  /** Order repositories by number of stargazers */
  Stargazers = "STARGAZERS",
  /** Order repositories by update time */
  UpdatedAt = "UPDATED_AT",
}

/** The role of a user on a team. */
export enum TeamRole {
  /** User has admin rights on the team. */
  Admin = "ADMIN",
  /** User is a member of the team. */
  Member = "MEMBER",
}

/** A text match within a search result. */
export type TextMatch = {
  __typename?: "TextMatch"
  /** The specific text fragment within the property matched on. */
  fragment: Scalars["String"]
  /** Highlights within the matched fragment. */
  highlights: Array<TextMatchHighlight>
  /** The property matched on. */
  property: Scalars["String"]
}

/** Represents a single highlight in a search result match. */
export type TextMatchHighlight = {
  __typename?: "TextMatchHighlight"
  /** The indice in the fragment where the matched text begins. */
  beginIndice: Scalars["Int"]
  /** The indice in the fragment where the matched text ends. */
  endIndice: Scalars["Int"]
  /** The text matched. */
  text: Scalars["String"]
}

/** A topic aggregates entities that are related to a subject. */
export type Topic = Node &
  Starrable & {
    __typename?: "Topic"
    id: Scalars["ID"]
    /** The topic's name. */
    name: Scalars["String"]
    /**
     * A list of related topics, including aliases of this topic, sorted with the most relevant
     * first. Returns up to 10 Topics.
     */
    relatedTopics: Array<Topic>
    /** Returns a count of how many stargazers there are on this object */
    stargazerCount: Scalars["Int"]
    /** A list of users who have starred this starrable. */
    stargazers: StargazerConnection
    /** Returns a boolean indicating whether the viewing user has starred this starrable. */
    viewerHasStarred: Scalars["Boolean"]
  }

/** A topic aggregates entities that are related to a subject. */
export type TopicRelatedTopicsArgs = {
  first?: Maybe<Scalars["Int"]>
}

/** A topic aggregates entities that are related to a subject. */
export type TopicStargazersArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<StarOrder>
}

/** Metadata for an audit entry with a topic. */
export type TopicAuditEntryData = {
  /** The name of the topic added to the repository */
  topic?: Maybe<Topic>
  /** The name of the topic added to the repository */
  topicName?: Maybe<Scalars["String"]>
}

/** Reason that the suggested topic is declined. */
export enum TopicSuggestionDeclineReason {
  /** The suggested topic is not relevant to the repository. */
  NotRelevant = "NOT_RELEVANT",
  /** The viewer does not like the suggested topic. */
  PersonalPreference = "PERSONAL_PREFERENCE",
  /** The suggested topic is too general for the repository. */
  TooGeneral = "TOO_GENERAL",
  /** The suggested topic is too specific for the repository (e.g. #ruby-on-rails-version-4-2-1). */
  TooSpecific = "TOO_SPECIFIC",
}

/** Autogenerated input type of TransferIssue */
export type TransferIssueInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The Node ID of the issue to be transferred */
  issueId: Scalars["ID"]
  /** The Node ID of the repository the issue should be transferred to */
  repositoryId: Scalars["ID"]
}

/** Autogenerated return type of TransferIssue */
export type TransferIssuePayload = {
  __typename?: "TransferIssuePayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The issue that was transferred */
  issue?: Maybe<Issue>
}

/** Represents a 'transferred' event on a given issue or pull request. */
export type TransferredEvent = Node & {
  __typename?: "TransferredEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  /** The repository this came from */
  fromRepository?: Maybe<Repository>
  id: Scalars["ID"]
  /** Identifies the issue associated with the event. */
  issue: Issue
}

/** Represents a Git tree. */
export type Tree = GitObject &
  Node & {
    __typename?: "Tree"
    /** An abbreviated version of the Git object ID */
    abbreviatedOid: Scalars["String"]
    /** The HTTP path for this Git object */
    commitResourcePath: Scalars["URI"]
    /** The HTTP URL for this Git object */
    commitUrl: Scalars["URI"]
    /** A list of tree entries. */
    entries?: Maybe<Array<TreeEntry>>
    id: Scalars["ID"]
    /** The Git object ID */
    oid: Scalars["GitObjectID"]
    /** The Repository the Git object belongs to */
    repository: Repository
  }

/** Represents a Git tree entry. */
export type TreeEntry = {
  __typename?: "TreeEntry"
  /** The extension of the file */
  extension?: Maybe<Scalars["String"]>
  /** Whether or not this tree entry is generated */
  isGenerated: Scalars["Boolean"]
  /** Entry file mode. */
  mode: Scalars["Int"]
  /** Entry file name. */
  name: Scalars["String"]
  /** Entry file object. */
  object?: Maybe<GitObject>
  /** Entry file Git object ID. */
  oid: Scalars["GitObjectID"]
  /** The full path of the file. */
  path?: Maybe<Scalars["String"]>
  /** The Repository the tree entry belongs to */
  repository: Repository
  /** If the TreeEntry is for a directory occupied by a submodule project, this returns the corresponding submodule */
  submodule?: Maybe<Submodule>
  /** Entry file type. */
  type: Scalars["String"]
}

/** Autogenerated input type of UnarchiveRepository */
export type UnarchiveRepositoryInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ID of the repository to unarchive. */
  repositoryId: Scalars["ID"]
}

/** Autogenerated return type of UnarchiveRepository */
export type UnarchiveRepositoryPayload = {
  __typename?: "UnarchiveRepositoryPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The repository that was unarchived. */
  repository?: Maybe<Repository>
}

/** Represents an 'unassigned' event on any assignable object. */
export type UnassignedEvent = Node & {
  __typename?: "UnassignedEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** Identifies the assignable associated with the event. */
  assignable: Assignable
  /** Identifies the user or mannequin that was unassigned. */
  assignee?: Maybe<Assignee>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  id: Scalars["ID"]
  /**
   * Identifies the subject (user) who was unassigned.
   * @deprecated Assignees can now be mannequins. Use the `assignee` field instead. Removal on 2020-01-01 UTC.
   */
  user?: Maybe<User>
}

/** Autogenerated input type of UnfollowUser */
export type UnfollowUserInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** ID of the user to unfollow. */
  userId: Scalars["ID"]
}

/** Autogenerated return type of UnfollowUser */
export type UnfollowUserPayload = {
  __typename?: "UnfollowUserPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The user that was unfollowed. */
  user?: Maybe<User>
}

/** Represents a type that can be retrieved by a URL. */
export type UniformResourceLocatable = {
  /** The HTML path to this resource. */
  resourcePath: Scalars["URI"]
  /** The URL to this resource. */
  url: Scalars["URI"]
}

/** Represents an unknown signature on a Commit or Tag. */
export type UnknownSignature = GitSignature & {
  __typename?: "UnknownSignature"
  /** Email used to sign this object. */
  email: Scalars["String"]
  /** True if the signature is valid and verified by GitHub. */
  isValid: Scalars["Boolean"]
  /** Payload for GPG signing object. Raw ODB object without the signature header. */
  payload: Scalars["String"]
  /** ASCII-armored signature header from object. */
  signature: Scalars["String"]
  /** GitHub user corresponding to the email signing this commit. */
  signer?: Maybe<User>
  /**
   * The state of this signature. `VALID` if signature is valid and verified by
   * GitHub, otherwise represents reason why signature is considered invalid.
   */
  state: GitSignatureState
  /** True if the signature was made with GitHub's signing key. */
  wasSignedByGitHub: Scalars["Boolean"]
}

/** Represents an 'unlabeled' event on a given issue or pull request. */
export type UnlabeledEvent = Node & {
  __typename?: "UnlabeledEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  id: Scalars["ID"]
  /** Identifies the label associated with the 'unlabeled' event. */
  label: Label
  /** Identifies the `Labelable` associated with the event. */
  labelable: Labelable
}

/** Autogenerated input type of UnlinkRepositoryFromProject */
export type UnlinkRepositoryFromProjectInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ID of the Project linked to the Repository. */
  projectId: Scalars["ID"]
  /** The ID of the Repository linked to the Project. */
  repositoryId: Scalars["ID"]
}

/** Autogenerated return type of UnlinkRepositoryFromProject */
export type UnlinkRepositoryFromProjectPayload = {
  __typename?: "UnlinkRepositoryFromProjectPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The linked Project. */
  project?: Maybe<Project>
  /** The linked Repository. */
  repository?: Maybe<Repository>
}

/** Autogenerated input type of UnlockLockable */
export type UnlockLockableInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** ID of the issue or pull request to be unlocked. */
  lockableId: Scalars["ID"]
}

/** Autogenerated return type of UnlockLockable */
export type UnlockLockablePayload = {
  __typename?: "UnlockLockablePayload"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The item that was unlocked. */
  unlockedRecord?: Maybe<Lockable>
}

/** Represents an 'unlocked' event on a given issue or pull request. */
export type UnlockedEvent = Node & {
  __typename?: "UnlockedEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  id: Scalars["ID"]
  /** Object that was unlocked. */
  lockable: Lockable
}

/** Autogenerated input type of UnmarkFileAsViewed */
export type UnmarkFileAsViewedInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The path of the file to mark as unviewed */
  path: Scalars["String"]
  /** The Node ID of the pull request. */
  pullRequestId: Scalars["ID"]
}

/** Autogenerated return type of UnmarkFileAsViewed */
export type UnmarkFileAsViewedPayload = {
  __typename?: "UnmarkFileAsViewedPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The updated pull request. */
  pullRequest?: Maybe<PullRequest>
}

/** Autogenerated input type of UnmarkIssueAsDuplicate */
export type UnmarkIssueAsDuplicateInput = {
  /** ID of the issue or pull request currently considered canonical/authoritative/original. */
  canonicalId: Scalars["ID"]
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** ID of the issue or pull request currently marked as a duplicate. */
  duplicateId: Scalars["ID"]
}

/** Autogenerated return type of UnmarkIssueAsDuplicate */
export type UnmarkIssueAsDuplicatePayload = {
  __typename?: "UnmarkIssueAsDuplicatePayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The issue or pull request that was marked as a duplicate. */
  duplicate?: Maybe<IssueOrPullRequest>
}

/** Represents an 'unmarked_as_duplicate' event on a given issue or pull request. */
export type UnmarkedAsDuplicateEvent = Node & {
  __typename?: "UnmarkedAsDuplicateEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** The authoritative issue or pull request which has been duplicated by another. */
  canonical?: Maybe<IssueOrPullRequest>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  /** The issue or pull request which has been marked as a duplicate of another. */
  duplicate?: Maybe<IssueOrPullRequest>
  id: Scalars["ID"]
  /** Canonical and duplicate belong to different repositories. */
  isCrossRepository: Scalars["Boolean"]
}

/** Autogenerated input type of UnminimizeComment */
export type UnminimizeCommentInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The Node ID of the subject to modify. */
  subjectId: Scalars["ID"]
}

/** Autogenerated return type of UnminimizeComment */
export type UnminimizeCommentPayload = {
  __typename?: "UnminimizeCommentPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The comment that was unminimized. */
  unminimizedComment?: Maybe<Minimizable>
}

/** Represents an 'unpinned' event on a given issue or pull request. */
export type UnpinnedEvent = Node & {
  __typename?: "UnpinnedEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  id: Scalars["ID"]
  /** Identifies the issue associated with the event. */
  issue: Issue
}

/** Autogenerated input type of UnresolveReviewThread */
export type UnresolveReviewThreadInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ID of the thread to unresolve */
  threadId: Scalars["ID"]
}

/** Autogenerated return type of UnresolveReviewThread */
export type UnresolveReviewThreadPayload = {
  __typename?: "UnresolveReviewThreadPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The thread to resolve. */
  thread?: Maybe<PullRequestReviewThread>
}

/** Represents an 'unsubscribed' event on a given `Subscribable`. */
export type UnsubscribedEvent = Node & {
  __typename?: "UnsubscribedEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  id: Scalars["ID"]
  /** Object referenced by event. */
  subscribable: Subscribable
}

/** Entities that can be updated. */
export type Updatable = {
  /** Check if the current viewer can update this object. */
  viewerCanUpdate: Scalars["Boolean"]
}

/** Comments that can be updated. */
export type UpdatableComment = {
  /** Reasons why the current viewer can not update this comment. */
  viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>
}

/** Autogenerated input type of UpdateBranchProtectionRule */
export type UpdateBranchProtectionRuleInput = {
  /** Can this branch be deleted. */
  allowsDeletions?: Maybe<Scalars["Boolean"]>
  /** Are force pushes allowed on this branch. */
  allowsForcePushes?: Maybe<Scalars["Boolean"]>
  /** The global relay id of the branch protection rule to be updated. */
  branchProtectionRuleId: Scalars["ID"]
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** Will new commits pushed to matching branches dismiss pull request review approvals. */
  dismissesStaleReviews?: Maybe<Scalars["Boolean"]>
  /** Can admins overwrite branch protection. */
  isAdminEnforced?: Maybe<Scalars["Boolean"]>
  /** The glob-like pattern used to determine matching branches. */
  pattern?: Maybe<Scalars["String"]>
  /** A list of User, Team or App IDs allowed to push to matching branches. */
  pushActorIds?: Maybe<Array<Scalars["ID"]>>
  /** Number of approving reviews required to update matching branches. */
  requiredApprovingReviewCount?: Maybe<Scalars["Int"]>
  /** List of required status check contexts that must pass for commits to be accepted to matching branches. */
  requiredStatusCheckContexts?: Maybe<Array<Scalars["String"]>>
  /** Are approving reviews required to update matching branches. */
  requiresApprovingReviews?: Maybe<Scalars["Boolean"]>
  /** Are reviews from code owners required to update matching branches. */
  requiresCodeOwnerReviews?: Maybe<Scalars["Boolean"]>
  /** Are commits required to be signed. */
  requiresCommitSignatures?: Maybe<Scalars["Boolean"]>
  /** Are merge commits prohibited from being pushed to this branch. */
  requiresLinearHistory?: Maybe<Scalars["Boolean"]>
  /** Are status checks required to update matching branches. */
  requiresStatusChecks?: Maybe<Scalars["Boolean"]>
  /** Are branches required to be up to date before merging. */
  requiresStrictStatusChecks?: Maybe<Scalars["Boolean"]>
  /** Is pushing to matching branches restricted. */
  restrictsPushes?: Maybe<Scalars["Boolean"]>
  /** Is dismissal of pull request reviews restricted. */
  restrictsReviewDismissals?: Maybe<Scalars["Boolean"]>
  /** A list of User or Team IDs allowed to dismiss reviews on pull requests targeting matching branches. */
  reviewDismissalActorIds?: Maybe<Array<Scalars["ID"]>>
}

/** Autogenerated return type of UpdateBranchProtectionRule */
export type UpdateBranchProtectionRulePayload = {
  __typename?: "UpdateBranchProtectionRulePayload"
  /** The newly created BranchProtectionRule. */
  branchProtectionRule?: Maybe<BranchProtectionRule>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
}

/** Autogenerated input type of UpdateCheckRun */
export type UpdateCheckRunInput = {
  /** Possible further actions the integrator can perform, which a user may trigger. */
  actions?: Maybe<Array<CheckRunAction>>
  /** The node of the check. */
  checkRunId: Scalars["ID"]
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The time that the check run finished. */
  completedAt?: Maybe<Scalars["DateTime"]>
  /** The final conclusion of the check. */
  conclusion?: Maybe<CheckConclusionState>
  /** The URL of the integrator's site that has the full details of the check. */
  detailsUrl?: Maybe<Scalars["URI"]>
  /** A reference for the run on the integrator's system. */
  externalId?: Maybe<Scalars["String"]>
  /** The name of the check. */
  name?: Maybe<Scalars["String"]>
  /** Descriptive details about the run. */
  output?: Maybe<CheckRunOutput>
  /** The node ID of the repository. */
  repositoryId: Scalars["ID"]
  /** The time that the check run began. */
  startedAt?: Maybe<Scalars["DateTime"]>
  /** The current status. */
  status?: Maybe<RequestableCheckStatusState>
}

/** Autogenerated return type of UpdateCheckRun */
export type UpdateCheckRunPayload = {
  __typename?: "UpdateCheckRunPayload"
  /** The updated check run. */
  checkRun?: Maybe<CheckRun>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
}

/** Autogenerated input type of UpdateCheckSuitePreferences */
export type UpdateCheckSuitePreferencesInput = {
  /** The check suite preferences to modify. */
  autoTriggerPreferences: Array<CheckSuiteAutoTriggerPreference>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The Node ID of the repository. */
  repositoryId: Scalars["ID"]
}

/** Autogenerated return type of UpdateCheckSuitePreferences */
export type UpdateCheckSuitePreferencesPayload = {
  __typename?: "UpdateCheckSuitePreferencesPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The updated repository. */
  repository?: Maybe<Repository>
}

/** Autogenerated input type of UpdateEnterpriseAdministratorRole */
export type UpdateEnterpriseAdministratorRoleInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ID of the Enterprise which the admin belongs to. */
  enterpriseId: Scalars["ID"]
  /** The login of a administrator whose role is being changed. */
  login: Scalars["String"]
  /** The new role for the Enterprise administrator. */
  role: EnterpriseAdministratorRole
}

/** Autogenerated return type of UpdateEnterpriseAdministratorRole */
export type UpdateEnterpriseAdministratorRolePayload = {
  __typename?: "UpdateEnterpriseAdministratorRolePayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** A message confirming the result of changing the administrator's role. */
  message?: Maybe<Scalars["String"]>
}

/** Autogenerated input type of UpdateEnterpriseAllowPrivateRepositoryForkingSetting */
export type UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ID of the enterprise on which to set the allow private repository forking setting. */
  enterpriseId: Scalars["ID"]
  /** The value for the allow private repository forking setting on the enterprise. */
  settingValue: EnterpriseEnabledDisabledSettingValue
}

/** Autogenerated return type of UpdateEnterpriseAllowPrivateRepositoryForkingSetting */
export type UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload = {
  __typename?: "UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The enterprise with the updated allow private repository forking setting. */
  enterprise?: Maybe<Enterprise>
  /** A message confirming the result of updating the allow private repository forking setting. */
  message?: Maybe<Scalars["String"]>
}

/** Autogenerated input type of UpdateEnterpriseDefaultRepositoryPermissionSetting */
export type UpdateEnterpriseDefaultRepositoryPermissionSettingInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ID of the enterprise on which to set the default repository permission setting. */
  enterpriseId: Scalars["ID"]
  /** The value for the default repository permission setting on the enterprise. */
  settingValue: EnterpriseDefaultRepositoryPermissionSettingValue
}

/** Autogenerated return type of UpdateEnterpriseDefaultRepositoryPermissionSetting */
export type UpdateEnterpriseDefaultRepositoryPermissionSettingPayload = {
  __typename?: "UpdateEnterpriseDefaultRepositoryPermissionSettingPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The enterprise with the updated default repository permission setting. */
  enterprise?: Maybe<Enterprise>
  /** A message confirming the result of updating the default repository permission setting. */
  message?: Maybe<Scalars["String"]>
}

/** Autogenerated input type of UpdateEnterpriseMembersCanChangeRepositoryVisibilitySetting */
export type UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ID of the enterprise on which to set the members can change repository visibility setting. */
  enterpriseId: Scalars["ID"]
  /** The value for the members can change repository visibility setting on the enterprise. */
  settingValue: EnterpriseEnabledDisabledSettingValue
}

/** Autogenerated return type of UpdateEnterpriseMembersCanChangeRepositoryVisibilitySetting */
export type UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload = {
  __typename?: "UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The enterprise with the updated members can change repository visibility setting. */
  enterprise?: Maybe<Enterprise>
  /** A message confirming the result of updating the members can change repository visibility setting. */
  message?: Maybe<Scalars["String"]>
}

/** Autogenerated input type of UpdateEnterpriseMembersCanCreateRepositoriesSetting */
export type UpdateEnterpriseMembersCanCreateRepositoriesSettingInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ID of the enterprise on which to set the members can create repositories setting. */
  enterpriseId: Scalars["ID"]
  /** Allow members to create internal repositories. Defaults to current value. */
  membersCanCreateInternalRepositories?: Maybe<Scalars["Boolean"]>
  /** Allow members to create private repositories. Defaults to current value. */
  membersCanCreatePrivateRepositories?: Maybe<Scalars["Boolean"]>
  /** Allow members to create public repositories. Defaults to current value. */
  membersCanCreatePublicRepositories?: Maybe<Scalars["Boolean"]>
  /** When false, allow member organizations to set their own repository creation member privileges. */
  membersCanCreateRepositoriesPolicyEnabled?: Maybe<Scalars["Boolean"]>
  /**
   * Value for the members can create repositories setting on the enterprise. This
   * or the granular public/private/internal allowed fields (but not both) must be provided.
   */
  settingValue?: Maybe<EnterpriseMembersCanCreateRepositoriesSettingValue>
}

/** Autogenerated return type of UpdateEnterpriseMembersCanCreateRepositoriesSetting */
export type UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload = {
  __typename?: "UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The enterprise with the updated members can create repositories setting. */
  enterprise?: Maybe<Enterprise>
  /** A message confirming the result of updating the members can create repositories setting. */
  message?: Maybe<Scalars["String"]>
}

/** Autogenerated input type of UpdateEnterpriseMembersCanDeleteIssuesSetting */
export type UpdateEnterpriseMembersCanDeleteIssuesSettingInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ID of the enterprise on which to set the members can delete issues setting. */
  enterpriseId: Scalars["ID"]
  /** The value for the members can delete issues setting on the enterprise. */
  settingValue: EnterpriseEnabledDisabledSettingValue
}

/** Autogenerated return type of UpdateEnterpriseMembersCanDeleteIssuesSetting */
export type UpdateEnterpriseMembersCanDeleteIssuesSettingPayload = {
  __typename?: "UpdateEnterpriseMembersCanDeleteIssuesSettingPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The enterprise with the updated members can delete issues setting. */
  enterprise?: Maybe<Enterprise>
  /** A message confirming the result of updating the members can delete issues setting. */
  message?: Maybe<Scalars["String"]>
}

/** Autogenerated input type of UpdateEnterpriseMembersCanDeleteRepositoriesSetting */
export type UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ID of the enterprise on which to set the members can delete repositories setting. */
  enterpriseId: Scalars["ID"]
  /** The value for the members can delete repositories setting on the enterprise. */
  settingValue: EnterpriseEnabledDisabledSettingValue
}

/** Autogenerated return type of UpdateEnterpriseMembersCanDeleteRepositoriesSetting */
export type UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload = {
  __typename?: "UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The enterprise with the updated members can delete repositories setting. */
  enterprise?: Maybe<Enterprise>
  /** A message confirming the result of updating the members can delete repositories setting. */
  message?: Maybe<Scalars["String"]>
}

/** Autogenerated input type of UpdateEnterpriseMembersCanInviteCollaboratorsSetting */
export type UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ID of the enterprise on which to set the members can invite collaborators setting. */
  enterpriseId: Scalars["ID"]
  /** The value for the members can invite collaborators setting on the enterprise. */
  settingValue: EnterpriseEnabledDisabledSettingValue
}

/** Autogenerated return type of UpdateEnterpriseMembersCanInviteCollaboratorsSetting */
export type UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload = {
  __typename?: "UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The enterprise with the updated members can invite collaborators setting. */
  enterprise?: Maybe<Enterprise>
  /** A message confirming the result of updating the members can invite collaborators setting. */
  message?: Maybe<Scalars["String"]>
}

/** Autogenerated input type of UpdateEnterpriseMembersCanMakePurchasesSetting */
export type UpdateEnterpriseMembersCanMakePurchasesSettingInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ID of the enterprise on which to set the members can make purchases setting. */
  enterpriseId: Scalars["ID"]
  /** The value for the members can make purchases setting on the enterprise. */
  settingValue: EnterpriseMembersCanMakePurchasesSettingValue
}

/** Autogenerated return type of UpdateEnterpriseMembersCanMakePurchasesSetting */
export type UpdateEnterpriseMembersCanMakePurchasesSettingPayload = {
  __typename?: "UpdateEnterpriseMembersCanMakePurchasesSettingPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The enterprise with the updated members can make purchases setting. */
  enterprise?: Maybe<Enterprise>
  /** A message confirming the result of updating the members can make purchases setting. */
  message?: Maybe<Scalars["String"]>
}

/** Autogenerated input type of UpdateEnterpriseMembersCanUpdateProtectedBranchesSetting */
export type UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ID of the enterprise on which to set the members can update protected branches setting. */
  enterpriseId: Scalars["ID"]
  /** The value for the members can update protected branches setting on the enterprise. */
  settingValue: EnterpriseEnabledDisabledSettingValue
}

/** Autogenerated return type of UpdateEnterpriseMembersCanUpdateProtectedBranchesSetting */
export type UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload = {
  __typename?: "UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The enterprise with the updated members can update protected branches setting. */
  enterprise?: Maybe<Enterprise>
  /** A message confirming the result of updating the members can update protected branches setting. */
  message?: Maybe<Scalars["String"]>
}

/** Autogenerated input type of UpdateEnterpriseMembersCanViewDependencyInsightsSetting */
export type UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ID of the enterprise on which to set the members can view dependency insights setting. */
  enterpriseId: Scalars["ID"]
  /** The value for the members can view dependency insights setting on the enterprise. */
  settingValue: EnterpriseEnabledDisabledSettingValue
}

/** Autogenerated return type of UpdateEnterpriseMembersCanViewDependencyInsightsSetting */
export type UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload = {
  __typename?: "UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The enterprise with the updated members can view dependency insights setting. */
  enterprise?: Maybe<Enterprise>
  /** A message confirming the result of updating the members can view dependency insights setting. */
  message?: Maybe<Scalars["String"]>
}

/** Autogenerated input type of UpdateEnterpriseOrganizationProjectsSetting */
export type UpdateEnterpriseOrganizationProjectsSettingInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ID of the enterprise on which to set the organization projects setting. */
  enterpriseId: Scalars["ID"]
  /** The value for the organization projects setting on the enterprise. */
  settingValue: EnterpriseEnabledDisabledSettingValue
}

/** Autogenerated return type of UpdateEnterpriseOrganizationProjectsSetting */
export type UpdateEnterpriseOrganizationProjectsSettingPayload = {
  __typename?: "UpdateEnterpriseOrganizationProjectsSettingPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The enterprise with the updated organization projects setting. */
  enterprise?: Maybe<Enterprise>
  /** A message confirming the result of updating the organization projects setting. */
  message?: Maybe<Scalars["String"]>
}

/** Autogenerated input type of UpdateEnterpriseProfile */
export type UpdateEnterpriseProfileInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The description of the enterprise. */
  description?: Maybe<Scalars["String"]>
  /** The Enterprise ID to update. */
  enterpriseId: Scalars["ID"]
  /** The location of the enterprise. */
  location?: Maybe<Scalars["String"]>
  /** The name of the enterprise. */
  name?: Maybe<Scalars["String"]>
  /** The URL of the enterprise's website. */
  websiteUrl?: Maybe<Scalars["String"]>
}

/** Autogenerated return type of UpdateEnterpriseProfile */
export type UpdateEnterpriseProfilePayload = {
  __typename?: "UpdateEnterpriseProfilePayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The updated enterprise. */
  enterprise?: Maybe<Enterprise>
}

/** Autogenerated input type of UpdateEnterpriseRepositoryProjectsSetting */
export type UpdateEnterpriseRepositoryProjectsSettingInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ID of the enterprise on which to set the repository projects setting. */
  enterpriseId: Scalars["ID"]
  /** The value for the repository projects setting on the enterprise. */
  settingValue: EnterpriseEnabledDisabledSettingValue
}

/** Autogenerated return type of UpdateEnterpriseRepositoryProjectsSetting */
export type UpdateEnterpriseRepositoryProjectsSettingPayload = {
  __typename?: "UpdateEnterpriseRepositoryProjectsSettingPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The enterprise with the updated repository projects setting. */
  enterprise?: Maybe<Enterprise>
  /** A message confirming the result of updating the repository projects setting. */
  message?: Maybe<Scalars["String"]>
}

/** Autogenerated input type of UpdateEnterpriseTeamDiscussionsSetting */
export type UpdateEnterpriseTeamDiscussionsSettingInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ID of the enterprise on which to set the team discussions setting. */
  enterpriseId: Scalars["ID"]
  /** The value for the team discussions setting on the enterprise. */
  settingValue: EnterpriseEnabledDisabledSettingValue
}

/** Autogenerated return type of UpdateEnterpriseTeamDiscussionsSetting */
export type UpdateEnterpriseTeamDiscussionsSettingPayload = {
  __typename?: "UpdateEnterpriseTeamDiscussionsSettingPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The enterprise with the updated team discussions setting. */
  enterprise?: Maybe<Enterprise>
  /** A message confirming the result of updating the team discussions setting. */
  message?: Maybe<Scalars["String"]>
}

/** Autogenerated input type of UpdateEnterpriseTwoFactorAuthenticationRequiredSetting */
export type UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ID of the enterprise on which to set the two factor authentication required setting. */
  enterpriseId: Scalars["ID"]
  /** The value for the two factor authentication required setting on the enterprise. */
  settingValue: EnterpriseEnabledSettingValue
}

/** Autogenerated return type of UpdateEnterpriseTwoFactorAuthenticationRequiredSetting */
export type UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload = {
  __typename?: "UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The enterprise with the updated two factor authentication required setting. */
  enterprise?: Maybe<Enterprise>
  /** A message confirming the result of updating the two factor authentication required setting. */
  message?: Maybe<Scalars["String"]>
}

/** Autogenerated input type of UpdateIpAllowListEnabledSetting */
export type UpdateIpAllowListEnabledSettingInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ID of the owner on which to set the IP allow list enabled setting. */
  ownerId: Scalars["ID"]
  /** The value for the IP allow list enabled setting. */
  settingValue: IpAllowListEnabledSettingValue
}

/** Autogenerated return type of UpdateIpAllowListEnabledSetting */
export type UpdateIpAllowListEnabledSettingPayload = {
  __typename?: "UpdateIpAllowListEnabledSettingPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The IP allow list owner on which the setting was updated. */
  owner?: Maybe<IpAllowListOwner>
}

/** Autogenerated input type of UpdateIpAllowListEntry */
export type UpdateIpAllowListEntryInput = {
  /** An IP address or range of addresses in CIDR notation. */
  allowListValue: Scalars["String"]
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ID of the IP allow list entry to update. */
  ipAllowListEntryId: Scalars["ID"]
  /** Whether the IP allow list entry is active when an IP allow list is enabled. */
  isActive: Scalars["Boolean"]
  /** An optional name for the IP allow list entry. */
  name?: Maybe<Scalars["String"]>
}

/** Autogenerated return type of UpdateIpAllowListEntry */
export type UpdateIpAllowListEntryPayload = {
  __typename?: "UpdateIpAllowListEntryPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The IP allow list entry that was updated. */
  ipAllowListEntry?: Maybe<IpAllowListEntry>
}

/** Autogenerated input type of UpdateIssueComment */
export type UpdateIssueCommentInput = {
  /** The updated text of the comment. */
  body: Scalars["String"]
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ID of the IssueComment to modify. */
  id: Scalars["ID"]
}

/** Autogenerated return type of UpdateIssueComment */
export type UpdateIssueCommentPayload = {
  __typename?: "UpdateIssueCommentPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The updated comment. */
  issueComment?: Maybe<IssueComment>
}

/** Autogenerated input type of UpdateIssue */
export type UpdateIssueInput = {
  /** An array of Node IDs of users for this issue. */
  assigneeIds?: Maybe<Array<Scalars["ID"]>>
  /** The body for the issue description. */
  body?: Maybe<Scalars["String"]>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ID of the Issue to modify. */
  id: Scalars["ID"]
  /** An array of Node IDs of labels for this issue. */
  labelIds?: Maybe<Array<Scalars["ID"]>>
  /** The Node ID of the milestone for this issue. */
  milestoneId?: Maybe<Scalars["ID"]>
  /** An array of Node IDs for projects associated with this issue. */
  projectIds?: Maybe<Array<Scalars["ID"]>>
  /** The desired issue state. */
  state?: Maybe<IssueState>
  /** The title for the issue. */
  title?: Maybe<Scalars["String"]>
}

/** Autogenerated return type of UpdateIssue */
export type UpdateIssuePayload = {
  __typename?: "UpdateIssuePayload"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The issue. */
  issue?: Maybe<Issue>
}

/** Autogenerated input type of UpdateProjectCard */
export type UpdateProjectCardInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** Whether or not the ProjectCard should be archived */
  isArchived?: Maybe<Scalars["Boolean"]>
  /** The note of ProjectCard. */
  note?: Maybe<Scalars["String"]>
  /** The ProjectCard ID to update. */
  projectCardId: Scalars["ID"]
}

/** Autogenerated return type of UpdateProjectCard */
export type UpdateProjectCardPayload = {
  __typename?: "UpdateProjectCardPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The updated ProjectCard. */
  projectCard?: Maybe<ProjectCard>
}

/** Autogenerated input type of UpdateProjectColumn */
export type UpdateProjectColumnInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The name of project column. */
  name: Scalars["String"]
  /** The ProjectColumn ID to update. */
  projectColumnId: Scalars["ID"]
}

/** Autogenerated return type of UpdateProjectColumn */
export type UpdateProjectColumnPayload = {
  __typename?: "UpdateProjectColumnPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The updated project column. */
  projectColumn?: Maybe<ProjectColumn>
}

/** Autogenerated input type of UpdateProject */
export type UpdateProjectInput = {
  /** The description of project. */
  body?: Maybe<Scalars["String"]>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The name of project. */
  name?: Maybe<Scalars["String"]>
  /** The Project ID to update. */
  projectId: Scalars["ID"]
  /** Whether the project is public or not. */
  public?: Maybe<Scalars["Boolean"]>
  /** Whether the project is open or closed. */
  state?: Maybe<ProjectState>
}

/** Autogenerated return type of UpdateProject */
export type UpdateProjectPayload = {
  __typename?: "UpdateProjectPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The updated project. */
  project?: Maybe<Project>
}

/** Autogenerated input type of UpdatePullRequest */
export type UpdatePullRequestInput = {
  /** An array of Node IDs of users for this pull request. */
  assigneeIds?: Maybe<Array<Scalars["ID"]>>
  /**
   * The name of the branch you want your changes pulled into. This should be an existing branch
   * on the current repository.
   */
  baseRefName?: Maybe<Scalars["String"]>
  /** The contents of the pull request. */
  body?: Maybe<Scalars["String"]>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** An array of Node IDs of labels for this pull request. */
  labelIds?: Maybe<Array<Scalars["ID"]>>
  /** Indicates whether maintainers can modify the pull request. */
  maintainerCanModify?: Maybe<Scalars["Boolean"]>
  /** The Node ID of the milestone for this pull request. */
  milestoneId?: Maybe<Scalars["ID"]>
  /** An array of Node IDs for projects associated with this pull request. */
  projectIds?: Maybe<Array<Scalars["ID"]>>
  /** The Node ID of the pull request. */
  pullRequestId: Scalars["ID"]
  /** The target state of the pull request. */
  state?: Maybe<PullRequestUpdateState>
  /** The title of the pull request. */
  title?: Maybe<Scalars["String"]>
}

/** Autogenerated return type of UpdatePullRequest */
export type UpdatePullRequestPayload = {
  __typename?: "UpdatePullRequestPayload"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The updated pull request. */
  pullRequest?: Maybe<PullRequest>
}

/** Autogenerated input type of UpdatePullRequestReviewComment */
export type UpdatePullRequestReviewCommentInput = {
  /** The text of the comment. */
  body: Scalars["String"]
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The Node ID of the comment to modify. */
  pullRequestReviewCommentId: Scalars["ID"]
}

/** Autogenerated return type of UpdatePullRequestReviewComment */
export type UpdatePullRequestReviewCommentPayload = {
  __typename?: "UpdatePullRequestReviewCommentPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The updated comment. */
  pullRequestReviewComment?: Maybe<PullRequestReviewComment>
}

/** Autogenerated input type of UpdatePullRequestReview */
export type UpdatePullRequestReviewInput = {
  /** The contents of the pull request review body. */
  body: Scalars["String"]
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The Node ID of the pull request review to modify. */
  pullRequestReviewId: Scalars["ID"]
}

/** Autogenerated return type of UpdatePullRequestReview */
export type UpdatePullRequestReviewPayload = {
  __typename?: "UpdatePullRequestReviewPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The updated pull request review. */
  pullRequestReview?: Maybe<PullRequestReview>
}

/** Autogenerated input type of UpdateRef */
export type UpdateRefInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** Permit updates of branch Refs that are not fast-forwards? */
  force?: Maybe<Scalars["Boolean"]>
  /** The GitObjectID that the Ref shall be updated to target. */
  oid: Scalars["GitObjectID"]
  /** The Node ID of the Ref to be updated. */
  refId: Scalars["ID"]
}

/** Autogenerated return type of UpdateRef */
export type UpdateRefPayload = {
  __typename?: "UpdateRefPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The updated Ref. */
  ref?: Maybe<Ref>
}

/** Autogenerated input type of UpdateRepository */
export type UpdateRepositoryInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** A new description for the repository. Pass an empty string to erase the existing description. */
  description?: Maybe<Scalars["String"]>
  /** Indicates if the repository should have the issues feature enabled. */
  hasIssuesEnabled?: Maybe<Scalars["Boolean"]>
  /** Indicates if the repository should have the project boards feature enabled. */
  hasProjectsEnabled?: Maybe<Scalars["Boolean"]>
  /** Indicates if the repository should have the wiki feature enabled. */
  hasWikiEnabled?: Maybe<Scalars["Boolean"]>
  /** The URL for a web page about this repository. Pass an empty string to erase the existing URL. */
  homepageUrl?: Maybe<Scalars["URI"]>
  /** The new name of the repository. */
  name?: Maybe<Scalars["String"]>
  /** The ID of the repository to update. */
  repositoryId: Scalars["ID"]
  /**
   * Whether this repository should be marked as a template such that anyone who
   * can access it can create new repositories with the same files and directory structure.
   */
  template?: Maybe<Scalars["Boolean"]>
}

/** Autogenerated return type of UpdateRepository */
export type UpdateRepositoryPayload = {
  __typename?: "UpdateRepositoryPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The updated repository. */
  repository?: Maybe<Repository>
}

/** Autogenerated input type of UpdateSubscription */
export type UpdateSubscriptionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The new state of the subscription. */
  state: SubscriptionState
  /** The Node ID of the subscribable object to modify. */
  subscribableId: Scalars["ID"]
}

/** Autogenerated return type of UpdateSubscription */
export type UpdateSubscriptionPayload = {
  __typename?: "UpdateSubscriptionPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The input subscribable entity. */
  subscribable?: Maybe<Subscribable>
}

/** Autogenerated input type of UpdateTeamDiscussionComment */
export type UpdateTeamDiscussionCommentInput = {
  /** The updated text of the comment. */
  body: Scalars["String"]
  /** The current version of the body content. */
  bodyVersion?: Maybe<Scalars["String"]>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The ID of the comment to modify. */
  id: Scalars["ID"]
}

/** Autogenerated return type of UpdateTeamDiscussionComment */
export type UpdateTeamDiscussionCommentPayload = {
  __typename?: "UpdateTeamDiscussionCommentPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The updated comment. */
  teamDiscussionComment?: Maybe<TeamDiscussionComment>
}

/** Autogenerated input type of UpdateTeamDiscussion */
export type UpdateTeamDiscussionInput = {
  /** The updated text of the discussion. */
  body?: Maybe<Scalars["String"]>
  /**
   * The current version of the body content. If provided, this update operation
   * will be rejected if the given version does not match the latest version on the server.
   */
  bodyVersion?: Maybe<Scalars["String"]>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The Node ID of the discussion to modify. */
  id: Scalars["ID"]
  /** If provided, sets the pinned state of the updated discussion. */
  pinned?: Maybe<Scalars["Boolean"]>
  /** The updated title of the discussion. */
  title?: Maybe<Scalars["String"]>
}

/** Autogenerated return type of UpdateTeamDiscussion */
export type UpdateTeamDiscussionPayload = {
  __typename?: "UpdateTeamDiscussionPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The updated discussion. */
  teamDiscussion?: Maybe<TeamDiscussion>
}

/** Autogenerated input type of UpdateTopics */
export type UpdateTopicsInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The Node ID of the repository. */
  repositoryId: Scalars["ID"]
  /** An array of topic names. */
  topicNames: Array<Scalars["String"]>
}

/** Autogenerated return type of UpdateTopics */
export type UpdateTopicsPayload = {
  __typename?: "UpdateTopicsPayload"
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>
  /** Names of the provided topics that are not valid. */
  invalidTopicNames?: Maybe<Array<Scalars["String"]>>
  /** The updated repository. */
  repository?: Maybe<Repository>
}

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type User = Actor &
  Node &
  PackageOwner &
  ProfileOwner &
  ProjectOwner &
  RepositoryOwner &
  Sponsorable &
  UniformResourceLocatable & {
    __typename?: "User"
    /** Determine if this repository owner has any items that can be pinned to their profile. */
    anyPinnableItems: Scalars["Boolean"]
    /** A URL pointing to the user's public avatar. */
    avatarUrl: Scalars["URI"]
    /** The user's public profile bio. */
    bio?: Maybe<Scalars["String"]>
    /** The user's public profile bio as HTML. */
    bioHTML: Scalars["HTML"]
    /** A list of commit comments made by this user. */
    commitComments: CommitCommentConnection
    /** The user's public profile company. */
    company?: Maybe<Scalars["String"]>
    /** The user's public profile company as HTML. */
    companyHTML: Scalars["HTML"]
    /** The collection of contributions this user has made to different repositories. */
    contributionsCollection: ContributionsCollection
    /** Identifies the date and time when the object was created. */
    createdAt: Scalars["DateTime"]
    /** Identifies the primary key from the database. */
    databaseId?: Maybe<Scalars["Int"]>
    /** The user's publicly visible profile email. */
    email: Scalars["String"]
    /** A list of users the given user is followed by. */
    followers: FollowerConnection
    /** A list of users the given user is following. */
    following: FollowingConnection
    /** Find gist by repo name. */
    gist?: Maybe<Gist>
    /** A list of gist comments made by this user. */
    gistComments: GistCommentConnection
    /** A list of the Gists the user has created. */
    gists: GistConnection
    /** The hovercard information for this user in a given context */
    hovercard: Hovercard
    id: Scalars["ID"]
    /** Whether or not this user is a participant in the GitHub Security Bug Bounty. */
    isBountyHunter: Scalars["Boolean"]
    /** Whether or not this user is a participant in the GitHub Campus Experts Program. */
    isCampusExpert: Scalars["Boolean"]
    /** Whether or not this user is a GitHub Developer Program member. */
    isDeveloperProgramMember: Scalars["Boolean"]
    /** Whether or not this user is a GitHub employee. */
    isEmployee: Scalars["Boolean"]
    /** Whether or not the user has marked themselves as for hire. */
    isHireable: Scalars["Boolean"]
    /** Whether or not this user is a site administrator. */
    isSiteAdmin: Scalars["Boolean"]
    /** Whether or not this user is the viewing user. */
    isViewer: Scalars["Boolean"]
    /** A list of issue comments made by this user. */
    issueComments: IssueCommentConnection
    /** A list of issues associated with this user. */
    issues: IssueConnection
    /**
     * Showcases a selection of repositories and gists that the profile owner has
     * either curated or that have been selected automatically based on popularity.
     */
    itemShowcase: ProfileItemShowcase
    /** The user's public profile location. */
    location?: Maybe<Scalars["String"]>
    /** The username used to login. */
    login: Scalars["String"]
    /** The user's public profile name. */
    name?: Maybe<Scalars["String"]>
    /** Find an organization by its login that the user belongs to. */
    organization?: Maybe<Organization>
    /** Verified email addresses that match verified domains for a specified organization the user is a member of. */
    organizationVerifiedDomainEmails: Array<Scalars["String"]>
    /** A list of organizations the user belongs to. */
    organizations: OrganizationConnection
    /** A list of packages under the owner. */
    packages: PackageConnection
    /** A list of repositories and gists this profile owner can pin to their profile. */
    pinnableItems: PinnableItemConnection
    /** A list of repositories and gists this profile owner has pinned to their profile */
    pinnedItems: PinnableItemConnection
    /** Returns how many more items this profile owner can pin to their profile. */
    pinnedItemsRemaining: Scalars["Int"]
    /** Find project by number. */
    project?: Maybe<Project>
    /** A list of projects under the owner. */
    projects: ProjectConnection
    /** The HTTP path listing user's projects */
    projectsResourcePath: Scalars["URI"]
    /** The HTTP URL listing user's projects */
    projectsUrl: Scalars["URI"]
    /** A list of public keys associated with this user. */
    publicKeys: PublicKeyConnection
    /** A list of pull requests associated with this user. */
    pullRequests: PullRequestConnection
    /** A list of repositories that the user owns. */
    repositories: RepositoryConnection
    /** A list of repositories that the user recently contributed to. */
    repositoriesContributedTo: RepositoryConnection
    /** Find Repository. */
    repository?: Maybe<Repository>
    /** The HTTP path for this user */
    resourcePath: Scalars["URI"]
    /** Replies this user has saved */
    savedReplies?: Maybe<SavedReplyConnection>
    /** The GitHub Sponsors listing for this user. */
    sponsorsListing?: Maybe<SponsorsListing>
    /** This object's sponsorships as the maintainer. */
    sponsorshipsAsMaintainer: SponsorshipConnection
    /** This object's sponsorships as the sponsor. */
    sponsorshipsAsSponsor: SponsorshipConnection
    /** Repositories the user has starred. */
    starredRepositories: StarredRepositoryConnection
    /** The user's description of what they're currently doing. */
    status?: Maybe<UserStatus>
    /** Repositories the user has contributed to, ordered by contribution rank, plus repositories the user has created */
    topRepositories: RepositoryConnection
    /** The user's Twitter username. */
    twitterUsername?: Maybe<Scalars["String"]>
    /** Identifies the date and time when the object was last updated. */
    updatedAt: Scalars["DateTime"]
    /** The HTTP URL for this user */
    url: Scalars["URI"]
    /** Can the viewer pin repositories and gists to the profile? */
    viewerCanChangePinnedItems: Scalars["Boolean"]
    /** Can the current viewer create new projects on this owner. */
    viewerCanCreateProjects: Scalars["Boolean"]
    /** Whether or not the viewer is able to follow the user. */
    viewerCanFollow: Scalars["Boolean"]
    /** Whether or not this user is followed by the viewer. */
    viewerIsFollowing: Scalars["Boolean"]
    /** A list of repositories the given user is watching. */
    watching: RepositoryConnection
    /** A URL pointing to the user's public website/blog. */
    websiteUrl?: Maybe<Scalars["URI"]>
  }

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type UserAnyPinnableItemsArgs = {
  type?: Maybe<PinnableItemType>
}

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type UserAvatarUrlArgs = {
  size?: Maybe<Scalars["Int"]>
}

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type UserCommitCommentsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type UserContributionsCollectionArgs = {
  from?: Maybe<Scalars["DateTime"]>
  organizationID?: Maybe<Scalars["ID"]>
  to?: Maybe<Scalars["DateTime"]>
}

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type UserFollowersArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type UserFollowingArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type UserGistArgs = {
  name: Scalars["String"]
}

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type UserGistCommentsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type UserGistsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<GistOrder>
  privacy?: Maybe<GistPrivacy>
}

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type UserHovercardArgs = {
  primarySubjectId?: Maybe<Scalars["ID"]>
}

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type UserIssueCommentsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type UserIssuesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  filterBy?: Maybe<IssueFilters>
  first?: Maybe<Scalars["Int"]>
  labels?: Maybe<Array<Scalars["String"]>>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<IssueOrder>
  states?: Maybe<Array<IssueState>>
}

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type UserOrganizationArgs = {
  login: Scalars["String"]
}

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type UserOrganizationVerifiedDomainEmailsArgs = {
  login: Scalars["String"]
}

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type UserOrganizationsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type UserPackagesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  names?: Maybe<Array<Maybe<Scalars["String"]>>>
  orderBy?: Maybe<PackageOrder>
  packageType?: Maybe<PackageType>
  repositoryId?: Maybe<Scalars["ID"]>
}

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type UserPinnableItemsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  types?: Maybe<Array<PinnableItemType>>
}

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type UserPinnedItemsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  types?: Maybe<Array<PinnableItemType>>
}

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type UserProjectArgs = {
  number: Scalars["Int"]
}

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type UserProjectsArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<ProjectOrder>
  search?: Maybe<Scalars["String"]>
  states?: Maybe<Array<ProjectState>>
}

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type UserPublicKeysArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
}

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type UserPullRequestsArgs = {
  after?: Maybe<Scalars["String"]>
  baseRefName?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  headRefName?: Maybe<Scalars["String"]>
  labels?: Maybe<Array<Scalars["String"]>>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<IssueOrder>
  states?: Maybe<Array<PullRequestState>>
}

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type UserRepositoriesArgs = {
  affiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  isFork?: Maybe<Scalars["Boolean"]>
  isLocked?: Maybe<Scalars["Boolean"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<RepositoryOrder>
  ownerAffiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>
  privacy?: Maybe<RepositoryPrivacy>
}

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type UserRepositoriesContributedToArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  contributionTypes?: Maybe<Array<Maybe<RepositoryContributionType>>>
  first?: Maybe<Scalars["Int"]>
  includeUserRepositories?: Maybe<Scalars["Boolean"]>
  isLocked?: Maybe<Scalars["Boolean"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<RepositoryOrder>
  privacy?: Maybe<RepositoryPrivacy>
}

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type UserRepositoryArgs = {
  name: Scalars["String"]
}

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type UserSavedRepliesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<SavedReplyOrder>
}

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type UserSponsorshipsAsMaintainerArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  includePrivate?: Maybe<Scalars["Boolean"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<SponsorshipOrder>
}

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type UserSponsorshipsAsSponsorArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<SponsorshipOrder>
}

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type UserStarredRepositoriesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<StarOrder>
  ownedByViewer?: Maybe<Scalars["Boolean"]>
}

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type UserTopRepositoriesArgs = {
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  last?: Maybe<Scalars["Int"]>
  orderBy: RepositoryOrder
  since?: Maybe<Scalars["DateTime"]>
}

/** A user is an individual's account on GitHub that owns repositories and can make new content. */
export type UserWatchingArgs = {
  affiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>
  after?: Maybe<Scalars["String"]>
  before?: Maybe<Scalars["String"]>
  first?: Maybe<Scalars["Int"]>
  isLocked?: Maybe<Scalars["Boolean"]>
  last?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<RepositoryOrder>
  ownerAffiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>
  privacy?: Maybe<RepositoryPrivacy>
}

/** The possible durations that a user can be blocked for. */
export enum UserBlockDuration {
  /** The user was blocked for 1 day */
  OneDay = "ONE_DAY",
  /** The user was blocked for 30 days */
  OneMonth = "ONE_MONTH",
  /** The user was blocked for 7 days */
  OneWeek = "ONE_WEEK",
  /** The user was blocked permanently */
  Permanent = "PERMANENT",
  /** The user was blocked for 3 days */
  ThreeDays = "THREE_DAYS",
}

/** Represents a 'user_blocked' event on a given user. */
export type UserBlockedEvent = Node & {
  __typename?: "UserBlockedEvent"
  /** Identifies the actor who performed the event. */
  actor?: Maybe<Actor>
  /** Number of days that the user was blocked for. */
  blockDuration: UserBlockDuration
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  id: Scalars["ID"]
  /** The user who was blocked. */
  subject?: Maybe<User>
}

/** The connection type for User. */
export type UserConnection = {
  __typename?: "UserConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UserEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<User>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edit on user content */
export type UserContentEdit = Node & {
  __typename?: "UserContentEdit"
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  /** Identifies the date and time when the object was deleted. */
  deletedAt?: Maybe<Scalars["DateTime"]>
  /** The actor who deleted this content */
  deletedBy?: Maybe<Actor>
  /** A summary of the changes for this edit */
  diff?: Maybe<Scalars["String"]>
  /** When this content was edited */
  editedAt: Scalars["DateTime"]
  /** The actor who edited this content */
  editor?: Maybe<Actor>
  id: Scalars["ID"]
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"]
}

/** A list of edits to content. */
export type UserContentEditConnection = {
  __typename?: "UserContentEditConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UserContentEditEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<UserContentEdit>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type UserContentEditEdge = {
  __typename?: "UserContentEditEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<UserContentEdit>
}

/** Represents a user. */
export type UserEdge = {
  __typename?: "UserEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<User>
}

/** Email attributes from External Identity */
export type UserEmailMetadata = {
  __typename?: "UserEmailMetadata"
  /** Boolean to identify primary emails */
  primary?: Maybe<Scalars["Boolean"]>
  /** Type of email */
  type?: Maybe<Scalars["String"]>
  /** Email id */
  value: Scalars["String"]
}

/** The user's description of what they're currently doing. */
export type UserStatus = Node & {
  __typename?: "UserStatus"
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"]
  /** An emoji summarizing the user's status. */
  emoji?: Maybe<Scalars["String"]>
  /** The status emoji as HTML. */
  emojiHTML?: Maybe<Scalars["HTML"]>
  /** If set, the status will not be shown after this date. */
  expiresAt?: Maybe<Scalars["DateTime"]>
  /** ID of the object. */
  id: Scalars["ID"]
  /** Whether this status indicates the user is not fully available on GitHub. */
  indicatesLimitedAvailability: Scalars["Boolean"]
  /** A brief message describing what the user is doing. */
  message?: Maybe<Scalars["String"]>
  /** The organization whose members can see this status. If null, this status is publicly visible. */
  organization?: Maybe<Organization>
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"]
  /** The user who has this status. */
  user: User
}

/** The connection type for UserStatus. */
export type UserStatusConnection = {
  __typename?: "UserStatusConnection"
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UserStatusEdge>>>
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<UserStatus>>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]
}

/** An edge in a connection. */
export type UserStatusEdge = {
  __typename?: "UserStatusEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]
  /** The item at the end of the edge. */
  node?: Maybe<UserStatus>
}

/** Ordering options for user status connections. */
export type UserStatusOrder = {
  /** The ordering direction. */
  direction: OrderDirection
  /** The field to order user statuses by. */
  field: UserStatusOrderField
}

/** Properties by which user status connections can be ordered. */
export enum UserStatusOrderField {
  /** Order user statuses by when they were updated. */
  UpdatedAt = "UPDATED_AT",
}

/** A hovercard context with a message describing how the viewer is related. */
export type ViewerHovercardContext = HovercardContext & {
  __typename?: "ViewerHovercardContext"
  /** A string describing this context */
  message: Scalars["String"]
  /** An octicon to accompany this context */
  octicon: Scalars["String"]
  /** Identifies the user who is related to this context. */
  viewer: User
}
