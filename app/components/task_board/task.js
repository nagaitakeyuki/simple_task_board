import React, { Fragment } from 'react'

import { Draggable } from 'react-beautiful-dnd'

export default ({ task, index }) =>
  (
    <Draggable
      draggableId={task.taskId} index={index}>
      
      {provided => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div style={{ width: "100px", height: "100px", background: "#0099cc", borderRadius: "5px", float: "left", marginRight: "5px", marginBottom: "5px", cursor: 'move' }}>{task.taskName}</div>
          
        </div>
      )}

    </Draggable>
  )
