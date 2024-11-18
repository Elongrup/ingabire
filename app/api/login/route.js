// /app/api/login/route.js
import users from '../../data/users.json'; // Adjust this path based on your file structure

export async function POST(req) {
  const { username, password } = await req.json();

  // Find the user in the users array
  const user = users.find((user) => user.username === username && user.password === password);

  // If user is not found, return an error response
  if (!user) {
    return new Response(JSON.stringify({ message: 'Invalid username or password' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Return user data including role for redirection
  return new Response(JSON.stringify({ username: user.username, role: user.role }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
