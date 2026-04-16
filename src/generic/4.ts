interface PageProps {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<PageProps> {
  pageInfo() {
    console.log('--- Generic Task 4 ---');
    console.log(`Page title: ${this.props.title}`);
  }
}

const myPage = new Page({ title: 'TypeScript Generics' });
myPage.pageInfo();

export {};