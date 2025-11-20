import {
  Scaffold,
  Column,
  Text,
  Center,
  MainAxisAlignment,
  CrossAxisAlignment,
} from "./widget/index.ts";

const scaffold = new Scaffold({
  backgroundColor: "white",
  body: new Column({
    mainAxisAlignment: MainAxisAlignment.center,
    crossAxisAlignment: CrossAxisAlignment.center,
    children: [
      new Center({
        child: new Text({ data: "Hello, World!" }),
      }),
    ],
  }),
});

console.log(JSON.stringify(scaffold.toJson(), null, 2));
