import { LitElement, html ,css} from 'lit-element';
import { Button } from '@material/mwc-button';
import './mwc-icon-css';
export class DkButton extends Button {

  static get styles(){
    return[
      Button.styles,
      css`
      
      :host([hidden]) {
          display: none;
      }
      
      :host([secondary]){
        --mdc-theme-primary: var(--mdc-theme-secondary);
        --mdc-theme-on-primary: var(--mdc-theme-on-secondary);
      }
        /**
        Customizations : add a way to change colors with theme
         */

        .mdc-button--raised:disabled,.mdc-button--unelevated:disabled{
          background-color:var(--mdc-theme-divider,rgba(0,0,0,.12));
        }
        .mdc-button--raised:disabled,.mdc-button--unelevated:disabled{
          color:var(--mdc-theme-text-disabled,rgba(0,0,0,.38));
        }
        
        .mdc-button--outlined:disabled{
          border-color:var(--mdc-theme-divider,rgba(0,0,0,.12));
        }

        .mdc-button--raised{
          box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px var(--mdc-theme-divider))
        }
        .mdc-button--raised:hover,.mdc-button--raised:focus{
          box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px var(--mdc-theme-divider))
        }
        .mdc-button--raised:active{
          box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px var(--mdc-theme-divider))
        }
        .mdc-button--raised:disabled{
          box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px var(--mdc-theme-divider))
        }

        :host([disabled]) .mdc-button.mdc-button--unelevated{
          background-color:var(--mdc-theme-divider, rgba(0, 0, 0, 0.12));
          color:var(--mdc-theme-text-disabled, rgba(0, 0, 0, 0.38))
        }

        :host([disabled]) .mdc-button.mdc-button--raised{
          background-color:var(--mdc-theme-divider, rgba(0, 0, 0, 0.12));
          color:var(--mdc-theme-text-disabled, rgba(0, 0, 0, 0.38))
        }

        :host([disabled]) .mdc-button:not(.mdc-button--raised):not(.mdc-button--unelevated){
          color:var(--mdc-theme-text-disabled, rgba(0, 0, 0, 0.38))
        }
        :host([disabled]) .mdc-button.mdc-button--outlined{
          border-color:var(--mdc-theme-text-disabled, rgba(0, 0, 0, 0.38));
          border-color:var(--mdc-theme-text-disabled, rgba(0, 0, 0, 0.38))
        }
  ` ]
  }

  static get properties() {
    return {
      secondary: { type: Boolean },
    };
  }
}
customElements.define('dk-button', DkButton);