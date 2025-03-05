import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

export default function AdminDashboard() {
  const [pages, setPages] = useState([]);
  const [newPage, setNewPage] = useState("");
  const [sports, setSports] = useState([]);
  const [newSport, setNewSport] = useState("");
  const [rules, setRules] = useState([]);
  const [newRule, setNewRule] = useState("");

  const addPage = () => {
    if (newPage.trim() !== "") {
      setPages([...pages, newPage]);
      setNewPage("");
    }
  };

  const addSport = () => {
    if (newSport.trim() !== "") {
      setSports([...sports, newSport]);
      setNewSport("");
    }
  };

  const addRule = () => {
    if (newRule.trim() !== "") {
      setRules([...rules, newRule]);
      setNewRule("");
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      
      <Card>
        <CardContent className="space-y-4">
          <h2 className="text-xl font-semibold">Pagina's beheren</h2>
          <div className="flex space-x-2">
            <Input
              value={newPage}
              onChange={(e) => setNewPage(e.target.value)}
              placeholder="Nieuwe pagina naam"
            />
            <Button onClick={addPage}>Toevoegen</Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Pagina</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pages.map((page, index) => (
                <TableRow key={index}>
                  <TableCell>{page}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4">
          <h2 className="text-xl font-semibold">Sporten beheren</h2>
          <div className="flex space-x-2">
            <Input
              value={newSport}
              onChange={(e) => setNewSport(e.target.value)}
              placeholder="Nieuwe sport naam"
            />
            <Button onClick={addSport}>Toevoegen</Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Sport</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sports.map((sport, index) => (
                <TableRow key={index}>
                  <TableCell>{sport}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4">
          <h2 className="text-xl font-semibold">Regels beheren</h2>
          <div className="flex space-x-2">
            <Textarea
              value={newRule}
              onChange={(e) => setNewRule(e.target.value)}
              placeholder="Nieuwe regel toevoegen"
            />
            <Button onClick={addRule}>Toevoegen</Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Regel</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rules.map((rule, index) => (
                <TableRow key={index}>
                  <TableCell>{rule}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
