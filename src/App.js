import React,{Component} from 'react';
import "semantic-ui-css/semantic.min.css";
import{
  Grid,
  Form,
  Button,
  Segment,
  Divider,
  Header,
  Icon,
  Search,
  Dimmer,
  Loader,
  Image,
  Placeholder,
  List,
  Table,
  Menu,
  Label
}from "semantic-ui-react";

class App extends Component {
  render(){
    return (
      <div>
        <br/><br/><br/><br/><br/>
        <Segment>
          <Grid columns={2} stackable textAlign="center">
            <Divider vertical>Or</Divider>
            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Header icon>
                  <Icon name="file pdf outline"/>
                  Cari Document
                </Header>
                <br/>
                <Search placeholder="Seacrh Document"/>
              </Grid.Column>
              <Grid.Column>
                <Header icon>
                  <Icon name="file pdf outline"/>
                  Tambah Document Baru
                </Header>
                <br />
                <Button primary>Create Document</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment>
          <Dimmer active>
            <Loader />
            <br/><br/><br/><br/>
              Loading
          </Dimmer>
          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </Segment>

        <Grid Content columns={3}>
          <Grid.Column width={5}>
            <Segment>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>
          <Grid.Column width={8}>
          <Segment>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
          </Grid.Column>
          <Grid.Column width={3}>
            <Segment>
              <List>
                <List.Header>
                  <b>Website Terkait</b>
                </List.Header>
                <List.Item>
                  <List.Icon name="linkify"/>
                  <List.Content>
                      <a href="http://www.google.com" rel="noopener noreferrer" target="_blank">Google</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="linkify"/>
                  <List.Content>
                      <a href="http://www.facebook.com" rel="noopener noreferrer" target="_blank">Facebook</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="linkify"/>
                  <List.Content>
                        <a href="https://react.semantic-ui.com" rel="noopener noreferrer" target="_blank">Semantic UI</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="linkify"/>
                  <List.Content>
                      <a href="http://niomic.com" rel="noopener noreferrer" target="_blank">Niomic</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="linkify"/>
                  <List.Content>
                      <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">React</a>
                  </List.Content>
                </List.Item>
              </List>
            </Segment>
          </Grid.Column>

        </Grid>
        <br/>
        <Grid Content columns={3}>
          <Grid.Column width={2}>
          </Grid.Column>
          <Grid.Column width={13}>

              <Form>
                <Table celled>
                  <Table.Header >
                    <Table.Row >
                      <Table.HeaderCell  colSpan="2">
                        <Search aligned="right" placeholder="Seacrh document"/>
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Header>
                   <Table.Row>
                    <Table.HeaderCell textAlign="center">Nama Document</Table.HeaderCell>
                    <Table.HeaderCell textAlign="center">Jenis File</Table.HeaderCell>
                   </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Label ribbon>Panduan Belajar Javascript</Label>
                      </Table.Cell>
                      <Table.Cell textAlign="center">
                        PDF
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        Panduan Belajar CSS
                      </Table.Cell>
                      <Table.Cell textAlign="center">
                        PDF
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        Panduan Belajar React JS
                      </Table.Cell>
                      <Table.Cell textAlign="center">
                        PDF
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>

                  <Table.Footer>
                    <Table.Row>
                      <Table.HeaderCell colSpan="2">
                        <Menu floated='right' pagination>
                          <Menu.Item as='a' icon>
                            <Icon name="chevron left"/>
                          </Menu.Item>
                          <Menu.Item>1</Menu.Item>
                          <Menu.Item>2</Menu.Item>
                          <Menu.Item>3</Menu.Item>
                          <Menu.Item>4</Menu.Item>
                          <Menu.Item as='a' icon>
                            <Icon name="chevron right"/>
                          </Menu.Item>
                        </Menu>
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Footer>

                </Table>
              </Form>

          </Grid.Column>

        </Grid>
      </div>
    );
  }
}

export default App;
