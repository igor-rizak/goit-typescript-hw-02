/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

type TypeProps = {
  title: string,
};

class Component<TypeProps> {
    constructor(public props: TypeProps) {}
};

class Page extends Component<TypeProps> {
  pageInfo () {
    console.log(this.props.title);
  }
};

export {Page};