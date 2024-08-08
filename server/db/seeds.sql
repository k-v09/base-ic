USE base_ic;

INSERT INTO users (username, email, password)
VALUES
  ('johndoe', 'johndoe@example.com', 'password123'),
  ('janesmith', 'janesmith@example.com', 'password456'),
  ('bobwilliams', 'bobwilliams@example.com', 'password789');

INSERT INTO posts (title, content, user_id)
VALUES
  ('Introduction to React', 'React is a popular JavaScript library for building user interfaces.', 1),
  ('The Benefits of Tailwind CSS', 'Tailwind CSS is a utility-first CSS framework that can speed up your development process.', 2),
  ('Getting Started with Express.js', 'Express.js is a minimal and flexible Node.js web application framework.', 3),
  ('Understanding SQL Databases', 'SQL databases are a type of relational database management system.', 1);

INSERT INTO comments (content, post_id, user_id)
VALUES
  ("Great article, I learned a lot!", 1, 2),
  ("Thanks for the introduction, I'm excited to try React.", 1, 3),
  ("Tailwind CSS looks really promising, I can't wait to use it.", 2, 1),
  ("Informative post, I'll have to check out Express.js.", 3, 2),
  ("SQL databases are essential for many web applications.", 4, 3);