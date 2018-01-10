import {getCourses} from '../actions/courses';

class CoursesHeader extends Component {
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                        <Icon name="options"/>
                    </Button>
                </Left>
                <Body>
                <Title>Dostępne kursy</Title>
                </Body>
                <Right>
                    <Button transparent onPress={() => this.props.navigation.dispatch(getCourses())}>
                        <Icon name="refresh"/>
                    </Button>
                    <Button transparent onPress={() => this.props.navigation.navigate('Settings')}>
                        <Icon name="settings"/>
                    </Button>
                </Right>
            </Header>
        )
    }
}