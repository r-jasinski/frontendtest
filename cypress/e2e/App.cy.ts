/// <reference types="cypress" />

describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('should have correct html', () => {
    cy.get('main').should(
      'have.html',
      `<section data-v-7a7a37b1=""><div data-v-7a7a37b1="" class="game"><div data-v-aefab004="" data-v-7a7a37b1="" class="player"><div data-v-aefab004="" class="tagline"><img data-v-aefab004="" src="images/black_400.png" alt="Player image"><div data-v-aefab004="" class="user-tagline"><span data-v-aefab004="">Guest2939666985</span><img data-v-aefab004="" src="images/flag.png " alt="Player flag"><ul data-v-aefab004=""><li data-v-aefab004=""></li><li data-v-aefab004=""></li><li data-v-aefab004=""></li><li data-v-aefab004=""></li></ul></div></div><div data-v-aefab004="" class="clock inactive"><svg data-v-aefab004="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><g fill="currentColor" clip-path="url(#a)"><path d="M11 5.48a.93.93 0 0 0-.71-.3h-.58a.94.94 0 0 0-.71.3 1 1 0 0 0-.3.71v4.58a1 1 0 0 0 .3.71.94.94 0 0 0 .71.29h.59a.92.92 0 0 0 .7-.29 1 1 0 0 0 .27-.71V6.19a1 1 0 0 0-.27-.71"></path><path d="M13.9 19.22a9.9 9.9 0 0 0 3.18-2.14 10.23 10.23 0 0 0 2.14-3.18c.525-1.233.79-2.56.78-3.9a9.86 9.86 0 0 0-.78-3.9A10 10 0 0 0 13.9.78 9.81 9.81 0 0 0 10 0a9.81 9.81 0 0 0-3.9.78A10 10 0 0 0 .78 6.1 9.86 9.86 0 0 0 0 10a9.76 9.76 0 0 0 .78 3.89 10.23 10.23 0 0 0 2.14 3.18 9.9 9.9 0 0 0 3.18 2.14A9.81 9.81 0 0 0 10 20a9.812 9.812 0 0 0 3.9-.78M7 17.07a7.65 7.65 0 0 1-2.42-1.65A7.81 7.81 0 0 1 2.94 13a7.46 7.46 0 0 1-.6-3 7.51 7.51 0 0 1 .6-3 7.74 7.74 0 0 1 1.65-2.43A8 8 0 0 1 7 2.94a7.46 7.46 0 0 1 3-.6 7.46 7.46 0 0 1 3 .6 8 8 0 0 1 2.41 1.64A7.74 7.74 0 0 1 17.06 7a7.51 7.51 0 0 1 .6 3 7.45 7.45 0 0 1-.6 3 7.74 7.74 0 0 1-1.65 2.43A7.651 7.651 0 0 1 13 17.07a7.46 7.46 0 0 1-3 .6 7.46 7.46 0 0 1-3-.6"></path></g><defs><clipPath id="a"><path fill="#fff" d="M20 0v20H0V0z"></path></clipPath></defs></svg><span data-v-aefab004="">5:00</span></div></div><div data-v-93a62ddb="" data-v-7a7a37b1="" class="board" tabindex="0"><span data-v-93a62ddb="" data-rank="8" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" data-rank="7" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" data-rank="6" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" data-rank="5" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" data-rank="4" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" data-rank="3" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" data-rank="2" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" tabindex="1"></span><span data-v-93a62ddb="" data-file="a" data-rank="1" tabindex="1"></span><span data-v-93a62ddb="" data-file="b" tabindex="1"></span><span data-v-93a62ddb="" data-file="c" tabindex="1"></span><span data-v-93a62ddb="" data-file="d" tabindex="1"></span><span data-v-93a62ddb="" data-file="e" tabindex="1"></span><span data-v-93a62ddb="" data-file="f" tabindex="1"></span><span data-v-93a62ddb="" data-file="g" tabindex="1"></span><span data-v-93a62ddb="" data-file="h" tabindex="1"></span><gearssvg data-v-93a62ddb=""></gearssvg></div><div data-v-aefab004="" data-v-7a7a37b1="" class="player"><div data-v-aefab004="" class="tagline"><img data-v-aefab004="" src="images/white_400.png" alt="Player image"><div data-v-aefab004="" class="user-tagline"><span data-v-aefab004="">Guest9241962816</span><img data-v-aefab004="" src="images/flag.png " alt="Player flag"><ul data-v-aefab004=""><li data-v-aefab004=""></li><li data-v-aefab004=""></li><li data-v-aefab004=""></li><li data-v-aefab004=""></li></ul></div></div><div data-v-aefab004="" class="clock"><svg data-v-aefab004="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><g fill="currentColor" clip-path="url(#a)"><path d="M11 5.48a.93.93 0 0 0-.71-.3h-.58a.94.94 0 0 0-.71.3 1 1 0 0 0-.3.71v4.58a1 1 0 0 0 .3.71.94.94 0 0 0 .71.29h.59a.92.92 0 0 0 .7-.29 1 1 0 0 0 .27-.71V6.19a1 1 0 0 0-.27-.71"></path><path d="M13.9 19.22a9.9 9.9 0 0 0 3.18-2.14 10.23 10.23 0 0 0 2.14-3.18c.525-1.233.79-2.56.78-3.9a9.86 9.86 0 0 0-.78-3.9A10 10 0 0 0 13.9.78 9.81 9.81 0 0 0 10 0a9.81 9.81 0 0 0-3.9.78A10 10 0 0 0 .78 6.1 9.86 9.86 0 0 0 0 10a9.76 9.76 0 0 0 .78 3.89 10.23 10.23 0 0 0 2.14 3.18 9.9 9.9 0 0 0 3.18 2.14A9.81 9.81 0 0 0 10 20a9.812 9.812 0 0 0 3.9-.78M7 17.07a7.65 7.65 0 0 1-2.42-1.65A7.81 7.81 0 0 1 2.94 13a7.46 7.46 0 0 1-.6-3 7.51 7.51 0 0 1 .6-3 7.74 7.74 0 0 1 1.65-2.43A8 8 0 0 1 7 2.94a7.46 7.46 0 0 1 3-.6 7.46 7.46 0 0 1 3 .6 8 8 0 0 1 2.41 1.64A7.74 7.74 0 0 1 17.06 7a7.51 7.51 0 0 1 .6 3 7.45 7.45 0 0 1-.6 3 7.74 7.74 0 0 1-1.65 2.43A7.651 7.651 0 0 1 13 17.07a7.46 7.46 0 0 1-3 .6 7.46 7.46 0 0 1-3-.6"></path></g><defs><clipPath id="a"><path fill="#fff" d="M20 0v20H0V0z"></path></clipPath></defs></svg><span data-v-aefab004="">4:58</span></div></div><span data-v-7a7a37b1="" class="settings"><svg data-v-7a7a37b1="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path fill="currentColor" d="M13.253 5.093c.018-.053.098-.16.24-.32.09-.124.24-.31.454-.56.089-.142.222-.32.4-.533.106-.16.16-.258.16-.293 0-.071-.09-.205-.267-.4l-.187-.187-.24-.24-.213-.213a15.64 15.64 0 0 0-.667-.64c-.213-.178-.329-.267-.346-.267-.071 0-.178.062-.32.187-.018 0-.09.049-.214.146a3.376 3.376 0 0 0-.293.254 4.222 4.222 0 0 0-.56.426 6.749 6.749 0 0 1-.347.267 6.137 6.137 0 0 0-.56-.293 2.416 2.416 0 0 0-.266-.094 3.568 3.568 0 0 0-.347-.093 14.22 14.22 0 0 1-.133-1.067A8.632 8.632 0 0 0 9.387.16C9.333.053 9.27 0 9.2 0H6.827c-.09 0-.16.107-.214.32-.07.178-.124.4-.16.667-.035.195-.07.453-.106.773 0 .089-.005.187-.014.293a4.015 4.015 0 0 0-.013.187c-.053.018-.151.049-.293.093a2.288 2.288 0 0 0-.32.12c-.143.036-.338.125-.587.267a5.47 5.47 0 0 0-.347-.24 6.2 6.2 0 0 0-.56-.453 10.052 10.052 0 0 1-.533-.4l-.267-.187c-.035 0-.169.089-.4.267a4.71 4.71 0 0 0-.666.64l-.64.64c-.178.195-.267.329-.267.4l.053.133c.427.48.827 1.004 1.2 1.573a9.133 9.133 0 0 0-.48 1.174 1.618 1.618 0 0 1-.48.053c-.32.036-.569.071-.746.107a3.162 3.162 0 0 0-.667.133c-.213.071-.32.151-.32.24v2.347c0 .089.053.15.16.186.356.125.693.196 1.013.214.231 0 .578.035 1.04.106.143.498.311.916.507 1.254 0 .017-.013.04-.04.066a1.918 1.918 0 0 0-.227.28 3.232 3.232 0 0 1-.2.254 6.44 6.44 0 0 0-.226.28 3.304 3.304 0 0 1-.214.306 1.97 1.97 0 0 0-.16.227l-.16.267c0 .035.098.169.294.4.035.035.124.129.266.28.143.15.258.27.347.36.213.23.427.444.64.64.196.177.32.266.373.266l.107-.026.8-.64.8-.587a4.71 4.71 0 0 0 1.2.48c.036.267.071.613.107 1.04.07.462.133.809.186 1.04.054.107.125.16.214.16H9.2c.053 0 .124-.107.213-.32.018-.053.063-.284.134-.693l.08-.747a1.526 1.526 0 0 1 .04-.32.439.439 0 0 0 .013-.107v-.08a4.2 4.2 0 0 0 .613-.186c.25-.107.445-.196.587-.267.018 0 .124.08.32.24.249.178.436.32.56.427.071.035.164.102.28.2.116.097.209.164.28.2.142.124.231.186.267.186.07 0 .204-.089.4-.266.142-.125.364-.338.666-.64l.64-.64c.178-.196.267-.33.267-.4l-.053-.134a20.705 20.705 0 0 1-1.227-1.573c.231-.427.382-.818.453-1.173.036 0 .08-.005.134-.014a3.81 3.81 0 0 1 .2-.026c.08-.01.146-.014.2-.014l.746-.08c.303-.053.534-.106.694-.16.195-.089.293-.16.293-.213V6.827c0-.107-.053-.17-.16-.187a4.92 4.92 0 0 0-1.013-.187 14.219 14.219 0 0 1-1.067-.133 4.591 4.591 0 0 0-.507-1.227m-4.32 5.12A2.185 2.185 0 0 1 8 10.4c-.356 0-.667-.062-.933-.187a3.328 3.328 0 0 1-.774-.533 3.329 3.329 0 0 1-.533-.773 2.718 2.718 0 0 1-.187-.934c0-.266.063-.569.187-.906.142-.303.32-.56.533-.774.196-.195.454-.364.774-.506.266-.125.577-.187.933-.187.356 0 .667.062.933.187.32.142.578.31.774.506a3.4 3.4 0 0 1 .506.774c.125.266.187.569.187.906 0 .356-.062.667-.187.934a3.4 3.4 0 0 1-.506.773 2.152 2.152 0 0 1-.774.533"></path></svg></span></div></section><section data-v-7a7a37b1=""><div data-v-6dec5f19="" data-v-7a7a37b1="" class="sidebar"><div data-v-6dec5f19="" class="tabs"><span data-v-6dec5f19=""><svg data-v-6dec5f19="" xmlns="http://www.w3.org/2000/svg" width="18" height="21" fill="none"><path fill="currentColor" d="M10.264 3.18c2.188.3 4.024 1.29 5.509 2.97C17.258 7.83 18 9.79 18 12.03c0 2.48-.878 4.595-2.634 6.345C13.61 20.125 11.488 21 9 21c-2.488 0-4.61-.875-6.366-2.625C.878 16.625 0 14.51 0 12.03c0-2.24.742-4.2 2.227-5.88C3.712 4.47 5.55 3.48 7.736 3.18v-.81H6.26V0h5.478v2.37h-1.475zM4.741 16.29C5.915 17.47 7.334 18.06 9 18.06c1.666 0 3.09-.59 4.274-1.77 1.184-1.18 1.776-2.6 1.776-4.26 0-1.66-.592-3.075-1.776-4.245C12.09 6.615 10.666 6.03 9 6.03s-3.085.585-4.26 1.755c-1.173 1.17-1.76 2.585-1.76 4.245 0 1.66.587 3.08 1.76 4.26m3.476-8.28h1.596l.782 4.89L9 14.43 7.405 12.9z"></path></svg> Play </span><span data-v-6dec5f19=""><svg data-v-6dec5f19="" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path fill="currentColor" d="M14.596 0c.666 0 1.246.242 1.74.725s.74 1.069.74 1.756v12.115c0 .666-.246 1.246-.74 1.74s-1.074.74-1.74.74H2.48c-.666 0-1.246-.24-1.74-.724A2.366 2.366 0 0 1 0 14.596V2.48c0-.666.247-1.246.741-1.74S1.815 0 2.481 0zm-1.063 9.505V7.572a.349.349 0 0 0-.097-.258.309.309 0 0 0-.226-.097H9.86v-3.35a.31.31 0 0 0-.097-.226.348.348 0 0 0-.258-.097H7.572a.348.348 0 0 0-.258.097.31.31 0 0 0-.097.225v3.351h-3.35a.31.31 0 0 0-.226.097.348.348 0 0 0-.097.258v1.933c0 .107.032.193.097.258a.31.31 0 0 0 .225.097h3.351v3.35c0 .086.033.162.097.226.065.064.15.097.258.097h1.933a.349.349 0 0 0 .258-.097.309.309 0 0 0 .097-.226V9.86h3.35a.309.309 0 0 0 .226-.097.349.349 0 0 0 .097-.258" opacity=".7"></path></svg> New Game </span><span data-v-6dec5f19=""><svg data-v-6dec5f19="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill="currentColor" d="M19.29 19.29H0V0h19.29zm-.803-5.24V9.645h-4.405V5.208h4.405V.804h-4.405v4.404H9.645V.804H5.241v4.404H.804v4.437H5.24v4.405H.804v4.437H5.24V14.05h4.404v4.437h4.437V14.05zM5.24 9.645h4.404V5.208H5.241zm4.404 4.405h4.437V9.645H9.645z" opacity=".7"></path></svg> Games </span><span data-v-6dec5f19=""><svg data-v-6dec5f19="" xmlns="http://www.w3.org/2000/svg" width="20" height="19" fill="none"><g fill="currentColor" opacity=".7"><path d="M20 15.062c0-3.167-.476-4.92-1.426-5.261l-3.37-1.413c-.505-.26-.829-.562-.97-.902.485-.521.809-1.083.97-1.684l.213-.12c.263-.702.375-1.383.334-2.044l-.152-.12c.061-.963-.02-1.654-.242-2.075-.243-.4-.612-.737-1.108-1.007-.496-.27-.976-.416-1.442-.436h-.364c-.465.02-.946.165-1.441.436-.496.27-.855.606-1.078 1.007-.243.4-.334 1.082-.273 2.044.546.381.93.772 1.153 1.173.243.48.364 1.172.364 2.074l.091.09.03.361a5.702 5.702 0 0 1-.394 2.375l-.09.27-.183.121c-.142.38-.344.762-.607 1.142.081.06.162.11.243.15l3.369 1.414c.809.3 1.365 1.212 1.669 2.735H20z"></path><path d="M14.75 18.67c0-3.167-.476-4.921-1.427-5.262l-3.399-1.413c-.485-.26-.8-.56-.94-.902.485-.52.809-1.082.97-1.683l.183-.12c.283-.722.394-1.403.333-2.045l-.151-.12c.1-.922.02-1.613-.243-2.074-.223-.401-.582-.737-1.078-1.007-.495-.271-.976-.416-1.441-.436h-.364c-.486.02-.977.165-1.472.436-.496.27-.855.606-1.078 1.007-.222.38-.303 1.072-.242 2.074l-.152.12c-.04.662.07 1.343.334 2.045l.212.12c.162.601.486 1.162.971 1.683-.182.381-.505.682-.97.902l-3.37 1.413C.476 13.748 0 15.503 0 18.67V19h14.75z"></path></g></svg> Players </span></div><div data-v-6dec5f19="" class="opening"> Center Game: Beyer Gambit <span data-v-6dec5f19=""><svg data-v-6dec5f19="" xmlns="http://www.w3.org/2000/svg" width="17" height="15" fill="none"><path fill="currentColor" d="M12.067 15H2.674c-.475-.017-.984-.183-1.527-.5-.475-.383-.806-.808-.993-1.275-.187-.467-.204-.892-.05-1.275L4.251 1c.374-.667 1.027-1 1.96-1h7.739c.526 0 .925.183 1.196.55.289.333.348.75.178 1.25L12.5 10.675c-.119.4-.382.75-.79 1.05-.39.283-.797.425-1.221.425H1.376c-.22.133-.28.35-.178.65.118.283.322.542.61.775.306.2.595.3.866.3h9.393a.8.8 0 0 0 .586-.225c.186-.15.314-.3.381-.45l3.08-9.625.052-.325a.672.672 0 0 0-.026-.15v-.125c.238.117.441.258.611.425.255.333.314.758.178 1.275l-2.8 8.85c-.119.417-.373.767-.764 1.05a2.16 2.16 0 0 1-1.298.425M4.89 8.475c0 .1.017.192.05.275.085.083.28.183.586.3.356.1.798.15 1.324.15.628-.067 1.069-.133 1.323-.2.017.017.102.008.255-.025.153-.05.314-.125.484-.225.17-.117.288-.242.356-.375.051-.167-.05-.3-.305-.4.22-.183.33-.308.33-.375l.077-.2c0-.15-.144-.275-.433-.375-.288-.083-.433-.175-.433-.275 0-.3.085-.675.255-1.125l.102-.4c.05-.15.085-.258.102-.325a.434.434 0 0 0 .05-.125c.493-.067.781-.183.866-.35.034-.067.017-.117-.05-.15-.052-.05-.154-.083-.306-.1l-.077-.05c.306-.25.51-.517.611-.8.119-.467.026-.775-.28-.925-.05-.067-.127-.092-.229-.075-.102 0-.263.025-.484.075-.424.183-.73.475-.916.875-.187.4-.178.692.025.875a.396.396 0 0 0-.152.05c-.34.05-.535.15-.586.3-.05.067-.025.125.077.175.017 0 .05.008.101.025.051 0 .11.008.179.025.084.017.16.033.229.05-.475 1.083-.823 1.758-1.044 2.025-.119.083-.365.192-.738.325-.458.15-.696.317-.713.5-.068.15-.025.283.127.4-.39.067-.644.217-.763.45" opacity=".7"></path></svg><svg data-v-6dec5f19="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path fill="currentColor" d="M2.347 2.347C3.91.782 5.796 0 8 0c2.204 0 4.089.782 5.653 2.347C15.218 3.91 16 5.796 16 8c0 2.204-.782 4.089-2.347 5.653C12.09 15.218 10.204 16 8 16c-2.204 0-4.089-.782-5.653-2.347C.782 12.09 0 10.204 0 8c0-2.204.782-4.089 2.347-5.653m1.186 10.12C4.77 13.702 6.258 14.32 8 14.32c1.742 0 3.231-.618 4.467-1.853C13.702 11.23 14.32 9.742 14.32 8c0-1.742-.618-3.231-1.853-4.467C11.23 2.298 9.742 1.68 8 1.68c-1.742 0-3.231.618-4.467 1.853C2.298 4.77 1.68 6.258 1.68 8c0 1.742.618 3.231 1.853 4.467m8.014-8.014-2.134 4.96-4.96 2.134 2.134-4.96zM5.28 10.72l3.573-1.547-2.026-2.026z" opacity=".7"></path></svg></span></div><div data-v-6dec5f19="" class="move-list"><ol data-v-6dec5f19=""><li data-v-6dec5f19=""></li></ol></div><div data-v-6dec5f19="" class="game-buttons"><span data-v-6dec5f19=""><svg data-v-6dec5f19="" xmlns="http://www.w3.org/2000/svg" width="18" height="14" fill="none"><path fill="currentColor" d="M2.095 3.619V8.32h2.664V0H2.664c-.035.652-.31 1.123-.828 1.413-.517.29-1.13.436-1.836.436v1.77zM10.112 0 3 14h3l7.138-14zm.155 14H18v-2.087h-4.034c0-.088.206-.224.62-.41.414-.184.862-.391 1.345-.62.483-.229.931-.585 1.345-1.07.414-.484.62-1.043.62-1.677 0-1.761-1.224-2.642-3.672-2.642-1.241 0-2.18.317-2.819.951-.69.617-1.008 1.515-.957 2.695h2.405c-.017-.493.087-.907.31-1.242.225-.334.578-.502 1.061-.502a.97.97 0 0 1 .724.29c.19.194.285.45.285.767 0 .176-.074.348-.22.515-.147.167-.28.29-.4.37-.122.079-.303.18-.544.304-.086.052-.336.198-.75.435-.414.238-.685.401-.815.489-.129.088-.357.251-.685.489-.328.238-.556.44-.685.607-.13.168-.285.379-.466.634a2.013 2.013 0 0 0-.349.806c-.052.282-.069.581-.052.898" opacity=".7"></path></svg>Draw<svg data-v-6dec5f19="" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none"><path fill="currentColor" d="M14.325 4.747 15 7.273a4.376 4.376 0 0 1-2.125 1.262c-.533.135-1.233.202-2.1.202-.15 0-.363-.008-.638-.025-.274-.017-.524-.03-.75-.038a17.09 17.09 0 0 0-.637-.012c-.867 0-1.567.067-2.1.202A4.21 4.21 0 0 0 4.525 10.1a.896.896 0 0 0-.038-.19 4.327 4.327 0 0 0-.062-.214 644.42 644.42 0 0 1-.575-2.121c-.05-.152-.138-.484-.263-.998-.125-.513-.229-.913-.312-1.2 0-.016-.087-.349-.262-.997-.175-.648-.313-1.166-.413-1.553.567-.606 1.275-1.018 2.125-1.237.533-.135 1.225-.202 2.075-.202.233 0 .58.008 1.038.025.458.017.795.025 1.012.025.817.034 1.517-.033 2.1-.202.85-.218 1.558-.63 2.125-1.237l.675 2.525c.067.253.162.623.287 1.111.125.489.221.859.288 1.111M1.375 3.131 4.3 14.116a.662.662 0 0 1-.075.53.694.694 0 0 1-.425.329.644.644 0 0 1-.525-.076.699.699 0 0 1-.325-.43L.025 3.486a.662.662 0 0 1 .075-.53.694.694 0 0 1 .425-.329.644.644 0 0 1 .525.076.699.699 0 0 1 .325.43" opacity=".7"></path></svg>Resign</span><span data-v-6dec5f19=""><svg data-v-6dec5f19="" xmlns="http://www.w3.org/2000/svg" width="17" height="18" fill="none"><path fill="currentColor" d="M2.754.03c.336 0 .603.1.8.299.197.2.296.458.296.777v15.758c0 .339-.099.608-.296.807-.197.2-.464.3-.8.3L1.125 18c-.315 0-.582-.11-.8-.329A1.103 1.103 0 0 1 0 16.864V1.136C0 .817.109.548.326.33.543.109.81 0 1.126 0zm8.027 9 5.893 5.83c.217.26.326.519.326.778s-.109.518-.326.777l-1.155 1.196c-.257.22-.523.33-.8.33-.276 0-.542-.11-.8-.33L6.19 9.748a1.026 1.026 0 0 1-.355-.778c0-.279.119-.538.356-.777L13.92.329c.257-.22.523-.329.8-.329.276 0 .542.11.8.329l1.154 1.166c.217.26.326.528.326.807 0 .3-.109.558-.326.778z" opacity=".7"></path></svg><svg data-v-6dec5f19="" xmlns="http://www.w3.org/2000/svg" width="11" height="18" fill="none"><path fill="currentColor" d="m.322 9.78 7.665 7.89c.214.22.468.33.76.33.273 0 .537-.11.79-.33l1.141-1.2c.215-.26.322-.52.322-.78s-.107-.52-.322-.78L4.886 9.06l5.792-5.97c.215-.22.322-.48.322-.78 0-.28-.107-.55-.322-.81L9.538.33C9.283.11 9.02 0 8.747 0c-.293 0-.547.11-.761.33L.322 8.22C.107 8.48 0 8.74 0 9c0 .3.107.56.322.78" opacity=".7"></path></svg><svg data-v-6dec5f19="" xmlns="http://www.w3.org/2000/svg" width="11" height="19" fill="none"><path fill="currentColor" d="m10.678 10.323-7.665 8.329a1.003 1.003 0 0 1-.76.348c-.273 0-.537-.116-.79-.348L.322 17.385C.107 17.111 0 16.836 0 16.562c0-.275.107-.55.322-.824l5.792-6.175L.322 3.262A1.173 1.173 0 0 1 0 2.438c0-.295.107-.58.322-.855L1.462.348C1.717.116 1.98 0 2.253 0c.293 0 .547.116.761.348l7.665 8.329c.215.274.322.549.322.823 0 .317-.107.591-.322.823" opacity=".7"></path></svg><svg data-v-6dec5f19="" xmlns="http://www.w3.org/2000/svg" width="18" height="19" fill="none"><path fill="currentColor" d="m3.261.347 8.185 8.3c.25.253.376.527.376.821 0 .337-.125.61-.376.821l-8.185 8.3c-.271.232-.554.348-.846.348-.293 0-.575-.116-.847-.347L.345 17.327c-.23-.273-.345-.547-.345-.82 0-.274.115-.547.345-.821l6.24-6.154L.345 3.25A1.126 1.126 0 0 1 0 2.43c0-.295.115-.58.345-.853L1.568.348C1.84.115 2.122 0 2.415 0c.292 0 .575.116.846.347M16.808 0c.335 0 .617.116.847.347.23.232.345.516.345.852v16.602c0 .336-.115.62-.345.852-.23.231-.512.347-.847.347l-1.724-.032c-.356 0-.638-.105-.847-.315-.21-.21-.314-.495-.314-.852V1.168c0-.337.105-.61.314-.82.209-.211.491-.316.847-.316z" opacity=".7"></path></svg><svg data-v-6dec5f19="" xmlns="http://www.w3.org/2000/svg" width="22" height="19" fill="none"><path fill="currentColor" d="M9.315 14.744c.049.05.098.127.147.228a.951.951 0 0 0 .22.228l2.856 3.344H4.59c-.244 0-.464-.101-.66-.304a.896.896 0 0 1-.256-.646V6.65H.817c-.415 0-.671-.127-.769-.38-.122-.228-.012-.52.33-.874L4.773.342C4.993.114 5.237 0 5.506 0c.293 0 .537.114.732.342l4.396 5.054c.342.355.451.646.33.874-.074.253-.33.38-.77.38H7.337v8.094zm11.868-2.394c.415 0 .671.127.769.38.122.228.012.52-.33.874l-4.395 5.054a.925.925 0 0 1-.733.342.925.925 0 0 1-.732-.342l-4.396-5.054c-.342-.355-.451-.646-.33-.874.074-.253.33-.38.77-.38h2.857V4.294h-1.978a.887.887 0 0 1-.147-.228 2.665 2.665 0 0 0-.183-.266L9.462.494h7.948c.268 0 .488.089.66.266.17.228.256.456.256.684V12.35z" opacity=".7"></path></svg></span></div><div data-v-6dec5f19="" class="chat"><span data-v-6dec5f19="">NEW GAME</span><span data-v-6dec5f19="">Guest2939666985 vs Guest9241962816 (5 min Unrated)</span></div><div data-v-6dec5f19="" class="chat-login"> Please <a data-v-6dec5f19="" href="#">Sign Up</a> to use the chat. </div></div></section>`
    )
  })

  it('should click file a / rank 1 and show a1 at move list', () => {
    cy.get('[data-file="a"][data-rank="1"]').click()
    cy.get('.move-list ol li span').should('have.text', 'a1')
  })

  it('should click file a / rank 1, receive focus and show f6 at move list', () => {
    cy.get('.board span').eq(21).click().should('have.focus')
    cy.get('.move-list ol li span').should('have.text', 'f6')
  })

  it('should highlight last move', () => {
    cy.get('.board span').eq(21).click()
    cy.get('.board span').eq(1).click()
    cy.get('.board span').eq(13).click()
    cy.get('.move-list ol li span')
      .eq(0)
      .as('lastMove')
      .should('have.css', 'content')
      .and('include', '')
    cy.get('@lastMove')
      .should('have.css', 'border-bottom')
      .and('include', 'rgba(255, 255, 255, 0.7)')
  })
})
