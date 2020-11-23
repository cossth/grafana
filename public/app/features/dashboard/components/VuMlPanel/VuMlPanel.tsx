import { PanelModel } from '@grafana/data';
import { Container, CustomScrollbar, FeatureInfoBox, HorizontalGroup, ValuePicker } from '@grafana/ui';
import { Card } from 'app/core/components/Card/Card';
import React from 'react';
import { GetModelById, GetModels } from './models/models';
import { vuMlModel } from './models/vuMlModel';

interface VuMlPanelProps {
  panel: PanelModel;
}

interface State {
  models: vuMlModel[];
}

export class VuMlPanel extends React.PureComponent<VuMlPanelProps, State> {
  constructor(p, s) {
    super(p, s);
    this.state = { models: [] };
  }

  render() {
    const { models } = this.state;

    return (
      <CustomScrollbar autoHeightMin="100%">
        <Container padding="md">
          {!models.length && (
            <FeatureInfoBox title="VuMl Tab" url={'https://vunetsystems.com/document'}>
              <p>This is vuML panel, to know how to configure read documentation.</p>
            </FeatureInfoBox>
          )}
          {models.length ? (
            <>
              {this.renderListViewModel()}
              {this.renderAddViewModel()}
            </>
          ) : (
            GetModels().map((v, i) => (
              <Card key={i} title={v.name} description={v.description} onClick={() => this.addModel(v)} />
            ))
          )}
        </Container>
      </CustomScrollbar>
    );
  }
  renderListViewModel = () => {};
  renderAddViewModel = () => {
    var availableModels = GetModels().map(t => {
      return {
        value: t.id,
        label: t.name,
        description: t.description,
      };
    });

    return (
      <ValuePicker
        size="md"
        variant="primary"
        label="Add Model"
        options={availableModels}
        onChange={this.addModel}
        isFullWidth={false}
        menuPlacement="bottom"
      />
    );
  };
  addModel = (m: vuMlModel<any>) => {
    var models = [...this.state.models, GetModelById(m.id)];
    this.setState({ models });
  };
}
