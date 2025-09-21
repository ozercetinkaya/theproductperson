"use server";

export async function sendContactForm(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const res = await fetch("https://formspree.io/f/mkgjvryd", {
    method: "POST",
    body: JSON.stringify({ name, email, message }), // FormData yerine JSON gönder
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error(`Form submission failed: ${res.status}`);
  }

  return res.ok;
}
