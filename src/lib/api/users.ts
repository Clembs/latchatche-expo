import { apiGet } from ".";

export type User = {
  id: number;
  username: string;
  createdAt: Date;
};

export async function getCurrentUser() {
  const response = await apiGet("/me", { loginRedirect: false });

  const user = (await response.json()) as User;

  return user;
}
