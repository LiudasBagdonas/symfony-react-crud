const comments = document.getElementById("comments-section");

if(comments) {
    comments.addEventListener('click', e => {
        if(e.target.className === "delete-comment-button") {
            if(confirm("Are you sure?")) {
                const id = e.target.getAttribute("data-id");
                
                fetch(`comments/delete/${id}`, {
                    method: "DELETE"
                }).then(res => window.location.reload())
            }
        }
    })
}