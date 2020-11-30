import React, { useState, useLayoutEffect } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import { Card } from "react-bootstrap";
import TypeAcessEnum from "../enums/type-access";
import TaskService from "../services/task-service";

export default function Tasks() {
  const [taskList, setterTasks] = useState([]);

  useLayoutEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    const results = await (await TaskService.getTask()).docs;
    setterTasks(results);
  };
  return (
    <>
      <Header type={TypeAcessEnum.PUBLIC} />
      <Banner
        title="Task Management"
        message="A web page for management of tasks"
      />
      <section id="three" className="wrapper special">
        <div className="inner align-center">
          <header className="align-center">
            <h2>Pagina das Tarefas</h2>
            <p>Aqui é apresentado todas as tarefas registradas</p>
          </header>
          <div className="flex flex-2">
            {taskList.map((task) => (
              <Card
                style={{ width: "45%", margin: "1% 0 0 0.5%" }}
                className="box"
              >
                <Card.Body>
                  <Card.Title>{task.data().title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Prioridade: {task.data().priority}
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    Responsável: {task.data().responsible}
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    Situação: {task.data().status}
                  </Card.Subtitle>
                  <Card.Text style={{ "text-align": "center" }}>
                    Descrição: {task.data().description}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
