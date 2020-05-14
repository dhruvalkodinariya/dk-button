import { LitElement, html ,css} from 'lit-element';
import '../dk-button';
import {Theme} from '../theme';
export class DkButtonDemo extends LitElement {

  static get styles(){
    return[
      Theme,
      css`
      :host {
        display: block;
        padding: 14px;
      }

      section div{
        margin:12px 8px;
      }

      dk-button.custom {
        --mdc-theme-primary: #e9437a;
        --mdc-theme-on-primary: white;
      }
  ` ]
  }

  render() {
    return html`
    <section>
      <div>
        <dk-button label="Standard"></dk-button>
        <dk-button label="Standard" icon="code"></dk-button>
      </div>
      <div>
        <dk-button label="Outlined" outlined></dk-button>
        <dk-button label="Outlined" icon="code" outlined></dk-button>
      </div>
      <div>
        <dk-button label="Raised" raised></dk-button>
        <dk-button label="Raised" icon="code" raised></dk-button>
      </div>
      <div>
        <dk-button label="Unelevated" unelevated></dk-button>
        <dk-button label="Unelevated" icon="code" unelevated></dk-button>
      </div>
      <div>
        <dk-button label="dense" dense unelevated></dk-button>
        <dk-button label="dense" icon="code" dense unelevated></dk-button>
      </div>
      <div>
        <dk-button label="Trailing icon" outlined></dk-button>
        <dk-button label="Trailing icon" icon="code" outlined trailingIcon></dk-button>
      </div>
      <div>
        <dk-button disabled label="disabled"></dk-button>
        <dk-button disabled label="disabled" icon="code"></dk-button>
      </div>
      <div>
        <dk-button disabled label="disabled" outlined secondary></dk-button>
        <dk-button disabled label="disabled" icon="code" outlined></dk-button>
      </div>
      <div>
        <dk-button disabled label="disabled" raised></dk-button>
        <dk-button disabled label="disabled" icon="code" raised></dk-button>
      </div>
      <div>
        <dk-button label="Custom" class="custom" raised></dk-button>
        <dk-button label="Custom" icon="code" class="custom" raised></dk-button>
      </div>
      <div>
        <dk-button label="Raised" raised secondary></dk-button>
        <dk-button label="Raised" icon="code" raised secondary></dk-button>
      </div>
    </section>
    `;
  }
}
customElements.define('dk-button-demo', DkButtonDemo);