const cors = require('cors');
const express = require('express');
const res_data =
  'Product Test Engineer Job Description:\n\nWe are seeking a highly skilled Product Test Engineer to join our dynamic team in the travel and tourism industry. The ideal candidate will have experience in testing software applications and web-based applications. The candidate should be detail-oriented, self-driven, and possess excellent communication skills. This position is available in our offices in either Hong Kong or Singapore.\n\nResponsibilities:\n\n\u2022 Test and evaluate software applications and web-based applications to ensure they meet design specifications, functional requirements, and usability standards.\n\u2022 Work closely with product owners, developers, and QA teams to ensure that products meet quality standards.\n\u2022 Create and execute test plans, test cases, and test scripts for software applications and web-based applications.\n\u2022 Conduct manual and automated testing of software applications and web-based applications to identify defects and issues.\n\u2022 Work collaboratively with development teams to resolve technical issues found during testing.\n\u2022 Document and report defects and issues found during testing to the development team.\n\u2022 Participate in the design and enhancement of test automation frameworks, tools, and processes.\n\u2022 Collaborate with project teams to estimate test efforts, specify acceptance criteria, and participate in sprint planning.\n\nRequirements:\n\n\u2022 Bachelor\u2019s degree in computer science or related field.\n\u2022 2+ years of experience as a product test engineer in a software development environment.\n\u2022 Experience in testing software applications and web-based applications.\n\u2022 Experience with software testing tools, automated testing frameworks, and continuous integration systems.\n\u2022 Ability to write high-quality test plans, test cases, and test scripts.\n\u2022 Excellent written and verbal communication skills.\n\u2022 Strong analytical and problem-solving skills.\n\u2022 Ability to work independently and in a team environment.\n\u2022 Experience with Agile Scrum methodology.\n\nBenefits:\n\n\u2022 Competitive salary and benefits package.\n\u2022 Flexible work arrangements.\n\u2022 Opportunities for career growth and professional development.\n\u2022 Collaborative and friendly work environment.\n\u2022 Opportunity to work on exciting projects in the travel and tourism industry.\n\nIf you are a highly motivated individual with a passion for software testing and quality assurance, we encourage you to apply for this exciting opportunity. Please submit your resume and cover letter for consideration.'.split(
    '',
  );

const app = express();
app.use(
  cors({
    origin: '*',
    credentials: true,
  }),
);
app.get('/events', sendServerEvent);

app.listen(5000, () => {
  console.log('Server running at http://127.0.0.1:5000/');
});

function sendServerEvent(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    // 'Access-Control-Allow-Origin': 'http://localhost:3000', //or the specific origin you want to give access to,
    'Access-Control-Allow-Credentials': true,
  });

  var id = new Date().toLocaleTimeString();
  // Sending data event to display time after every 5 seconds to client.
  let i = 0;
  //   let data_string =res_data[i];
  setInterval(function () {
    i += 1;
    constructServerSentEvent(res, id, res_data[i]);
  }, 100);

  constructServerSentEvent(res, id, res_data[i]);
}

function constructServerSentEvent(res, id, data) {
  res.write('event: child_updated\n');
  res.write('id: ' + id + '\n');
  res.write(`data:{ "data": ${JSON.stringify(data)} }`);
  res.write('\n\n');
}
