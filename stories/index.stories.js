import {storiesOf} from '@storybook/vue';
import CircleArc from '../src/bg/CircleArc';
import NiceLine from '../src/bg/NiceLine';
import DotLight from '../src/earth/DotLight';
import DotLightLow from '../src/earth/DotLightLow';
import DoubleLightButton from '../src/earth/DoubleLightButton';
import Earth from '../src/earth/Earth';
import Light from '../src/earth/Light';
import TripleLightButton from '../src/earth/TripleLightButton';
import {themes} from '@storybook/theming';

storiesOf('bg', module)
  .add('with CircleArc', () => ({
    components: {CircleArc},
    template: '<CircleArc/>',
  }))
  .add('with NiceLine', () => ({
    components: {NiceLine},
    template: '<NiceLine/>',
  }))

storiesOf('earth', module)
  .addParameters({
    options: {
      theme: themes.dark,
    },
  })
  .add('with DotLight', () => ({
    components: {DotLight},
    template: '<DotLight :style="{position: \'absolute\', top: \'50px\', left: \'50px\'}" />',
  }))
  .add('with DotLightLow', () => ({
    components: {DotLightLow},
    template: '<DotLightLow />'
  }))
  .add('with DoubleLightButton', () => ({
    components: {DoubleLightButton},
    template: '<DoubleLightButton text="ok" value="30p" :style="{ transform: \'\' }"/>'
  }))
  .add('with Light', () => ({
    components: {Light},
    template: '<Light :pos="[20, 20, 50, 50]"/>'
  }))
  .add('with TripleLightButton', () => ({
    components: {TripleLightButton},
    template: '<TripleLightButton text="ok" value="30p"/>'
  }))
  .add('with Earth', () => ({
    components: {Earth},
    template: '<Earth/>'
  }));
