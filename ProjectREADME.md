# Project1

Project 1: Tuition Reimbursement Management System

    Group:

• Fatima Baloch
• Drael Davidson
• Mellownee Floyd
• Nathaniel H.

Tools:

• JavaScript
• Express.js
• DynamoDB
• React
• HTML
• CSS
• Redux
• TypeScript

TRMS, or Tuition Reimbursement Management System is a full-stack web application that allows employees to submit requests for reimbursements for courses, events, and certifications. These requests can then be approved or rejected by the employee's direct supervisor, department head, and a benefits coordinator while the employee is able to track the status of their requests.

User Roles:

• Employee
• Supervisor
• Department Head
• Benefits Coordinator

Stages of request creation:

Created, Submitted, Supervisor Approved (Pending Department Approval), Department Approved (Pending HR Approval), Complete.

1. Created –

a. Employee Name
b. Department
c. Title?
d. Course/Event/Certificate Name
e. Instructor/Facilitator
f. Start Date
g. End Date
h. Cost of Course
i. Expenses tab > Course > Description > Cost > Remove > Total
j. Hours of Training Complete
k. Certification Link
l. Upload Documentation (Certification/Receipt)
m. Course Relevancy Disclaimer (seen on submit)
n. Submit Button
o. Comment Box
p. Signature

2. Submitted

a. Approval Button
b. Reject Button
c. Comment Box

Minimum Viable Product

• Employee must be able to log in
• Employee must be able to submit request
• Employee must be able to see status
• Approvers must be able to log in
• Approvers must be able to see request once their approval is required
• Approvers must be able to approve or reject request
• Employee must be able to resubmit previously rejected request
• User registrations
• User can save progress without submitting form

Nice to have

• Feedback form
• Status bar
• Department Head has overriding authority
• Homepage
• New submission button/page
• Employee has ability to see previous requests
• Approvers have ability to see log of previous approvals
• Receipt is required for reimbursement over $250
• Pop-up guidelines for approvals
• Reimbursement methods
• Different home page for each type of employee
• Itemized approval ability

• Stage 1 of project:

o Create backend for login page
o Create backend for form submission
o Create user database >Employees >Employees, Department Supervisors >Employees, Department Manager >Employees, Human Resources, Benefits Coordinator
o Establish user privileges

• Stage 2 of project:

o Set form path of approval
o Storage of form on save
o Storage of form on submit
o Adding approval ‘signature’ on approval

• Stage 3 of project

o Login page
o Employee Homepage
o Form
o Approver Homepage
• Stage 4
o Testing full site
o Add nice to haves
o Additional testing
o Add historical user ‘usage’

¬¬¬¬

Scenarios:

    Case #1: Employee Halwa Sofe works as the Safety Liaison and has completed a two-week Health and Wellness forum. The forum cost $395. The forum was rejected by the benefits coordinator with a note saying that that forum is not within the scope of Halwa’s job title. Halwa’s Department Head pre-approved the course prior to Halwa attending.

    Case #2: Full-time UX Design intern Anthony Roach is attending college for Computer Science. His annual tuition is $9,482.64. The annual reimbursement cap is $4,500.

    Case #3: Marcus Rey works as a full-time security guard. Marcus is retiring soon and has taken a community class about retirement. The courses cost $149.

    Case #4: Sudhir Mishra, Security Manager, completed 120 hours of trainer training and is now certified as the lead trainer. The certification cost $1,325.

    Case #5: Chris Waters, event coordinator, renewed his translator recertification. Michael Buble, Chris’ boss is currently on vacation in Australia and unable to approve the form. Chris was not given a new certification, just a link to the official site of translator certification, where his recertification is shown as complete.

    Case #6: Sora Lee just joined the security team and mistakenly paid for fingerprinting training. Sora boss, Sudhir, instructed her to apply for reimbursement. The course was $199, and Sora is unable to find the receipt.
