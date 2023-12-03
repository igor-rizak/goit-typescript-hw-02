/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

type TypeProps = {
  title: string;
};

class Component<T> {
    constructor(public props: T) {}
};

class Page extends Component<TypeProps> {
  pageInfo() {
    console.log(this.props.title);
  }
};

export { Page };


