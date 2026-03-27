export async function approveUser(id: string) {
  await fetch(`/api/users/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ approved: true }),
  });

  location.reload();
}