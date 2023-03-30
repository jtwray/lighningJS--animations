/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2020 Metrological
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Lightning, Utils } from '@lightningjs/sdk'

export default class App extends Lightning.Component {
  static getFonts() {
    return [{ family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') }]
  }

  static _template() {
    return {
      Background: {
        w: 1920,
        h: 1080,
        color: 0xfffbb03b,
        src: Utils.asset('images/background.png'),
      },
      Logo: {
        mountX: 0.5,
        mountY: 1,
        x: 960,
        y: 600,
        src: Utils.asset('images/logo.png'),
      },
      Text: {
        mount: 0.5,
        x: 960,
        y: 720,
        text: {
          text: "Let's start Building!",
          fontFace: 'Regular',
          fontSize: 64,
          textColor: 0xbbffffff,
        },
      },
    }
  }

  _init() {
    this.tag('Background')
      .animation({
        duration: 5,
        repeat: -1,
        actions: [
          {
            t: '', //tag
            p: 'color', //property
            v: {
              0: { v: 0xffff0000 },
              0.33: { v: 0xff00ff00 },
              0.66: { v: 0xff0000ff },
              0.99: { v: 0xffff0000 },
            },
          },
        ],
      })
      .start()
    this.tag('Text')
      .animation({
        duration: 5,
        repeat: -1,
        actions: [
          {
            t: '', //tag
            p: 'y', //property
            v: { 0: { v: 720 }, 0.5: { v: 1000 }, 0.99: { v: 720 } },
          },
          {
            p: 'text.text',
            v: {
              0: "Let's start Learning",
              0.5: "Let's start Building!",
              0.99: "Let's start Lightning!",
            },
          },
        ],
      })
      .start()
  }
}
