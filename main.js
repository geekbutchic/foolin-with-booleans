/********************
 * YOUR CODE BELOW! *
 ********************/
moreThan5 = (num) => {
  return num > 5;
}

isNewTopScore = (score, topScore) => {
  return score > topScore;
}

isInDanger = (grade) => {
  return grade >= 60 && grade <= 71;
}

isCoasting = (grade) => {
  return grade >= 72 && grade <= 83;
}

isSucceeding = (grade) => {
  return grade >= 84 && grade <= 92;
}

isFailing = (grade) => {
  return grade < 60;
}

isAcing = (grade) => {
  return grade > 92;
}

isStudent = (str) => {
  return str === 'student';
}

isTeacher = (str) => {
  return str === 'teacher';
}

isAdmin = (str) => {
  return str === 'admin';
}

isElementary = (str) => {
  return str === 'elementary';
}

areDifferentPeople = (personA, personB) => {
  return personA !== personB;
}

isMiddleSchoolTeacher = (person, grade) => {
  return person === 'teacher' && grade >= 6 && grade <= 8;
}

notAnElementarySchoolAdministrator = (member, role) => {
  return member !== 'elementary' || role !== 'admin';
}

/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof moreThan5 === 'undefined') {
  moreThan5 = undefined;
}

if (typeof isNewTopScore === 'undefined') {
  isNewTopScore = undefined;
}

if (typeof isInDanger === 'undefined') {
  isInDanger = undefined;
}

if (typeof isCoasting === 'undefined') {
  isCoasting = undefined;
}

if (typeof isSucceeding === 'undefined') {
  isSucceeding = undefined;
}

if (typeof isFailing === 'undefined') {
  isFailing = undefined;
}

if (typeof isAcing === 'undefined') {
  isAcing = undefined;
}

if (typeof isStudent === 'undefined') {
  isStudent = undefined;
}

if (typeof isTeacher === 'undefined') {
  isTeacher = undefined;
}

if (typeof isAdmin === 'undefined') {
  isAdmin = undefined;
}

if (typeof isElementary === 'undefined') {
  isElementary = undefined;
}

if (typeof areDifferentPeople === 'undefined') {
  areDifferentPeople = undefined;
}

if (typeof notAnElementarySchoolAdministrator === 'undefined') {
  notAnElementarySchoolAdministrator = undefined;
}

if (typeof isMiddleSchoolTeacher === 'undefined') {
  isMiddleSchoolTeacher = undefined;
}


module.exports = {
  moreThan5,
  isNewTopScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  areDifferentPeople,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
}
