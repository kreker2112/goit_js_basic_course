"use strict";

// Динамическое создание профиля юзера

const user = {
  name: "Deonte Feil",
  phone: "453-758-3456",
  email: "Deonte.Feil@hotmail.com",
  avatar:
    "https://lh3.googleusercontent.com/a/AGNmyxZ9qIGKgiA6uPWeS5JLhyfGQ2XMvXAgOFKm9bRArg=s432",
  address: {
    country: "USA",
    city: "South Maximoville",
  },
};

{
  /* <div class="user-profile">
      <img
        src="https://lh3.googleusercontent.com/a/AGNmyxZ9qIGKgiA6uPWeS5JLhyfGQ2XMvXAgOFKm9bRArg=s432"
        alt=""
        class="avatar"
      />

      <ul class="info">
        <li><b>Name:</b>Deonte Feil</li>
        <li><b>Phone:</b>453-758-3456</li>
        <li><b>Email:</b>Deonte.Feil@hotmail.com</li>
        <li><b>Location:</b>USA, South Maximoville</li>
      </ul>
    </div> */
}

createUserProfile(user);

function createUserProfile() {
  const container = document.createElement("div");
  container.classList.add("user-profile");
}
