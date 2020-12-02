import { PanelModel } from '@grafana/data';
import { Container, CustomScrollbar, FeatureInfoBox, ValuePicker } from '@grafana/ui';
import { Card } from 'app/core/components/Card/Card';
import React from 'react';
import { GetModels } from './models/models';
import { vuMlModel } from './models/vuMlModel';

interface VuMlPanelProps {
  panel: PanelModel;
}

interface State {
  selectedModel?: vuMlModel<any>;
}

export class VuMlPanel extends React.PureComponent<VuMlPanelProps, State> {
  constructor(p: VuMlPanelProps, s: State) {
    super(p, s);
    this.state = {};
  }

  render() {
    const { selectedModel } = this.state;

    return (
      <CustomScrollbar autoHeightMin="100%">
        <Container padding="md">
          {!!!selectedModel && (
            <FeatureInfoBox title="VuMl Tab" url={'https://vunetsystems.com/document'}>
              <p>This is vuML panel, to know how to configure read documentation.</p>
            </FeatureInfoBox>
          )}
          {!!selectedModel
            ? this.renderListViewModel()
            : GetModels().map((v, i) => (
                <Card key={i} title={v.name} description={v.description} onClick={() => this.changeModel(v)} />
              ))}
        </Container>
      </CustomScrollbar>
    );
  }
  renderListViewModel = () => {
    const { selectedModel } = this.state;
    console.log(selectedModel?.editor);
    return selectedModel?.editor();
  };
  changeModel = (selectedModel: vuMlModel<any>) => {
    this.setState({ selectedModel });
  };
}
