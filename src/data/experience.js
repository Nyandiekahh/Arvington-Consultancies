// Selected Consulting Experience — content data.
//
// EVERYTHING BELOW STARTS EMPTY ON PURPOSE. Assignments, projects, clients and
// outcomes are factual claims, and clients may need to consent to being named,
// so add only real, approved entries. Each section of the page renders itself
// automatically as soon as its array has entries; until then it shows a quiet
// "to be published" note.
//
// Link fields:
//   verticalId   -> the `id` of a Consulting Vertical in data/verticals.js (1-20)
//   consultant   -> a person's name exactly as written in data/leadership.js
//                   (C-Suite) or data/verticals.js (directorName). The page then
//                   links the entry to that person's profile / vertical.
//
// ---- 3.2.1 Featured Consulting Experience ---------------------------------

// 3.2.1.1 Strategic Advisory Assignments
// { title, client, mandate, consultantRole, period, verticalId, consultant }
export const strategicAssignments = []

// 3.2.1.2 Selected Consulting Projects
// { title, client, scope, deliverable, consultant, verticalId }
export const selectedProjects = []

// 3.2.1.3 Advisory Outcomes & Impact
// { outcome, impact, keyResult, contribution, verticalId, consultant }
export const advisoryOutcomes = []

// ---- 3.2.2 Consultant Experience -------------------------------------------
// 3.2.2.1 Consultant Profile is generated automatically from the Executive
// team (data/leadership.js) and the Consulting Directors (data/verticals.js).

// 3.2.2.2 Selected Advisory Engagements
// { consultant, assignment, client, role, period, contribution, verticalId }
export const advisoryEngagements = []

// 3.2.2.3 Institutions Advised
// { institution, sector, mandate, period, verticalId, consultant }
export const institutionsAdvised = []

// ---- 3.2.3 Consulting Delivery Gallery ---------------------------------------
// Save photographs under public/images/experience/ and reference them as
// '/images/experience/file.jpg'.

// 3.2.3.1 Advisory Delivery
// { src, consultant, assignment, activity, verticalId }
export const advisoryDelivery = []

// 3.2.3.2 Consulting Engagement Photographs (photograph only)
// { src, alt }
export const engagementPhotographs = []

// 3.2.3.3 Advisory Assignment Highlights
// { title, client, mandate, contribution, outcome, consultant, verticalId }
export const assignmentHighlights = []
