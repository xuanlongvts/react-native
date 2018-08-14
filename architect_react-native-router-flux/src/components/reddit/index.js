import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, Container, List, ListItem, Spinner, View, Picker } from 'native-base';
import { selectReddit, invalidateReddit } from './actions';

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleRefreshClick = this.handleRefreshClick.bind(this);
    }

    componentDidMount() {
        const { selectReddit, selectedReddit } = this.props;
        selectReddit(selectedReddit);
    }

    handleChange(nextReddit) {
        const { selectReddit } = this.props;
        selectReddit(nextReddit);
    }

    handleRefreshClick(e) {
        e.preventDefault();
        const { invalidateReddit, selectedReddit } = this.props;
        invalidateReddit(selectedReddit);
    }

    render() {
        const { selectedReddit, posts, isFetching, lastUpdated } = this.props;

        return (
            <Container>
                <View style={{ marginTop: 50, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>{selectedReddit}</Text>

                    <Picker note mode="dropdown" style={{ width: 120 }} selectedValue={selectedReddit} onValueChange={this.handleChange}>
                        {['reactjs', 'frontend'].map(option => (
                            <Picker.Item label={option} value={option} key={option} />
                        ))}
                    </Picker>
                </View>

                {/* <p>
                    {lastUpdated && <span>Last updated at {new Date(lastUpdated).toLocaleTimeString()}. </span>}
                    <span onClick={!isFetching ? this.handleRefreshClick : null} className={!isFetching ? 'enable refresh' : 'refresh'}>
                        Refresh
                    </span>
                </p> */}

                {isFetching && posts.length === 0 && <Spinner color="green" />}
                {!isFetching &&
                    posts.length === 0 && (
                        <View>
                            <Text>Empty.</Text>
                        </View>
                    )}

                {posts.length > 0 && (
                    <List
                        dataArray={posts}
                        contentContainerStyle={{ marginTop: 120 }}
                        renderRow={data => {
                            return (
                                <ListItem>
                                    <Text>{data.title}</Text>
                                </ListItem>
                            );
                        }}
                    />
                )}
            </Container>
        );
    }
}

App.propTypes = {
    selectedReddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    selectReddit: PropTypes.func.isRequired,
    invalidateReddit: PropTypes.func.isRequired,
    lastUpdated: PropTypes.number.isRequired
};

const mapStateToProps = state => {
    const selectedReddit = state.reducerRedditApi.getIn(['selectedReddit']);
    const postsByReddit = state.reducerRedditApi.getIn(['postsByReddit']);
    const postsByRedditGetSelect = postsByReddit.getIn([selectedReddit]);

    let { isFetching, lastUpdated, posts } = {
        isFetching: postsByRedditGetSelect === undefined ? true : postsByRedditGetSelect.getIn(['isFetching']),
        lastUpdated: (postsByRedditGetSelect && postsByRedditGetSelect.getIn(['lastUpdated'])) || Date.now(),
        posts: (postsByRedditGetSelect && postsByRedditGetSelect.getIn(['items'])) || []
    };

    return {
        selectedReddit,
        posts,
        isFetching,
        lastUpdated
    };
};

const mapDispatchToProps = {
    selectReddit,
    invalidateReddit
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
