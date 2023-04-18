import express from 'express';
import fs from 'fs';
const app = express();

app.use(express.json());

app.post('/api/users', (req, res) => {
  const formData = req.body;
  fs.readFile('./src/data/users.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Failed to read users.json:', err);
      res.status(500).send('Failed to read users.json');
      return;
    }
    const users = JSON.parse(data);
    users.push(formData);
    fs.writeFile('users.json', JSON.stringify(users), 'utf8', (err) => {
      if (err) {
        console.error('Failed to write to users.json:', err);
        res.status(500).send('Failed to write to users.json');
        return;
      }
      res.status(200).send('Form data saved');
    });
  });
});

const PORT = process.env.PORT || 5173;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
