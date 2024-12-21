
const links = [];


function updateContent(contentHtml) {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = contentHtml;
}


function showLinks() {
    if (links.length === 0) {
        updateContent("<p>No links available. Add some links to see them here.</p>");
        return;
    }

    const linkList = links
        .map(
            (link, index) =>
                `<li>${index + 1}. <a href="${link.url}" target="_blank">${link.title}</a> - Added by ${link.author}</li>`
        )
        .join("");

    updateContent(`<ul>${linkList}</ul>`);
}


function addLink() {
    const formHtml = `
        <form id="addLinkForm" class="content-card">
            <label for="title">Title:</label><br>
            <input type="text" id="title" required><br><br>

            <label for="url">URL:</label><br>
            <input type="text" id="url" required><br><br>

            <label for="author">Author:</label><br>
            <input type="text" id="author" required><br><br>

            <button type="submit" class="btn-primary">Add Link</button>
        </form>
    `;

    updateContent(formHtml);

    const form = document.getElementById("addLinkForm");
    form.onsubmit = (event) => {
        event.preventDefault();

        const title = document.getElementById("title").value.trim();
        const urlInput = document.getElementById("url").value.trim();
        const author = document.getElementById("author").value.trim();

        const url = urlInput.startsWith("http://") || urlInput.startsWith("https://")
            ? urlInput
            : "http://" + urlInput;

        links.push({ title, url, author });
        alert(`The link "${title}" was added successfully!`);
        showLinks();
    };
}


function removeLink() {
    if (links.length === 0) {
        updateContent("<p>No links to remove.</p>");
        return;
    }

    const formHtml = `
        <form id="removeLinkForm" class="content-card">
            <label for="index">Enter the index of the link to remove:</label><br>
            <input type="number" id="index" min="1" max="${links.length}" required><br><br>
            <button type="submit" class="btn-danger">Remove Link</button>
        </form>
    `;

    updateContent(formHtml);

    const form = document.getElementById("removeLinkForm");
    form.onsubmit = (event) => {
        event.preventDefault();

        const index = parseInt(document.getElementById("index").value, 10) - 1;

        if (index >= 0 && index < links.length) {
            const confirmRemove = confirm(`Are you sure you want to remove the link "${links[index].title}"?`);
            if (confirmRemove) {
                const removedLink = links.splice(index, 1)[0];
                alert(`The link "${removedLink.title}" was removed successfully!`);
                showLinks();
            }
        } else {
            alert("Invalid index. Please try again.");
        }
    };
}
