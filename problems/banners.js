
class Banner {
  constructor(message) {
    this.message = message;
    this.length = message.length;
  }

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  horizontalRule() {
    let dash = "-";
    return `+${dash.repeat(this.length + 2)}+`;
  }

  emptyLine() {
    let space = " ";
    return `| ${space.repeat(this.length)} |`;
  }

  messageLine() {
    return `| ${this.message} |`;
  }
}

let banner1 = new Banner('To boldly go where no one has gone before.');
banner1.displayBanner();
/*
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
*/

let banner2 = new Banner('');
banner2.displayBanner();
/*
+--+
|  |
|  |
|  |
+--+
*/