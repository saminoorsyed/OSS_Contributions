# Module 3 Exploration notes for open source Contributions

This Module is all about Floss project management and testing. This includes assessing the quality of FLOSS product's interface source code or testing suite and describing the development life cycle of FLOSS along with its logistacals needs

## Exploration: FLOSS Project Management and the SDLC

### Quick Definitions

- SDLC: Software developement life cycle; the process of creating and maintaining a SW project from its inception to end-of-life

- SDLC Model: A method for organizing the SDLC of a project, examples include Agile, waterfall, TDD, Rapid prototyping, Incremental

- CCB: Change Control Board; a comittee generally comprised of both technical and subject matter experts who moderate update proposals

- Build Sheriff: Gatekeeper (individual or team) that tests and commits patches submitted by developers.

- Technical Steering committee: A group of contributors who maintain standards, deploy policies and make decisions about the technical direction of the project. For example, the [node js steering committe](https://github.com/nodejs/TSC)

- Bus number: the numbner of people who are absolutely essential to keeping a project running (such that if they were all hit by a bus, the project would cease to operate)

- cookie licking: the practice of claiming a task to prevent others from taking them on. More commonly thought of when people hold on to a task for too long. [don't lick the cookie](https://community.redhat.com/blog/2018/09/dont-lick-the-cookie/)

### SDLC and Project Management

The traditional SDLC follows this pattern:
1. Get requirements
2. Design product to fulfill requirements
3. Implement the design (code)
4. Test the product
5. Deploy the product and maintain it

when dealing with Test-drivend developement. tests are written in step 2 as part of design req.

STLC pattern:
1. Analyze Requirements
2. Test Planning
3. Test Case Development
4. Environment Setup
5. Test Execution
6. Evaluation and Closure

### Management and soft skills

- Project leaders & Managers: often contribute the most even though they are a minority of contributors. Often assigned to a specific area to manage such as patches, translations, documentation, issues, commit priviliges and releases.

- Committees and Control Boards: with large projects, often a technical steering committee or CCB is  needed to make sure that every update is keeping with the broader policies and goals of the project.

These groups should work together to manage the broader direction of the project and day to day implementation of its guiding vision.

### Work Distribution

1. Delegation: don't do everything yourself! watch others and delegate to competent contributors. it's good to keep your bus number higer so that your project is well supported. technical and managerial tasks

2. Reinforcement (praise and criticism): be constructive and meaninngful without discouraging members from contributing

3. Discourage territorial attitudes: don't allow "cookie licking" or similar selfish behavior

4. Automate: why do it yourself, when it can do itself. spend the time to automate a task once and it will reap real rewards

### Transitions

Sometimes, a manager becomes unable to perform their duties. this is to be expected and good proj leaders should notice what is happening (or not happening). Stay friendly and figure out together how to get things done. be direct and specific. help them to delegate tasks

### Credit

it's very important to keep accurate reccords of who did what and when . Document your own contributions  and make sure that credit is distributed accurately: commit/ log messagtes and announcements: avoid vague language and dont summerize a developers contribution.

### Growth and Planning for Success

As project grows, data and info for new comers increases. Creating docs saves you from having re-explain to each new person. Keep good records from the beginning, document events and make sure there are manyu automated sources of up-to-date info available. create an FAQ for common stumbling blocks.

## Exploration: Software Testing and issues

an Overview of methods for testing software and assessing quality of a software product

### Bug reporting and Tracking

Linuss Law: "Given enough eyeballs, all bugs are shallow"

in OSS you need a system that is accessible to a wide user base and robust enough to provide developers and project managers with features to do the following:

1. describe the bug effectively so it can be understood by devs who have not encountered it directly
2. track the progression of fixing the bug, verifying the fix and integrating the fix into source code

bug trackers are more often, web front-ends to a database of bugs that ensure issues do not fall through the cracks. Bug trackers and feature requests store the following information:

- status: whether the issue is outstanding or resolved
- progress: what has been done so far to address the issue
- cause: reproduction recipes or use case (for feature requests)
- assignment: who is working on the issue
- priority: how highly the issue is ranked in the development team's hierarchy of tasks


tools to do the above: Github has a [built in system](https://guides.github.com/features/issues/) and many others use tools like Bugzilla, Trac, Redmin, Jira, Trelo or Asana.

### Famous OSS Bugs

- Heartbleed: OpenSSL bug discovered in 2014, here are some links: [openSSL's changelog](https://www.openssl.org/news/secadv/20140605.txt), [article on CSO Online](https://www.csoonline.com/article/562859/the-heartbleed-bug-how-a-flaw-in-openssl-caused-a-security-crisis.html), [cloudflair technical rundown](https://blog.cloudflare.com/answering-the-critical-question-can-you-get-private-ssl-keys-using-heartbleed/)


## Exploration: Testing Methods

### quick definitions

- UX and Usability: user experience and ease of use/learning aof a product

- Fault: a software "bug" i.e. any condition that results in software not performing as required.

- Defect density: the number of defects divided by the total LOC in a SW project

- Code Coverage: AKA "test coverage", indicates the percentage of source code which is executed by a test suit

- Test Suite: a Collection of test cases designed to demonstrate that a program performs as specified

- Unit Test: A test on a program unit, with several cases performed to cover a range of input

- Test Case: A single test with known (specified) input and expected outpuyt. sometimes input is provided via mocking

- Assertion: a Predicate used to test a unit. Failed assersion == failed test

### HCI/UXR: Human Computer Interaction and User eXperience Research

- Heuristic evaluation
	1. choose a set of heyristics
	2. define a set of representative tasks to explore the interface
	3. start eval by walking through each task step by step. record time and errors found for each heuristic
	4. once reccorded, asses the problem using the Nielsoen's severity scale
	5. Collate results ino one single report or spreadsheet organized by severity
- Paper prototyping
- Eye-tracking / behavior tracking
- Cognitive walk-through
	1. create personas based on project's target audience
	2. choose a user flow based on the tasks the SW supports
	3. walk through the user flow from the perspective of your persona
	4. answer the following Qs as you walk through each step:
		- would my persona understand what action to take next?
		- would my user be able to find the correct action?
		- are there signifiers apparent to guide my persona to the needed affordance (will the user understand the signifier)
		- if my persona takes an action, would they be able to ascertainif they have made progress
	5. after completing your user flows, review answers from these questions from each step to gather findinga b9out learnability of your interface
- Qualitative User Testing (AKA “think-aloud” protocol)
	- the process involves observing a user and taking notes as they use the software.
	1. find a willing user (consent forms are important)
	2. set up the testing environment. determine tasks for participant to complete
	3. give a short briefing and confirm consent for the study
	4. clearly explain what is about to happen and ask for participants to think out loud as they engage
	5. record if possible, write observations and notes. start with simple tasks and then try out more complex, helping participants as they get stuck.
	6. gather basic demographics , short reflective interview. what did you like least/ best?
- A/B Testing

### Software engineering

- Code reviews:	clear out code smells by refactoring code. use a linter to catch errors or go through it line by line. 
	- [a taxonomy for bad code smells](http://mikamantyla.eu/BadCodeSmellsTaxonomy.html), [how to do review like a human](https://mtlynch.io/human-code-reviews-1/), [11 Proven practices for more effective, efficient peer code reviews](https://www.ibm.com/developerworks/rational/library/11-proven-practices-for-peer-review/index.html)

- Unit Testing
	1. Assess the existing coverage
		- There are tools available to help you determine this if the project doesn't document it for you (e.g. GitHub's Code Coverage SummaryLinks to an external site.).
	2. Determine what the untested units are and which ones you will be testing
	3. Set goals for coverage (type and extent)
	4. Write your tests (may require finding appropriate tools and libraries)
	5. Run your tests and document the results

- Mutation testing
	- Who will guard the guards, tests the tests by changing the program. if a tests succeeds after a program has been mutated then the tests themselves are flawed

- Cyber Seurity
	- learning about Security through antiquated Software (LASTAS): look at an old and new version of a project. If version one had a fix for a a security issue that was fixed in V2, make sure that it remained fixed for all the new features of version 2.	
	- [penetration testing framework](https://www.metasploit.com)
	- [vulnerability assessment scanner] (https://openvas.org/)









