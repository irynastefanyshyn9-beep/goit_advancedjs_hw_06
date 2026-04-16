class Component {
    constructor(props) {
        this.props = props;
    }
}
class Page extends Component {
    pageInfo() {
        console.log('--- Generic Task 4 ---');
        console.log(`Page title: ${this.props.title}`);
    }
}
const myPage = new Page({ title: 'TypeScript Generics' });
myPage.pageInfo();
export {};
//# sourceMappingURL=4.js.map