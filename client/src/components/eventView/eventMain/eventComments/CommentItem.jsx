import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import moment from "moment";

import { deleteComment } from "actions/eventActions";

class CommentItem extends Component {
  onDeleteClick = (eventId, commentId) => () => {
    this.props.deleteComment(eventId, commentId);
  };

  render() {
    const { comment, eventId, auth } = this.props;
    return (
      <div className="comment__item">
        <Link to={`/profile/${comment.user}`} className="comment__item__avatar">
          <img src={comment.avatar} alt="avatar" />
        </Link>

        <div className="comment__item__detail">
          <p className="comment__item__detail--name">{comment.name}</p>
          <p className="comment__item__detail--date">
            {moment(comment.date).fromNow()}
          </p>
          <p className="comment__item__detail--text">{comment.text}</p>
        </div>

        {comment.user === auth.user.id && (
          <div className="comment__item__actions">
            <button
              onClick={this.onDeleteClick(eventId, comment._id)}
              className="comment__item__actions--delete"
            >
              <span>Delete</span>
            </button>
          </div>
        )}
      </div>
    );
  }
}

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  eventId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
