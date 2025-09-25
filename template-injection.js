import ejs from 'ejs';

const userInput = {
  first_name: '<%= 2 + 2 %>',
  last_name: 'Tester'
};

const link = 'http://localhost/activate-user';

const template = `
<html>
  <body>
    <h1>Hello <%= first_name %> <%= last_name %></h1>
    <p>Click <a href="<%= link %>">here</a> to activate your account.</p>
  </body>
</html>
`;

const htmlBody = ejs.render(template);

console.log(htmlBody);