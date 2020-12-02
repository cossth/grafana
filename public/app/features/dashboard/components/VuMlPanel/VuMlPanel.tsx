import { PanelModel } from '@grafana/data';
import { getBackendSrv } from '@grafana/runtime';
import {
  Button,
  Container,
  CustomScrollbar,
  FeatureInfoBox,
  Field,
  HorizontalGroup,
  Legend,
  LinkButton,
  Switch,
  VerticalGroup,
} from '@grafana/ui';
import { BackButton } from 'app/core/components/BackButton/BackButton';
import { Card } from 'app/core/components/Card/Card';
import React from 'react';
import { backendSrv } from 'test/mocks/common';
import { GetModels } from './models/models';
import { vuMLModelOptions, vuMlModel } from './models/vuMlModel';

interface VuMlPanelProps {
  panel: PanelModel;
}

interface State {
  selectedModel?: vuMlModel<any>;
  selectedModelActive?: boolean;
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
          {!!selectedModel ? (
            <>
              <VerticalGroup>
                <BackButton surface="panel" onClick={() => this.changeModel(undefined)} />
                {this.renderEditor()}
              </VerticalGroup>
            </>
          ) : (
            GetModels().map((v, i) => (
              <Container padding="sm" key={i}>
                <Card title={v.name} description={v.description} onClick={() => this.changeModel(v)} />
              </Container>
            ))
          )}
        </Container>
      </CustomScrollbar>
    );
  }

  changeModel = (selectedModel?: vuMlModel<any>) => {
    this.setState({ selectedModel, selectedModelActive: true });
  };

  renderEditor = () => {
    const { id: panelId } = this.props.panel;

    const VuMlQueryEditor = this.state.selectedModel?.editor;
    let data: vuMLModelOptions = { id: '1234', name: 'trend', active: true, options: {} };
    let active = this.state.selectedModelActive;
    if (VuMlQueryEditor) {
      return (
        <Container padding="md">
          <Legend>Enable/Disable</Legend>
          <Field label="Enable model">
            <Switch value={active || false} onChange={e => this.toggleModel(data.id)} />
          </Field>

          <HorizontalGroup>
            <Button type="submit">Submit</Button>
            <LinkButton href={'/org/users'} variant="secondary">
              Back
            </LinkButton>
          </HorizontalGroup>
          <VuMlQueryEditor modelId={'P' + panelId} updateModel={this.updateModel} modelData={data} />
        </Container>
      );
    }
    return <div>No Editor</div>;
  };

  toggleModel = (id: string) => {
    this.setState({ selectedModelActive: !!!this.state.selectedModelActive });
  };
  updateModel = (id: string, data: vuMLModelOptions) => {
    console.log(id, data);
  };
}
