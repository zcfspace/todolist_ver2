const apiUrl = "https://localhost:7078/api";

export async function getTasks() {
  const response = await fetch(`${apiUrl}/GetTasks`);
  const data = await response.json();
  return data;
}

export async function insertTask(task : string) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task: task, complete: false }),
  };
  return fetch(`${apiUrl}/InsertTask`, options)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

export async function deleteTask(taskId: number) {
  const options = {
    method: "DELETE",
  };
  return fetch(`${apiUrl}/DeleteTask/${taskId}`, options)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

export async function editTask(taskId : number, newTaskName: string) {
  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: taskId, task: newTaskName }),
  };
  return fetch(`${apiUrl}/UpdateTask/${taskId}`, options)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

export async function completeTask(taskId: number) {
  const options = {
    method: "PATCH"
  };
  return fetch(`${apiUrl}/CompleteTask/${taskId}`, options)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
