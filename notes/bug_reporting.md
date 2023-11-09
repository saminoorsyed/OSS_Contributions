# [Mozilla's guide to bug reporting](https://developer.mozilla.org/en-US/docs/Mozilla/QA/Bug_writing_guidelines)

## how to report a bug

### open a new bug report for each issue!

### other details to keep in mind:
1. Figure out the steps to reproduce a bug:
- If you have precise steps to reproduce — great! — you're on your way to reporting a useful bug report.
- If you can reproduce occasionally, but not after following specific steps, you must provide additional information for the bug to be useful.
- If you can't reproduce the problem, there's probably no use in reporting it, unless you provide unique information about its occurrence.
2. Make sure your software is up to date. Ideally, test an in-development version to see whether your bug has already been fixed (e.g. Firefox Beta, or bleeding-edge Nightly).
3. When reporting a Firefox bug, first check if you can reproduce the bug in a new Firefox profile. If the bug only happens in your existing profile, try to figure out what settings, extensions, or files in your profile are needed to reproduce the bug.
- If the bug seems egregious (i.e. obviously affecting a large portion of users), there's probably something unusual about your setup that's a necessary part of the steps to reproduce the bug. You have much better chances of figuring it out than a developer who does not have access to your system.
- If the bug falls into one of specific types of bugs listed in a section below, it may still be useful even if you can't reproduce it in a new Firefox profile.
4. Open the Enter a new bug form, which will guide you through most of the bug reporting process:
- Create a Bugzilla account if you don't have one already, select the product having the bug.
- Enter a clear unique summary as described below; check if the bug has already been reported.
- Provide precise steps to reproduce, expected results and actual results as described in the following section.
- Provide additional information (also described below), especially if you can't reproduce the bug in a new profile; and/or by reporting a crash, memory usage, performance, regression bug; or if the problem is with a specific web site.
5. If you have multiple issues, please file separate bug reports.

## Write a clear summary

How would you describe the bug using approximately 10 words. this is the first part a dev will see

- Good: "Cancelling a File Copy dialog crashes File Manager"
- Bad: "Software crashes"

- Good: "Down-arrow scrolling doesn't work in <textarea> styled with overflow:hidden"
- Bad: "Browser should work with my web site"

## Write precise steps to reproduce it

What to include:
1. whether you can still reproduce the bug at will, occasionally, or not at all
2. Describe your method for interacting with the software, including the intent of each step
3. after your steps, describe the observed (actual results ofnt he expected results. clearly separate facts (observations) from speculation


## General Outline of a bug Report
- Summary: How would you describe the bug in less than 60 characters? It should quickly and uniquely identify a bug report as well as explain the problem, not your suggested solution. Good: "Canceling a File Copy dialog crashes File Manager" Bad: "Software crashes" Bad: "Browser should work with my web site"
- Component: In which sub-part of the software does it exist? This field is a requirement to submit any bug report. Click the word "Component" to see a description of each component. If none seems appropriate, highlight the "General" component.
- Version: select the earliest Version with what the problem can be reproduced:
  - Developers will use that information to narrow down the commit what introduced a regression
  - QA staff needs that information to distinguish bugs with similar symptoms, but different roots.
    - bugs that definitively appeared in different Product Versions probably will have different roots
    - But bugs that started with the same Product Version probably are DUPLICATEs
    - Trunk does not allow any useful query. We have Trunk version bugs from beginning of the project until today, no common characteristics at all what can be tagged with this version. Avoid Trunk, replace it by precise information with what version the problem appeared if you can.
- OS: On which operating system (OS) did you find it? (E.g. Linux, Windows, and Mac.) Example: "If you know the bug happens on more than one type of operating system, choose "All". If your OS isn't listed, choose Other".
- Description: The details of your problem report, including:
  - Overview: This is a larger detailed restatement of the summary. An example would be: "Drag-selecting any page crashes Mac builds in the NSGetFactory function".
  - Build Id: To find this either go to the "about:support" page via the location bar or, if you have MozQA's Nightly Tester Tools extension, then go to Tools | Nightly Tester Tools and select the option that contains the output of the build Id. It should look something like this: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:38.0) Gecko/20100101 Firefox/38.0 ID:20150330004006 CSet: 9e57e9776571".
  - Additional Builds and Platforms: Whether or not the bug takes place on other platforms (or browsers, if applicable). It should look something like this: "Doesn't Occur On Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:38.0) Gecko/20100101 Firefox/38.0 ID:20150330004006 CSet: 9e57e9776571".
- Steps to Reproduce: Minimized, easy-to-follow steps that will trigger the bug. If they're necessary, make sure to include any special setup steps. A good example of this would look like the following:
1. View any web page. (I used the default sample page, https://www.google.com/).
2. Drag-select the page. Specifically, while holding down the mouse button, drag the mouse pointer downwards from any point in the browser's content region to the bottom of the browser's content region.
- Actual Results: What the application did after performing the above steps. An example would be: The application crashed.
- Expected Results: What the application should have done, were the bug not present. An example would be: The window should scroll downwards. Scrolled content should be selected. Or, at least, the application should not crash.


# [The Ideal Bug Report](https://testlio.com/blog/the-ideal-bug-report/)

## Top Seven List of Items Included in an Ideal Bug Report
1. [Feature Name] Title
2. Environment
3. Steps to reproduce
4. Expected Result
5. Actual Result
6. Visual Proof (screenshots, videos, text)
7. Severity/Priority


















