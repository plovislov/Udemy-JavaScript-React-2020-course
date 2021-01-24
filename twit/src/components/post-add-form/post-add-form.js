import React from 'react';
import './post-add-form.css';

const PostAddForm = ({onAdd}) => {
  return (
      <form className="bottom-panel d-flex"
            action="">
        <input
            type="text"
            placeholder="О чём вы думаете сейчас?"
            className="form-control new-post-label"
        />
        <button
            type="submit"
            className="btn btn-outline-secondary"
            onClick={() => onAdd('hello')}>
          Добавить
        </button>
      </form>

  )
}

export default PostAddForm;