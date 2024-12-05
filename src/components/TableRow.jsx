import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { MdDelete, MdEdit } from "react-icons/md";
import FormModal from "./FormModal";

const TableRow = ({ task, handleDelete }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  return (
    <>
      <tr>
        <td>{0}</td>
        <td>{task.title}</td>
        <td>{task.author}</td>
        <td>{task.assigned}</td>
        <td>{task.end_date}</td>
        <td>
          <Button
            onClick={() => setIsEditOpen(true)}
            size="sm"
            className="me-2"
          >
            <MdEdit />
          </Button>
          <Button
            onClick={() => handleDelete(task.id)}
            size="sm"
            variant="danger"
          >
            <MdDelete />
          </Button>
        </td>
      </tr>
      <FormModal
        task={task}
        show={isEditOpen}
        handleClose={() => setIsEditOpen(false)}
      />
    </>
  );
};

export default TableRow;
