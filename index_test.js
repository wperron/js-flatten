import { assertEquals } from "https://deno.land/std@0.74.0/testing/asserts.ts";
import {
  bench,
  runBenchmarks,
} from "https://deno.land/std@0.74.0/testing/bench.ts";
import { flatten_dynamic, flatten_recursive as flatten_recursive_js } from "./index.js";
import { flatten_recursive } from "./pkg/flatten.js";

// const source = await Deno.readFile("./target/wasm32-unknown-unknown/debug/flatten.wasm");
// const mod = new WebAssembly.Module(source);
// const inst = new WebAssembly.Instance(mod, {});
// const { flatten_recursive } = inst.exports;

Deno.test({
  name: "flatten recursive",
  ignore: true,
  async fn() {
    assertEquals(
      flatten_recursive_js(toFlatten()),
      flattened,
    );
  },
});

Deno.test({
  name: "flatten dynamic",
  ignore: true,
  async fn() {
    assertEquals(
      flatten_dynamic(toFlatten()),
      flattened,
    );
  },
});

Deno.test({
  name: "flatten wasm recursive",
  ignore: true,
  async fn() {
    assertEquals(
      flatten_recursive(toFlatten(), ""),
      flattened,
    )
  }
});

bench({
  name: "flatten recursive",
  runs: 1001,
  func(b) {
    b.start();
    for (let i = 0; i < 1000; i++) {
      flatten_recursive_js(toFlatten());
    }
    b.stop();
  },
});

bench({
  name: "flatten dynamic",
  runs: 1002,
  func(b) {
    b.start();
    for (let i = 0; i < 1000; i++) {
      flatten_dynamic(toFlatten());
    }
    b.stop();
  },
});

bench({
  name: "flatten wasm recursive",
  runs: 1003,
  func(b) {
    b.start();
    for (let i = 0; i < 1000; i++) {
      flatten_recursive(toFlatten(), "");
    }
    b.stop();
  },
});

runBenchmarks();

const toFlatten = () => {
  return {
      foo: {
      bar: {
        baz: {
          biz: {
            greeting: "Hello World",
          },
          nested_list: [
            "this",
            "that",
            "and",
            "the",
            "other",
          ],
        },
      },
    },
    "id": 3955647,
    "node_id": "MDEwOlJlcG9zaXRvcnkzOTU1NjQ3",
    "name": "lodash",
    "full_name": "lodash/lodash",
    "private": false,
    "owner": {
      "login": "lodash",
      "id": 2565403,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjI1NjU0MDM=",
      "avatar_url": "https://avatars3.githubusercontent.com/u/2565403?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/lodash",
      "html_url": "https://github.com/lodash",
      "followers_url": "https://api.github.com/users/lodash/followers",
      "following_url":
        "https://api.github.com/users/lodash/following{/other_user}",
      "gists_url": "https://api.github.com/users/lodash/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/lodash/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/lodash/subscriptions",
      "organizations_url": "https://api.github.com/users/lodash/orgs",
      "repos_url": "https://api.github.com/users/lodash/repos",
      "events_url": "https://api.github.com/users/lodash/events{/privacy}",
      "received_events_url":
        "https://api.github.com/users/lodash/received_events",
      "type": "Organization",
      "site_admin": false,
    },
    "html_url": "https://github.com/lodash/lodash",
    "description":
      "A modern JavaScript utility library delivering modularity, performance, & extras.",
    "fork": false,
    "url": "https://api.github.com/repos/lodash/lodash",
    "forks_url": "https://api.github.com/repos/lodash/lodash/forks",
    "keys_url": "https://api.github.com/repos/lodash/lodash/keys{/key_id}",
    "collaborators_url":
      "https://api.github.com/repos/lodash/lodash/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/lodash/lodash/teams",
    "hooks_url": "https://api.github.com/repos/lodash/lodash/hooks",
    "issue_events_url":
      "https://api.github.com/repos/lodash/lodash/issues/events{/number}",
    "events_url": "https://api.github.com/repos/lodash/lodash/events",
    "assignees_url":
      "https://api.github.com/repos/lodash/lodash/assignees{/user}",
    "branches_url":
      "https://api.github.com/repos/lodash/lodash/branches{/branch}",
    "tags_url": "https://api.github.com/repos/lodash/lodash/tags",
    "blobs_url": "https://api.github.com/repos/lodash/lodash/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/lodash/lodash/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/lodash/lodash/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/lodash/lodash/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/lodash/lodash/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/lodash/lodash/languages",
    "stargazers_url": "https://api.github.com/repos/lodash/lodash/stargazers",
    "contributors_url": "https://api.github.com/repos/lodash/lodash/contributors",
    "subscribers_url": "https://api.github.com/repos/lodash/lodash/subscribers",
    "subscription_url": "https://api.github.com/repos/lodash/lodash/subscription",
    "commits_url": "https://api.github.com/repos/lodash/lodash/commits{/sha}",
    "git_commits_url":
      "https://api.github.com/repos/lodash/lodash/git/commits{/sha}",
    "comments_url":
      "https://api.github.com/repos/lodash/lodash/comments{/number}",
    "issue_comment_url":
      "https://api.github.com/repos/lodash/lodash/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/lodash/lodash/contents/{+path}",
    "compare_url":
      "https://api.github.com/repos/lodash/lodash/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/lodash/lodash/merges",
    "archive_url":
      "https://api.github.com/repos/lodash/lodash/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/lodash/lodash/downloads",
    "issues_url": "https://api.github.com/repos/lodash/lodash/issues{/number}",
    "pulls_url": "https://api.github.com/repos/lodash/lodash/pulls{/number}",
    "milestones_url":
      "https://api.github.com/repos/lodash/lodash/milestones{/number}",
    "notifications_url":
      "https://api.github.com/repos/lodash/lodash/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/lodash/lodash/labels{/name}",
    "releases_url": "https://api.github.com/repos/lodash/lodash/releases{/id}",
    "deployments_url": "https://api.github.com/repos/lodash/lodash/deployments",
    "created_at": "2012-04-07T04:11:46Z",
    "updated_at": "2020-10-26T23:48:06Z",
    "pushed_at": "2020-10-22T05:44:17Z",
    "git_url": "git://github.com/lodash/lodash.git",
    "ssh_url": "git@github.com:lodash/lodash.git",
    "clone_url": "https://github.com/lodash/lodash.git",
    "svn_url": "https://github.com/lodash/lodash",
    "homepage": "https://lodash.com/",
    "size": 47061,
    "stargazers_count": 46912,
    "watchers_count": 46912,
    "language": "JavaScript",
    "has_issues": true,
    "has_projects": false,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 5267,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 166,
    "license": {
      "key": "other",
      "name": "Other",
      "spdx_id": "NOASSERTION",
      "url": null,
      "node_id": "MDc6TGljZW5zZTA=",
    },
    "forks": 5267,
    "open_issues": 166,
    "watchers": 46912,
    "default_branch": "master",
    "temp_clone_token": null,
    "organization": {
      "login": "lodash",
      "id": 2565403,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjI1NjU0MDM=",
      "avatar_url": "https://avatars3.githubusercontent.com/u/2565403?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/lodash",
      "html_url": "https://github.com/lodash",
      "followers_url": "https://api.github.com/users/lodash/followers",
      "following_url":
        "https://api.github.com/users/lodash/following{/other_user}",
      "gists_url": "https://api.github.com/users/lodash/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/lodash/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/lodash/subscriptions",
      "organizations_url": "https://api.github.com/users/lodash/orgs",
      "repos_url": "https://api.github.com/users/lodash/repos",
      "events_url": "https://api.github.com/users/lodash/events{/privacy}",
      "received_events_url":
        "https://api.github.com/users/lodash/received_events",
      "type": "Organization",
      "site_admin": false,
    },
    "network_count": 5267,
    "subscribers_count": 886,
  };
};

const flattened = {
  archive_url:
    "https://api.github.com/repos/lodash/lodash/{archive_format}{/ref}",
  archived: false,
  assignees_url: "https://api.github.com/repos/lodash/lodash/assignees{/user}",
  blobs_url: "https://api.github.com/repos/lodash/lodash/git/blobs{/sha}",
  branches_url: "https://api.github.com/repos/lodash/lodash/branches{/branch}",
  clone_url: "https://github.com/lodash/lodash.git",
  collaborators_url:
    "https://api.github.com/repos/lodash/lodash/collaborators{/collaborator}",
  comments_url: "https://api.github.com/repos/lodash/lodash/comments{/number}",
  commits_url: "https://api.github.com/repos/lodash/lodash/commits{/sha}",
  compare_url:
    "https://api.github.com/repos/lodash/lodash/compare/{base}...{head}",
  contents_url: "https://api.github.com/repos/lodash/lodash/contents/{+path}",
  contributors_url: "https://api.github.com/repos/lodash/lodash/contributors",
  created_at: "2012-04-07T04:11:46Z",
  default_branch: "master",
  deployments_url: "https://api.github.com/repos/lodash/lodash/deployments",
  description:
    "A modern JavaScript utility library delivering modularity, performance, & extras.",
  disabled: false,
  downloads_url: "https://api.github.com/repos/lodash/lodash/downloads",
  events_url: "https://api.github.com/repos/lodash/lodash/events",
  foo_bar_baz_biz_greeting: "Hello World",
  foo_bar_baz_nested_list_0: "this",
  foo_bar_baz_nested_list_1: "that",
  foo_bar_baz_nested_list_2: "and",
  foo_bar_baz_nested_list_3: "the",
  foo_bar_baz_nested_list_4: "other",
  fork: false,
  forks: 5267,
  forks_count: 5267,
  forks_url: "https://api.github.com/repos/lodash/lodash/forks",
  full_name: "lodash/lodash",
  git_commits_url:
    "https://api.github.com/repos/lodash/lodash/git/commits{/sha}",
  git_refs_url: "https://api.github.com/repos/lodash/lodash/git/refs{/sha}",
  git_tags_url: "https://api.github.com/repos/lodash/lodash/git/tags{/sha}",
  git_url: "git://github.com/lodash/lodash.git",
  has_downloads: true,
  has_issues: true,
  has_pages: false,
  has_projects: false,
  has_wiki: true,
  homepage: "https://lodash.com/",
  hooks_url: "https://api.github.com/repos/lodash/lodash/hooks",
  html_url: "https://github.com/lodash/lodash",
  id: 3955647,
  issue_comment_url:
    "https://api.github.com/repos/lodash/lodash/issues/comments{/number}",
  issue_events_url:
    "https://api.github.com/repos/lodash/lodash/issues/events{/number}",
  issues_url: "https://api.github.com/repos/lodash/lodash/issues{/number}",
  keys_url: "https://api.github.com/repos/lodash/lodash/keys{/key_id}",
  labels_url: "https://api.github.com/repos/lodash/lodash/labels{/name}",
  language: "JavaScript",
  languages_url: "https://api.github.com/repos/lodash/lodash/languages",
  license_key: "other",
  license_name: "Other",
  license_node_id: "MDc6TGljZW5zZTA=",
  license_spdx_id: "NOASSERTION",
  license_url: null,
  merges_url: "https://api.github.com/repos/lodash/lodash/merges",
  milestones_url:
    "https://api.github.com/repos/lodash/lodash/milestones{/number}",
  mirror_url: null,
  name: "lodash",
  network_count: 5267,
  node_id: "MDEwOlJlcG9zaXRvcnkzOTU1NjQ3",
  notifications_url:
    "https://api.github.com/repos/lodash/lodash/notifications{?since,all,participating}",
  open_issues: 166,
  open_issues_count: 166,
  organization_avatar_url:
    "https://avatars3.githubusercontent.com/u/2565403?v=4",
  organization_events_url:
    "https://api.github.com/users/lodash/events{/privacy}",
  organization_followers_url: "https://api.github.com/users/lodash/followers",
  organization_following_url:
    "https://api.github.com/users/lodash/following{/other_user}",
  organization_gists_url: "https://api.github.com/users/lodash/gists{/gist_id}",
  organization_gravatar_id: "",
  organization_html_url: "https://github.com/lodash",
  organization_id: 2565403,
  organization_login: "lodash",
  organization_node_id: "MDEyOk9yZ2FuaXphdGlvbjI1NjU0MDM=",
  organization_organizations_url: "https://api.github.com/users/lodash/orgs",
  organization_received_events_url:
    "https://api.github.com/users/lodash/received_events",
  organization_repos_url: "https://api.github.com/users/lodash/repos",
  organization_site_admin: false,
  organization_starred_url:
    "https://api.github.com/users/lodash/starred{/owner}{/repo}",
  organization_subscriptions_url:
    "https://api.github.com/users/lodash/subscriptions",
  organization_type: "Organization",
  organization_url: "https://api.github.com/users/lodash",
  owner_avatar_url: "https://avatars3.githubusercontent.com/u/2565403?v=4",
  owner_events_url: "https://api.github.com/users/lodash/events{/privacy}",
  owner_followers_url: "https://api.github.com/users/lodash/followers",
  owner_following_url:
    "https://api.github.com/users/lodash/following{/other_user}",
  owner_gists_url: "https://api.github.com/users/lodash/gists{/gist_id}",
  owner_gravatar_id: "",
  owner_html_url: "https://github.com/lodash",
  owner_id: 2565403,
  owner_login: "lodash",
  owner_node_id: "MDEyOk9yZ2FuaXphdGlvbjI1NjU0MDM=",
  owner_organizations_url: "https://api.github.com/users/lodash/orgs",
  owner_received_events_url:
    "https://api.github.com/users/lodash/received_events",
  owner_repos_url: "https://api.github.com/users/lodash/repos",
  owner_site_admin: false,
  owner_starred_url:
    "https://api.github.com/users/lodash/starred{/owner}{/repo}",
  owner_subscriptions_url: "https://api.github.com/users/lodash/subscriptions",
  owner_type: "Organization",
  owner_url: "https://api.github.com/users/lodash",
  private: false,
  pulls_url: "https://api.github.com/repos/lodash/lodash/pulls{/number}",
  pushed_at: "2020-10-22T05:44:17Z",
  releases_url: "https://api.github.com/repos/lodash/lodash/releases{/id}",
  size: 47061,
  ssh_url: "git@github.com:lodash/lodash.git",
  stargazers_count: 46912,
  stargazers_url: "https://api.github.com/repos/lodash/lodash/stargazers",
  statuses_url: "https://api.github.com/repos/lodash/lodash/statuses/{sha}",
  subscribers_count: 886,
  subscribers_url: "https://api.github.com/repos/lodash/lodash/subscribers",
  subscription_url: "https://api.github.com/repos/lodash/lodash/subscription",
  svn_url: "https://github.com/lodash/lodash",
  tags_url: "https://api.github.com/repos/lodash/lodash/tags",
  teams_url: "https://api.github.com/repos/lodash/lodash/teams",
  temp_clone_token: null,
  trees_url: "https://api.github.com/repos/lodash/lodash/git/trees{/sha}",
  updated_at: "2020-10-26T23:48:06Z",
  url: "https://api.github.com/repos/lodash/lodash",
  watchers: 46912,
  watchers_count: 46912,
};
