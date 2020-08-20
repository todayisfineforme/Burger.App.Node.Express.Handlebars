$(() => {
    $('.devourBtn').on("click", (btn) => {
        const id = $(btn.target).attr("data-id");
        const newStatus = $(btn.target).data("devoured");
        const newDevourStatus = {
            devoured: newStatus
        };

        $.ajax(`/burgers/${id}`, {
            type: "PUT",
            data: newDevourStatus
        }).then(() => {
            location.reload();
        });
    });
    $('.orderCard').on("submit", (event) => {
        event.preventDefault();
        const newBurger = {
            burger_name: $("#newBurger").val().trim(),
            devoured: "0"
        };
        $.ajax("/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {
            location.reload();
        });
    });
    $(".delete").on("click", (btn) => {
        const id = $(btn.target).attr("data-id");
        $.ajax(`/burgers/${id}`, {
            type: "DELETE"
        }).then(() => {
            location.reload();
        });
    });
});