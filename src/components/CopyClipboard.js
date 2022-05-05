import { Component } from "react"
import Button from 'react-bootstrap/Button';

let REDIRECT = process.env.REACT_APP_AUTH_REDIRECT_URI;

class CopyClipboard extends Component {
  copyCodeToClipboard = () => {
    const el = this.textArea
    el.select()
    document.execCommand("copy")
  }

  render() {
    return (
      <div>
        <div>
          <textarea
            ref={(textarea) => this.textArea = textarea}
            defaultValue={`${REDIRECT}/dei-survey`}
          />
        </div>
        <div>
          <Button onClick={() => this.copyCodeToClipboard()}>
            Copy to Clipboard
          </Button>
          {/* change text value (ln 17) to a process.env variable with link then /dei-survey/id... */}
        </div>
      </div>
    )
  }
}

export default CopyClipboard;
