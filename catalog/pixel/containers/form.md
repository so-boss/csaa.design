### ACTION > BLOCK + DRAWER

```react|plain
<UI.Action
  id="vehicle_block"
  vehicle="2006 HONDA ACCORD"
  vin="KDIOPW29812934"
  drawer="expanded"
>
  <UI.Drawer id="interview">
    <UI.Question
      id="remove_driver_reason"
      driver="Emily"
    />
  </UI.Drawer>
</UI.Action>
```
```react|plain
<ActionBlock
  lines={[
    'Emily Swanker',
    'Removing driver from your policy',
  ]}
  drawer="expanded"
>
  <UI.Drawer id="interview">
    <UI.Question
      id="remove_driver_reason"
      driver="Emily"
    />
  </UI.Drawer>
</ActionBlock>
```
```react|plain
<ActionBlock
  lines={[
    'William Jones',
    'Tell us about this driver',
  ]}
  drawer="expanded"
>
  <UI.Drawer id="interview">
    <UI.Question
      id="state_licensed"
      driver="William"
    />
  </UI.Drawer>
</ActionBlock>
```
```react|plain
<Action drawer="expanded">
  <UI.Drawer id="interview">
    <UI.Question
      id="license_number"
      driver="William"
    />
  </UI.Drawer>
</Action>
```
```react|plain
<Action drawer="expanded">
  <UI.Drawer id="interview">
    <UI.Question
      id="age_licensed"
      driver="William"
    />
  </UI.Drawer>
</Action>
```
```react|plain
<Action drawer="expanded">
  <UI.Drawer id="interview">
    <UI.Question
      id="relationship_to"
      driver="William"
      driver2="Amanda"
    />
  </UI.Drawer>
</Action>
```
```react|plain
<Action drawer="expanded">
  <UI.Drawer id="interview">
    <UI.Question
      id="marital_status"
      driver="William"
    />
  </UI.Drawer>
</Action>
```
```react|plain
<Action drawer="expanded">
  <UI.Drawer id="interview">
    <UI.Question id="modifying_more"/>
  </UI.Drawer>
</Action>
```
```react|plain
<ActionBlock
  icon={{
    id: 'core-auto',
    size: 'm',
  }}
  lines={[
    'CAAS100383547',
    'Second line about this and that',
    'Policy Period 12/31/2018 to 12/31/2019',
  ]}
>
  <Drawer>
    {{
      body: (
        <Wrapper>
          <Group id="1" type="step">
            {{
              header: (
                <Title>Why are you removing Emily from your policy?</Title>
              ),
              body: 'select reason',
            }}
          </Group>
        </Wrapper>
      ),
      footer: (
        <React.Fragment>
          <ActionLink>Back</ActionLink>
          <ActionButton>Save</ActionButton>
        </React.Fragment>
      ),
    }}
  </Drawer>
</ActionBlock>
```


```react|plain
<ActionBlock
  lines={[
    'Add Driver',
    'Get coverage for another driver in your household',
  ]}
>
  <Drawer>
    {{
      body: (
        <Wrapper>
          <Group id="1" type="step">
            {{
              header: (
                <Title>Pleasae enter the following information:</Title>
              ),
              body: (
                <form>
                  <input placeholder="First Name"/>
                  <input placeholder="Middle"/>
                  <input placeholder="Last Name"/>
                  <input placeholder="Suffix"/>
                  <input placeholder="Date of Birth"/>
                </form>
              ),
            }}
          </Group>
        </Wrapper>
      ),
      footer: (
        <React.Fragment>
          <ActionLink>Back</ActionLink>
          <ActionLink>Next</ActionLink>
        </React.Fragment>
      ),
    }}
  </Drawer>
</ActionBlock>
```
