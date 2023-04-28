"use strict";

// Динамическое создание профиля юзера

const user = {
  name: "Deonte Feil",
  phone: "453-758-3456",
  email: "Deonte.Feil@hotmail.com",
  avatar:
    "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/1a697a67-d844-42ba-b367-071c4a581462/280x420",
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

const bodyElem = document.querySelector("body");

const profile = createUserProfile(user);

const nextSibling = document.querySelector(".unsplash-image");

bodyElem.insertBefore(profile, nextSibling);

function createUserProfile({ name, phone, email, avatar, address }) {
  const profileContainer = document.createElement("div");
  profileContainer.classList.add("profile-container");

  const container = document.createElement("div");
  container.classList.add("user-profile");

  const image = document.createElement("img");
  image.src = avatar;
  image.alt = "user avatar";
  image.classList.add("avatar");

  const infoList = document.createElement("ul");
  infoList.classList.add("info");

  const nameField = cteateInfoItem("Name", name);
  const phoneField = cteateInfoItem("Phone", phone);
  const emailField = cteateInfoItem("Email", email);
  const addressField = cteateInfoItem(
    "Address",
    `${address.country}, ${address.city}`
  );

  infoList.append(nameField, phoneField, emailField, addressField);

  container.append(image, infoList);

  profileContainer.appendChild(container);

  return profileContainer;
}

function cteateInfoItem(label, text) {
  const item = document.createElement("li");
  const itemLabel = document.createElement("b");
  itemLabel.textContent = `${label}: `;
  const itemText = document.createTextNode(text);

  item.append(itemLabel, itemText);

  return item;
}

// Добавление элемента с помощью шаблонной строки

const menu = document.querySelector(".menu");

const newItem = `<li class="menu-item"><a href = "/news">news</a></li>`;

menu.insertAdjacentHTML("afterbegin", newItem);
