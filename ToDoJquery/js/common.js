$(window).load(function () {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
}

);

// 
let modal = document.getElementById('main-myModal');
let btn = document.getElementById('main-myBtn');
let span = document.getElementsByClassName('main-close')[0];

btn.onclick = function () {
	modal.style.display = "block";
}

span.onclick = function () {
	modal.style.display = "none";
}

window.onclick = function () {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}


// 

$(document).ready(function () {
	addListenerToaddTask();
}
)
function addListenerToaddTask() {
	$(".add-task").click(function () {
		let valueTask = $(".input-task").val();

		if (!valueTask.trim()) {
			alert("Please, enter your text!")
			return false;
		}

		let containerTodo = "<div class='todo-container'><strong>" + valueTask + "</strong> <select class='select'><option>Not performed</option><option>Performed</option></select> <button class='edit-task'>Edit</button><button class='delete-task'>Delete</button></div>";
		$(".todos-container").prepend(containerTodo);
		$(".input-task").val("");
		addListenerToDeleteTask();
		addListenerToEditTask();
	}

	);
}

function addListenerToDeleteTask() {
	$(".delete-task").click(function () {
		$(this).parents(".todo-container").remove();
	}

	);
}

function addListenerToEditTask() {
	$(".edit-task").click(function () {
		let valueEditTask = $(this).siblings("strong");
		$("#myModal").modal("show");
		let inputForEdit = $(".input-task-edit");
		inputForEdit.val(valueEditTask.text());
		$(".save-changes").unbind("click");

		$(".save-changes").click(function () {
			if (!inputForEdit.val().trim()) {
				alert("Please, enter your text!")
				return false;
			}

			valueEditTask.text(inputForEdit.val());
		}

		);

	}

	);
}