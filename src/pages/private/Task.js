import React, { useLayoutEffect, useState } from "react";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import { useHistory, useLocation } from "react-router-dom";
import TypeAcessEnum from "../../enums/type-access";
import TaskService from "../../services/task-service";

export default function Task() {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const idTask = searchParams.get("id");

  let history = useHistory();
  const [newTitle, setTitle] = useState("");
  const [newPriority, setPriority] = useState("");
  const [newResponsible, setResponsible] = useState("");
  const [newStatus, setStatus] = useState("");
  const [newDescription, setDescription] = useState("");

  const saveTask = async () => {
    const task = {
      title: newTitle,
      priority: newPriority,
      status: newStatus,
      responsible: newResponsible,
      description: newDescription,
    };
    if (idTask) {
      await TaskService.updateTask({ task, id: idTask }).then(() =>
        history.push("/home")
      );
    }
    else {
      await TaskService.postTask(task)
        .then(() => history.push("/home"))
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    }
  };

  const setTask = async () => {
    if (idTask) {
      await TaskService.getTask(idTask).then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          const { title, status, responsible, priority, description } = data;
          setTitle(title);
          setStatus(status);
          setResponsible(responsible);
          setPriority(priority);
          setDescription(description);
        }
      });
    }
  };

  useLayoutEffect(() => {
    setTask();
  }, []);

  return (
    <>
      <div>
        <Header type={TypeAcessEnum.PRIVATE} />
        <Banner
          title="Task Management"
          message="A web page for management of tasks"
        />
        <section id="three" className="wrapper special container">
          <h3>Tarefa</h3>
          <form>
            <div class="row uniform">
              <div class="6u 12u$(xsmall)" style={{ width: "100%" }}>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={newTitle}
                  placeholder="Título da Tarefa"
                  onChange={(field) => setTitle(field.target.value)}
                />
              </div>
              <div class="6u$ 12u$(xsmall)" style={{ width: "100%" }}>
                <input
                  type="text"
                  name="priority"
                  id="priority"
                  value={newPriority}
                  placeholder="Prioridade da Tarefa"
                  onChange={(field) => setPriority(field.target.value)}
                />
              </div>
              <div class="6u$ 12u$(xsmall)" style={{ width: "100%" }}>
                <input
                  type="text"
                  name="responsible"
                  id="responsible"
                  value={newResponsible}
                  placeholder="Responsável pela Tarefa"
                  onChange={(field) => setResponsible(field.target.value)}
                />
              </div>
              <div class="6u$ 12u$(xsmall)" style={{ width: "100%" }}>
                <input
                  type="text"
                  name="status"
                  id="status"
                  value={newStatus}
                  placeholder="Status da Tarefa"
                  onChange={(field) => setStatus(field.target.value)}
                />
              </div>
              <div
                class="6u$ 12u$(xsmall)"
                style={{ width: "100%", height: "10em" }}
              >
                <textarea
                  type="textarea"
                  name="description"
                  id="description"
                  placeholder="Descrição da Tarefa"
                  wrap="hard"
                  value={newDescription}
                  onChange={(field) => setDescription(field.target.value)}
                  style={{ width: "100%", height: "100%", resize: "none" }}
                />
              </div>
              <div class="12u$">
                <ul class="actions">
                  <li>
                    <input
                      type="button"
                      value="Cadastrar Tarefa"
                      onClick={saveTask}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
