import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import faker from 'faker';
import Segment from './component/Segment';
import Message from './component/Message';
import CommentDetail from './component/CommentDetail';
import ApprovalCard from './component/ApprovalCard';

class App extends React.Component {
    state = {
        comments: [],
        number: 0,
        information: faker.lorem.paragraph()
    };

    handleAddComment = () => {
        const newComment = {
            author: faker.name.firstName(),
            time: faker.date.recent().toLocaleDateString(),
            body: faker.lorem.sentence(),
            avatar: faker.image.avatar()
        };
        this.setState({ comments: [newComment, ...this.state.comments] });
    };

    handlePlus = () => {
        this.setState({ number: this.state.number + 1 });
    }
    handleMinus = () => {
        this.setState({ number: this.state.number - 1 });
    }
    handleReset = () => {
        this.setState({ number: 0 });
    }
    render() {
        const counter = {
            "textAlign": "center"
        }
        return (
            <>
                <div className="counter" style={counter}>
                    <span>{this.state.number}</span>
                    <button onClick={this.handlePlus}>
                        plus
                    </button>
                    <button onClick={this.handleMinus}>
                        Minus
                    </button>
                    <button onClick={this.handleReset}>
                        Reset
                    </button>
                </div>
                <Segment>
                    <div className="ui icon header">
                        <i className="pdf file outline icon">
                            No document
                        </i>
                    </div>
                    <div className="ui primary button">ADD document</div>
                </Segment>
                <Segment>
                    <h4 className="ui header">For your information</h4>
                    <p>{this.state.information}</p>
                </Segment>

                <Message header="회원 약관 변경" body="약관이 변경되었습니다." />
                <div className="ui container comments">
                    <button className="ui primary button" onClick={this.handleAddComment}>댓글 작성</button>
                    <ApprovalCard>
                        <h4>저는 칼퇴하겠습니다. 금요일이니까요.</h4>
                    </ApprovalCard>
                    {this.state.comments.map(comment => {
                        return (
                            <ApprovalCard key={comment.author}>
                                <CommentDetail {...comment}/>
                            </ApprovalCard>
                        )
                    })}
                </div>
            </>
        )
    }
};

ReactDOM.render(<App />, document.getElementById('root'));