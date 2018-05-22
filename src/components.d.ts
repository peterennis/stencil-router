/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import '@stencil/state-tunnel';

import {
  HistoryType,
  LocationSegments,
  MatchResults,
  RouterHistory,
  RouteSubscription,
} from './global/interfaces';

declare global {

  namespace StencilComponents {
    interface TestApp {

    }
  }

  interface HTMLTestAppElement extends StencilComponents.TestApp, HTMLStencilElement {}

  var HTMLTestAppElement: {
    prototype: HTMLTestAppElement;
    new (): HTMLTestAppElement;
  };
  interface HTMLElementTagNameMap {
    'test-app': HTMLTestAppElement;
  }
  interface ElementTagNameMap {
    'test-app': HTMLTestAppElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'test-app': JSXElements.TestAppAttributes;
    }
  }
  namespace JSXElements {
    export interface TestAppAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface TestDemoFour {
      'history': RouterHistory;
      'match': MatchResults;
      'pages': string[];
    }
  }

  interface HTMLTestDemoFourElement extends StencilComponents.TestDemoFour, HTMLStencilElement {}

  var HTMLTestDemoFourElement: {
    prototype: HTMLTestDemoFourElement;
    new (): HTMLTestDemoFourElement;
  };
  interface HTMLElementTagNameMap {
    'test-demo-four': HTMLTestDemoFourElement;
  }
  interface ElementTagNameMap {
    'test-demo-four': HTMLTestDemoFourElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'test-demo-four': JSXElements.TestDemoFourAttributes;
    }
  }
  namespace JSXElements {
    export interface TestDemoFourAttributes extends HTMLAttributes {
      'history'?: RouterHistory;
      'match'?: MatchResults;
      'pages'?: string[];
    }
  }
}


declare global {

  namespace StencilComponents {
    interface TestDemoSeven {
      'history': RouterHistory;
      'match': MatchResults;
      'pages': string[];
    }
  }

  interface HTMLTestDemoSevenElement extends StencilComponents.TestDemoSeven, HTMLStencilElement {}

  var HTMLTestDemoSevenElement: {
    prototype: HTMLTestDemoSevenElement;
    new (): HTMLTestDemoSevenElement;
  };
  interface HTMLElementTagNameMap {
    'test-demo-seven': HTMLTestDemoSevenElement;
  }
  interface ElementTagNameMap {
    'test-demo-seven': HTMLTestDemoSevenElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'test-demo-seven': JSXElements.TestDemoSevenAttributes;
    }
  }
  namespace JSXElements {
    export interface TestDemoSevenAttributes extends HTMLAttributes {
      'history'?: RouterHistory;
      'match'?: MatchResults;
      'pages'?: string[];
    }
  }
}


declare global {

  namespace StencilComponents {
    interface TestDemoSix {
      'history': RouterHistory;
      'match': MatchResults;
      'pages': string[];
    }
  }

  interface HTMLTestDemoSixElement extends StencilComponents.TestDemoSix, HTMLStencilElement {}

  var HTMLTestDemoSixElement: {
    prototype: HTMLTestDemoSixElement;
    new (): HTMLTestDemoSixElement;
  };
  interface HTMLElementTagNameMap {
    'test-demo-six': HTMLTestDemoSixElement;
  }
  interface ElementTagNameMap {
    'test-demo-six': HTMLTestDemoSixElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'test-demo-six': JSXElements.TestDemoSixAttributes;
    }
  }
  namespace JSXElements {
    export interface TestDemoSixAttributes extends HTMLAttributes {
      'history'?: RouterHistory;
      'match'?: MatchResults;
      'pages'?: string[];
    }
  }
}


declare global {

  namespace StencilComponents {
    interface TestDemoThree {
      'history': RouterHistory;
      'match': MatchResults;
      'pages': string[];
    }
  }

  interface HTMLTestDemoThreeElement extends StencilComponents.TestDemoThree, HTMLStencilElement {}

  var HTMLTestDemoThreeElement: {
    prototype: HTMLTestDemoThreeElement;
    new (): HTMLTestDemoThreeElement;
  };
  interface HTMLElementTagNameMap {
    'test-demo-three': HTMLTestDemoThreeElement;
  }
  interface ElementTagNameMap {
    'test-demo-three': HTMLTestDemoThreeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'test-demo-three': JSXElements.TestDemoThreeAttributes;
    }
  }
  namespace JSXElements {
    export interface TestDemoThreeAttributes extends HTMLAttributes {
      'history'?: RouterHistory;
      'match'?: MatchResults;
      'pages'?: string[];
    }
  }
}


declare global {

  namespace StencilComponents {
    interface StencilAsyncContent {
      'documentLocation': string;
    }
  }

  interface HTMLStencilAsyncContentElement extends StencilComponents.StencilAsyncContent, HTMLStencilElement {}

  var HTMLStencilAsyncContentElement: {
    prototype: HTMLStencilAsyncContentElement;
    new (): HTMLStencilAsyncContentElement;
  };
  interface HTMLElementTagNameMap {
    'stencil-async-content': HTMLStencilAsyncContentElement;
  }
  interface ElementTagNameMap {
    'stencil-async-content': HTMLStencilAsyncContentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'stencil-async-content': JSXElements.StencilAsyncContentAttributes;
    }
  }
  namespace JSXElements {
    export interface StencilAsyncContentAttributes extends HTMLAttributes {
      'documentLocation'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface StencilRouterRedirect {
      'history': RouterHistory;
      'root': string;
      'url': string;
    }
  }

  interface HTMLStencilRouterRedirectElement extends StencilComponents.StencilRouterRedirect, HTMLStencilElement {}

  var HTMLStencilRouterRedirectElement: {
    prototype: HTMLStencilRouterRedirectElement;
    new (): HTMLStencilRouterRedirectElement;
  };
  interface HTMLElementTagNameMap {
    'stencil-router-redirect': HTMLStencilRouterRedirectElement;
  }
  interface ElementTagNameMap {
    'stencil-router-redirect': HTMLStencilRouterRedirectElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'stencil-router-redirect': JSXElements.StencilRouterRedirectAttributes;
    }
  }
  namespace JSXElements {
    export interface StencilRouterRedirectAttributes extends HTMLAttributes {
      'history'?: RouterHistory;
      'root'?: string;
      'url'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface StencilRouteLink {
      'activeClass': string;
      'anchorClass': string;
      'anchorRole': string;
      'anchorTabIndex': string;
      'anchorTitle': string;
      /**
       * Custom tag to use instead of an anchor
       */
      'custom': string;
      'exact': boolean;
      'history': RouterHistory;
      'location': LocationSegments;
      'root': string;
      'strict': boolean;
      'url': string;
      'urlMatch': string | string[];
    }
  }

  interface HTMLStencilRouteLinkElement extends StencilComponents.StencilRouteLink, HTMLStencilElement {}

  var HTMLStencilRouteLinkElement: {
    prototype: HTMLStencilRouteLinkElement;
    new (): HTMLStencilRouteLinkElement;
  };
  interface HTMLElementTagNameMap {
    'stencil-route-link': HTMLStencilRouteLinkElement;
  }
  interface ElementTagNameMap {
    'stencil-route-link': HTMLStencilRouteLinkElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'stencil-route-link': JSXElements.StencilRouteLinkAttributes;
    }
  }
  namespace JSXElements {
    export interface StencilRouteLinkAttributes extends HTMLAttributes {
      'activeClass'?: string;
      'anchorClass'?: string;
      'anchorRole'?: string;
      'anchorTabIndex'?: string;
      'anchorTitle'?: string;
      /**
       * Custom tag to use instead of an anchor
       */
      'custom'?: string;
      'exact'?: boolean;
      'history'?: RouterHistory;
      'location'?: LocationSegments;
      'root'?: string;
      'strict'?: boolean;
      'url'?: string;
      'urlMatch'?: string | string[];
    }
  }
}


declare global {

  namespace StencilComponents {
    interface StencilRouteTitle {
      'title': string;
      'titleSuffix': string;
    }
  }

  interface HTMLStencilRouteTitleElement extends StencilComponents.StencilRouteTitle, HTMLStencilElement {}

  var HTMLStencilRouteTitleElement: {
    prototype: HTMLStencilRouteTitleElement;
    new (): HTMLStencilRouteTitleElement;
  };
  interface HTMLElementTagNameMap {
    'stencil-route-title': HTMLStencilRouteTitleElement;
  }
  interface ElementTagNameMap {
    'stencil-route-title': HTMLStencilRouteTitleElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'stencil-route-title': JSXElements.StencilRouteTitleAttributes;
    }
  }
  namespace JSXElements {
    export interface StencilRouteTitleAttributes extends HTMLAttributes {
      'title'?: string;
      'titleSuffix'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface StencilRoute {
      'component': string;
      'componentProps': { [key: string]: any };
      'exact': boolean;
      'group': string;
      'groupIndex': number;
      'history': RouterHistory;
      'location': LocationSegments;
      'routeRender': Function;
      'scrollTopOffset': number;
      'subscribeGroupMember': (routeSubscription: RouteSubscription) => () => void;
      'url': string | string[];
    }
  }

  interface HTMLStencilRouteElement extends StencilComponents.StencilRoute, HTMLStencilElement {}

  var HTMLStencilRouteElement: {
    prototype: HTMLStencilRouteElement;
    new (): HTMLStencilRouteElement;
  };
  interface HTMLElementTagNameMap {
    'stencil-route': HTMLStencilRouteElement;
  }
  interface ElementTagNameMap {
    'stencil-route': HTMLStencilRouteElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'stencil-route': JSXElements.StencilRouteAttributes;
    }
  }
  namespace JSXElements {
    export interface StencilRouteAttributes extends HTMLAttributes {
      'component'?: string;
      'componentProps'?: { [key: string]: any };
      'exact'?: boolean;
      'group'?: string;
      'groupIndex'?: number;
      'history'?: RouterHistory;
      'location'?: LocationSegments;
      'routeRender'?: Function;
      'scrollTopOffset'?: number;
      'subscribeGroupMember'?: (routeSubscription: RouteSubscription) => () => void;
      'url'?: string | string[];
    }
  }
}


declare global {

  namespace StencilComponents {
    interface StencilRouter {
      'historyType': HistoryType;
      'root': string;
      'titleSuffix': string;
    }
  }

  interface HTMLStencilRouterElement extends StencilComponents.StencilRouter, HTMLStencilElement {}

  var HTMLStencilRouterElement: {
    prototype: HTMLStencilRouterElement;
    new (): HTMLStencilRouterElement;
  };
  interface HTMLElementTagNameMap {
    'stencil-router': HTMLStencilRouterElement;
  }
  interface ElementTagNameMap {
    'stencil-router': HTMLStencilRouterElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'stencil-router': JSXElements.StencilRouterAttributes;
    }
  }
  namespace JSXElements {
    export interface StencilRouterAttributes extends HTMLAttributes {
      'historyType'?: HistoryType;
      'root'?: string;
      'titleSuffix'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;