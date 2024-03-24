console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
const body = document.querySelector('[data-js="body"]');
const newPost = document.createElement("section");
const newPostContent = document.createElement("p");
const newPostFooter = document.createElement("footer");
const newPostUsername = document.createElement("span");
const newPostLikeButton = document.createElement("button");

body.append(newPost);
newPost.append(newPostContent);
newPost.append(newPostFooter);
newPostFooter.append(newPostUsername);
newPostFooter.append(newPostLikeButton);

newPostContent.textContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
newPostUsername.textContent="@username";
newPostLikeButton.textContent="♥ Like"

newPost.classList.add("post");
newPostContent.classList.add("post__content");
newPostFooter.classList.add("post__footer");
newPostUsername.classList.add("post__username");
newPostLikeButton.classList.add("post__button");
newPost.classList.add("body");

likeButton.addEventListener("click", handleLikeButtonClick);

newPostLikeButton.addEventListener("click", handleLikeButtonClick);

/*newPostLikeButton.addEventListener(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

// Exercise:
// Use document.createElement() and append another social media post to the body.


//

/*This page shows an example of a social media post. Your task is to replicate the social media post with JavaScript. Use `document.createElement()` to generate all HTML elements separately.

Don't use `.innerHTML` to create the HTML in one instance, but use multiple calls of `document.createElement()` instead.

The `index.html` demonstrates the required HTML tags, structure and class names.

Append the second social media post to the body. Don't forget to add the event listener to the like button. You can use the function `handleLikeButtonClick` for the event listener.

    <section class="post">
      <p class="post__content">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>
      <footer class="post__footer">
        <span class="post__username">@username</span>
        <button type="button" class="post__button" data-js="like-button">*/