import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'
import { Droppable } from 'react-beautiful-dnd'
import { Input, Button } from "antd"

import Modal from '../../../common/component/Modal'
import Story from './Story'
import StoryForm from './form/StoryForm'
import Actions from '../sprintBacklogActions'

class BacklogCategory extends Component{

  state = {
    isOpenStoryAdd: false,
    isEditing: false,
    isCollapsed: true,
    backlogCategoryName: this.props.backlogCategory.backlogCategoryName
  }

  render() {
    const {backlogCategory} = this.props

    return (

      <Droppable
        droppableId={backlogCategory.backlogCategoryId}>
        
        {provided => (
          <div ref={provided.innerRef}
                {...provided.droppableProps}
                style={{border: "1px solid lightgray", borderRadius: "5px", marginTop: "5px", background: "lightgray"}}>

            <div style={{position: "relative", margin: "2px", cursor: "move"}}>
              {this.state.isEditing ? (
                  <Fragment>
                    <Input
                      size="small"
                      autoFocus={true}
                      value={this.state.backlogCategoryName}
                      onChange={(e) => this.handleTextChange(e, "backlogCategoryName")}
                    />
                    <Button
                      size="small"
                      type="default"
                      onClick={
                        () => {
                          this.changeBacklogCategoryName({backlogCategoryId: backlogCategory.backlogCategoryId, 
                                                          backlogCategoryName: this.state.backlogCategoryName})
                        }
                      }
                    >
                      変更
                    </Button>
                    <Button
                      size="small"
                      type="default"
                      onClick={() => { this.setState({...this.state, isEditing: false})}}
                    >
                      キャンセル
                    </Button>

                  </Fragment>
                ) : (
                  <Fragment>
                    <img src="imgs/plus.png" style={{cursor: "pointer", verticalAlign: "middle"}}
                        onClick={() => this.setState({...this.state, isOpenStoryAdd: true})}/>
                    <span style={{verticalAlign: "middle"}}
                        onClick={() => this.setState({...this.state, isEditing: true})}>
                      {backlogCategory.backlogCategoryName}
                    </span>
                    <img src="imgs/arrow.png"
                       style={{position: "absolute", right: "5px", top: "5px", cursor: "pointer", 
                                transform: this.state.isCollapsed ? "rotate(-90deg)" : "", transition: "0.1s"}}
                       onClick={() => this.setState({isCollapsed: !this.state.isCollapsed})} />
                  </Fragment>
              )}
            </div>

            <div style={{display: this.state.isCollapsed ? "none" : ""}}>
              {backlogCategory.stories ? 
                  Array.from(backlogCategory.stories.values())
                    .sort((a, b) => a.sortOrder - b.sortOrder)
                    .map(story => (
                      <Story story={story} key={story.storyId} />
                  ))
                  : null}

              {provided.placeholder}
            </div>

            <Modal
              visible={this.state.isOpenStoryAdd}
              onCancel={this.closeAddStory}
              footer={null}
              destroyOnClose
              width={500}>
              <StoryForm
                backlogCategoryId={backlogCategory.backlogCategoryId}
                onSaveButtonClick={this.addStory}/>
            </Modal>

          </div>

        )}
      </Droppable>

    )
  }

  handleTextChange(e, key) {
    this.setState({ [key]: e.target.value })
  }

  changeBacklogCategoryName = (param) => {
    this.props.dispatch(Actions.changeBacklogCategoryName(param))
    this.setState({...this.state, isEditing: false})
  }

  addStory = (param) => {
    this.props.dispatch(Actions.addStoryToBacklogCategory(param))
    this.closeAddStory()
  }

  closeAddStory = () => {
    this.setState({...this.state, isOpenStoryAdd: false})
  }

}

export default connect()(BacklogCategory)
