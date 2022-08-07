export default function ThemeShowcase(): JSX.Element {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-display">Display Font</h1>
      <p className="font-body">
        Body font: Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Provident obcaecati dignissimos nostrum? Nobis nam nemo, doloremque
        praesentium, tenetur aliquam autem sequi placeat, rerum rem atque
        dignissimos sint quo laboriosam sed.
      </p>
      <p className="font-mono">
        Code font: != !== {">="} {"<="} Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Eveniet sit, consectetur, voluptates fugiat cumque
        libero, totam pariatur illo accusamus quod sint. Ea fuga aspernatur
        debitis accusamus dolores doloribus, natus sit!
      </p>
      <h1 className="font-display">Colors:</h1>
      <div className="grid gap-0 grid-cols-4 text-sm text-center">
        <div className="p-2 bg-polar-night-0 text-snow-storm-1">
          Polar Night 0
        </div>
        <div className="p-2 bg-polar-night-1 text-snow-storm-1">
          Polar Night 1
        </div>
        <div className="p-2 bg-polar-night-2 text-snow-storm-1">
          Polar Night 2
        </div>
        <div className="p-2 bg-polar-night-3 text-snow-storm-1">
          Polar Night 3
        </div>
        <div className="p-2 bg-snow-storm-0">Snow Storm 0</div>
        <div className="p-2 bg-snow-storm-1">Snow Storm 1</div>
        <div className="p-2 bg-snow-storm-2">Snow Storm 2</div>
        <div className="p-2 bg-frost-0">Frost 0</div>
        <div className="p-2 bg-frost-1">Frost 1</div>
        <div className="p-2 bg-frost-2">Frost 2</div>
        <div className="p-2 bg-frost-3">Frost 3</div>
        <div className="p-2 bg-aurora-0">Aurora 0</div>
        <div className="p-2 bg-aurora-1">Aurora 1</div>
        <div className="p-2 bg-aurora-2">Aurora 2</div>
        <div className="p-2 bg-aurora-3">Aurora 3</div>
        <div className="p-2 bg-aurora-4">Aurora 4</div>
      </div>
    </div>
  );
}
